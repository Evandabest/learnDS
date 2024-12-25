import { PageNavigation } from "@/components/page-navigation";

export default function RecursionPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Recursion</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Understanding Recursion</h2>
        <p className="text-gray-700 mb-4">
          Recursion is a method where the solution depends on solutions to smaller instances of the same problem.
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code>{`
Base Case → Terminating condition
↓
Recursive Case → Breaking down problem
↓
Stack building → Function calls pile up
↓
Stack unwinding → Results combine
          `}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Types of Recursion</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">1. Direct Recursion</h3>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">{`function factorial(n: number): number {
  if (n <= 1) return 1;              // Base case
  return n * factorial(n - 1);       // Direct recursive call
}`}</code>
        </pre>

        <h3 className="text-xl font-semibold mt-6 mb-3">2. Indirect Recursion</h3>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">{`function isEven(n: number): boolean {
  if (n === 0) return true;
  return isOdd(n - 1);
}

function isOdd(n: number): boolean {
  if (n === 0) return false;
  return isEven(n - 1);
}`}</code>
        </pre>

        <h3 className="text-xl font-semibold mt-6 mb-3">3. Tail Recursion</h3>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">{`function tailFactorial(n: number, acc: number = 1): number {
  if (n <= 1) return acc;
  return tailFactorial(n - 1, n * acc);  // Tail recursive
}`}</code>
        </pre>

        <h3 className="text-xl font-semibold mt-6 mb-3">4. Tree Recursion</h3>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">{`function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);  // Multiple recursive calls
}`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Memory Implications</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="pb-4">Type</th>
                <th className="pb-4">Space Complexity</th>
                <th className="pb-4">Stack Depth</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">Linear Recursion</td>
                <td>O(n)</td>
                <td>n</td>
              </tr>
              <tr>
                <td className="py-2">Tail Recursion</td>
                <td>O(1)*</td>
                <td>1*</td>
              </tr>
              <tr>
                <td className="py-2">Tree Recursion</td>
                <td>O(2^n)</td>
                <td>n</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm mt-4">* With proper tail call optimization</p>
        </div>
      </section>

      <PageNavigation
        previousPage={{
          href: "/dijskstras/bellmonford",
          label: "Bellman-Ford Algorithm"
        }}
        nextPage={{
          href: "/sorting/bubble",
          label: "Bubble Sort"
        }}
        relatedPages={[
          { href: "/sorting/quick", label: "Quick Sort" },
          { href: "/sorting/merge", label: "Merge Sort" },
        ]}
        projects={[
          { href: "/projects/bst", label: "Binary Search Tree" },
        ]}
      />
    </div>
  )
}