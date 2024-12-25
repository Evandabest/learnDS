import { PageNavigation } from "@/components/page-navigation";

export default function CircularLinkedListPage() {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Circular Linked Lists</h1>
  
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            A circular linked list is a variation where the last node points back to the first node, creating a closed loop structure.
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg mb-4">
            <code>{`
  [1] → [2] → [3] → [4]
   ↑              ↓
   └──────────────┘
  `}</code>
          </pre>
        </section>
  
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Implementation</h2>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">{`interface CircularNode<T> {
    data: T;
    next: CircularNode<T> | null;
  }
  
  interface CircularList<T> {
    // Core operations
    insert(data: T): void;
    delete(data: T): boolean;
    
    // Utility methods
    size(): number;
    isEmpty(): boolean;
    
    // Circular list specific
    rotate(): void;
    hasCycle(): boolean;
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
                  <th className="pb-4">Note</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">Insert</td>
                  <td>O(1)</td>
                  <td>At tail with tail pointer</td>
                </tr>
                <tr>
                  <td className="py-2">Delete</td>
                  <td>O(n)</td>
                  <td>Requires traversal</td>
                </tr>
                <tr>
                  <td className="py-2">Search</td>
                  <td>O(n)</td>
                  <td>Full circle traversal</td>
                </tr>
                <tr>
                  <td className="py-2">Rotate</td>
                  <td>O(1)</td>
                  <td>With tail pointer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
  
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Applications</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Round-robin scheduling</li>
            <li>Circular queues</li>
            <li>Memory buffer management</li>
            <li>Game development (turn-based games)</li>
            <li>Task scheduling</li>
          </ul>
        </section>
  
        <PageNavigation
          previousPage={{
            href: "/linked/doubly",
            label: "Doubly Linked Lists"
          }}
          nextPage={{
            href: "/linked/applications",
            label: "List Applications"
          }}
          relatedPages={[
            { href: "/structures/queue", label: "Queue" },
            { href: "/algorithms/cycle-detection", label: "Cycle Detection" },
            { href: "/structures/buffer", label: "Buffer Implementation" }
          ]}
          projects={[
            { href: "/projects/scheduler", label: "Task Scheduler" },
            { href: "/projects/game-turns", label: "Turn-Based Game" }
          ]}
        />
      </div>
    )
  }