import { PageNavigation } from "@/components/page-navigation";

export default function StackProjectPage() {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Stack Implementation Project</h1>
  
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            A stack is a Last-In-First-Out (LIFO) data structure. You can implement a stack using:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Array (fixed size)</li>
            <li>Dynamic Array (resizable)</li>
            <li>Linked List (dynamic)</li>
          </ul>
        </section>
  
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Stack Interface</h2>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">{`interface Stack<T> {
    // Add element to top of stack
    push(element: T): void;
  
    // Remove and return top element
    pop(): T | undefined;
  
    // View top element without removing
    peek(): T | undefined;
  
    // Check if stack is empty
    isEmpty(): boolean;
  
    // Get number of elements
    size(): number;
  
    // Remove all elements
    clear(): void;
  }`}</code>
          </pre>
        </section>
  
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Operations Time Complexity</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="text-left">
                  <th className="pb-4">Operation</th>
                  <th className="pb-4">Array</th>
                  <th className="pb-4">Dynamic Array</th>
                  <th className="pb-4">Linked List</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">Push</td>
                  <td>O(1)</td>
                  <td>O(1)*</td>
                  <td>O(1)</td>
                </tr>
                <tr>
                  <td className="py-2">Pop</td>
                  <td>O(1)</td>
                  <td>O(1)</td>
                  <td>O(1)</td>
                </tr>
                <tr>
                  <td className="py-2">Peek</td>
                  <td>O(1)</td>
                  <td>O(1)</td>
                  <td>O(1)</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm mt-4">* Amortized time complexity</p>
          </div>
        </section>
  
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Project Requirements</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Implement the Stack interface using all three approaches</li>
            <li>Handle edge cases (empty stack, full stack)</li>
            <li>Add error handling for invalid operations</li>
            <li>Write unit tests for all operations</li>
            <li>Compare performance between implementations</li>
          </ol>
        </section>
  
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Practice Problems</h2>
          <ul className="space-y-4">
            <li>1. Implement a bracket matching validator</li>
            <li>2. Create an undo/redo system</li>
            <li>3. Build an expression evaluator</li>
            <li>4. Implement stack sorting</li>
          </ul>
        </section>
  
        <PageNavigation
          previousPage={{
            href: "/projects",
            label: "Projects"
          }}
          nextPage={{
            href: "/projects/queue",
            label: "Queues"
          }}
          relatedPages={[
            { href: "/arrays", label: "Arrays" },
            { href: "/linkedlist", label: "Linked Lists" },
            { href: "/projects/calculator", label: "Calculator Project" }
          ]}
          projects={[
            { href: "/projects/bracket-matcher", label: "Bracket Matcher" },
            { href: "/projects/expression-evaluator", label: "Expression Evaluator" }
          ]}
        />
      </div>
    )
  }