import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(req: Request) {
  try {
    const { code } = await req.json();
    
    // Create temporary file
    const tempFile = path.join('/tmp', `code_${Date.now()}.cpp`);
    await writeFile(tempFile, code);
    
    // Compile and run
    const result = await new Promise<{stdout: string, stderr: string}>((resolve, reject) => {
      exec(`g++ ${tempFile} -o ${tempFile}.out && ${tempFile}.out`, 
        (error, stdout, stderr) => {
          if (error) {
            reject(error);
            return;
          }
          resolve({ stdout, stderr });
        });
    });
    
    return NextResponse.json({
      output: result.stdout,
      error: result.stderr
    });

  } catch (error) {
    return NextResponse.json({ message: 'Compilation failed', error }, { status: 500 });
  }
}