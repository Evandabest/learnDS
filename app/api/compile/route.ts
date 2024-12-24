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
    return new Promise((resolve) => {
      exec(`g++ ${tempFile} -o ${tempFile}.out && ${tempFile}.out`, 
        (error, stdout, stderr) => {
          resolve(NextResponse.json({
            output: stdout,
            error: stderr
          }));
        });
    });
  } catch (error) {
    return NextResponse.json({ error: 'Compilation failed' }, { status: 500 });
  }
}