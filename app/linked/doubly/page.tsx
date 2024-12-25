import { PageNavigation } from "@/components/page-navigation";

 export default function DoublyLinkedListPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Doubly Linked Lists</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Structure</h2>
        <p className="text-gray-700 mb-4">
          A doubly linked list consists of nodes that contain data and two pointers: one to the next node and one to the previous node.
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code>{`
[prev|data|next] ⟺ [prev|data|next] ⟺ [prev|data|next]
null ← prev    next → prev    next → prev    next → null
          `}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Implementation</h2>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">{`interface DoublyNode<T> {
  data: T;
  next: DoublyNode<T> | null;
  prev: DoublyNode<T> | null;
}

interface DoublyLinkedList<T> {
  // Basic operations
  insertFirst(data: T): void;
  insertLast(data: T): void;
  insertAt(data: T, index: number): boolean;
  
  // Removal operations
  removeFirst(): T | undefined;
  removeLast(): T | undefined;
  removeAt(index: number): T | undefined;
  
  // Utility operations
  size(): number;
  isEmpty(): boolean;
  clear(): void;
  
  // Search operations
  indexOf(data: T): number;
  contains(data: T): boolean;
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
                <th className="pb-4">Time Complexity</th>
                <th className="pb-4">Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">Insert First/Last</td>
                <td>O(1)</td>
                <td>Direct access to both ends</td>
              </tr>
              <tr>
                <td className="py-2">Remove First/Last</td>
                <td>O(1)</td>
                <td>Direct access to both ends</td>
              </tr>
              <tr>
                <td className="py-2">Insert/Remove at Index</td>
                <td>O(n)</td>
                <td>Requires traversal</td>
              </tr>
              <tr>
                <td className="py-2">Search</td>
                <td>O(n)</td>
                <td>Can search from either end</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Advantages</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Bidirectional traversal</li>
          <li>Efficient removal of nodes</li>
          <li>No need to keep track of previous node during traversal</li>
          <li>Can be used to implement efficient LRU caches</li>
        </ul>
      </section>

      <PageNavigation
        previousPage={{
          href: "/linked/singly",
          label: "Singly Linked Lists"
        }}
        nextPage={{
          href: "/linked/circular",
          label: "Circular Linked Lists"
        }}
        relatedPages={[
          { href: "/linked/comparison", label: "List Comparison" },
          { href: "/data-structures/lru-cache", label: "LRU Cache" },
          { href: "/algorithms/list-operations", label: "List Operations" }
        ]}
        projects={[
          { href: "/projects/browser-history", label: "Browser History" },
          { href: "/projects/undo-redo", label: "Undo/Redo System" }
        ]}
      />
    </div>
  )
}