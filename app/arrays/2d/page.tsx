import { PageNavigation } from "@/components/page-navigation";

export default function TwoDArrayPage() {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">2D Arrays (Matrices)</h1>
  
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            A 2D array is an array of arrays, creating a grid-like data structure with rows and columns.
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg mb-4">
            <code>{`
  // Visual representation
  [1, 2, 3]    row 0
  [4, 5, 6]    row 1
  [7, 8, 9]    row 2
   ↑  ↑  ↑
  col0 1  2
  `}</code>
          </pre>
        </section>
  
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Implementation</h2>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">{`// Creating a 2D array
  const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Dynamic creation
  function create2DArray(rows: number, cols: number): number[][] {
    return Array.from({ length: rows }, 
      () => Array(cols).fill(0)
    );
  }
  
  // Access element at row i, column j
  const element = matrix[i][j];
  
  // Iterate through all elements
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // Process matrix[i][j]
    }
  }`}</code>
          </pre>
        </section>
  
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Time Complexities</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="text-left">
                  <th className="pb-4">Operation</th>
                  <th className="pb-4">Time</th>
                  <th className="pb-4">Space</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">Access</td>
                  <td>O(1)</td>
                  <td>O(1)</td>
                </tr>
                <tr>
                  <td className="py-2">Row Traversal</td>
                  <td>O(n)</td>
                  <td>O(1)</td>
                </tr>
                <tr>
                  <td className="py-2">Column Traversal</td>
                  <td>O(m)</td>
                  <td>O(1)</td>
                </tr>
                <tr>
                  <td className="py-2">Full Traversal</td>
                  <td>O(m×n)</td>
                  <td>O(1)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
  
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Common Applications</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Game boards (Chess, Tic-tac-toe)</li>
            <li>Image processing (Pixel matrices)</li>
            <li>Dynamic programming</li>
            <li>Graph representations</li>
            <li>Spreadsheet applications</li>
          </ul>
        </section>
  
        <PageNavigation
          previousPage={{
            href: "/arrays",
            label: "Arrays"
          }}
          nextPage={{
            href: "/linked",
            label: "Linked Lists"
          }}
          relatedPages={[
            { href: "/graphs", label: "Graphs" },
            { href: "/dfs", label: "Depth-First Search" },
            { href: "/bfs", label: "Breadth-First Search" }
          ]}
        />
      </div>
    )
  }