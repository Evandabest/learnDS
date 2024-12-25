import { PageNavigation } from "@/components/page-navigation";

export default function QueueProjectPage() {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Queue Implementation Project</h1>
  
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            A queue is a First-In-First-Out (FIFO) data structure. Implementation options include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Array-based (circular buffer)</li>
            <li>Dynamic Array</li>
            <li>Linked List</li>
          </ul>
        </section>
  
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Queue Interface</h2>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">{`interface Queue<T> {
    // Add element to back of queue
    enqueue(element: T): void;
  
    // Remove and return front element
    dequeue(): T | undefined;
  
    // View front element without removing
    peek(): T | undefined;
  
    // Check if queue is empty
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
                  <th className="pb-4">Circular Array</th>
                  <th className="pb-4">Dynamic Array</th>
                  <th className="pb-4">Linked List</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">Enqueue</td>
                  <td>O(1)</td>
                  <td>O(1)*</td>
                  <td>O(1)</td>
                </tr>
                <tr>
                  <td className="py-2">Dequeue</td>
                  <td>O(1)</td>
                  <td>O(n)</td>
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
            <li>Implement Queue using all three approaches</li>
            <li>Handle edge cases (empty queue, full queue)</li>
            <li>Implement circular buffer for array-based queue</li>
            <li>Write comprehensive unit tests</li>
            <li>Compare implementation trade-offs</li>
          </ol>
        </section>
  
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Practice Problems</h2>
          <ul className="space-y-4">
            <li>1. Implement a print queue system</li>
            <li>2. Build a task scheduler</li>
            <li>3. Create a buffer for stream processing</li>
            <li>4. Design a customer service queue</li>
          </ul>
        </section>
  
        <PageNavigation
          previousPage={{
            href: "/projects/stack",
            label: "Stack Project"
          }}
          nextPage={{
            href: "/projects/deque",
            label: "Deque Project"
          }}
          relatedPages={[
            { href: "/arrays", label: "Arrays" },
            { href: "/linked", label: "Linked Lists" },
          ]}
          projects={[
            { href: "/projects/print-queue", label: "Print Queue" },
            { href: "/projects/task-scheduler", label: "Task Scheduler" }
          ]}
        />
      </div>
    )
  }