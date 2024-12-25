import { PageNavigation } from "@/components/page-navigation"

export default function ArraysPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Arrays</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What is an Array?</h2>
        <p className="text-gray-700 mb-4">
          An array is a fundamental data structure that stores elements of the same type in contiguous memory locations.
          Each element can be accessed directly using an index, making arrays efficient for random access operations.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Characteristics</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Fixed size (in most implementations)</li>
          <li>Contiguous memory allocation</li>
          <li>O(1) time complexity for random access</li>
          <li>Same data type for all elements</li>
          <li>Zero-based indexing (in most languages)</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Time Complexities</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="pb-4">Operation</th>
                <th className="pb-4">Time Complexity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">Access</td>
                <td>O(1)</td>
              </tr>
              <tr>
                <td className="py-2">Search</td>
                <td>O(n)</td>
              </tr>
              <tr>
                <td className="py-2">Insertion (at end)</td>
                <td>O(1)</td>
              </tr>
              <tr>
                <td className="py-2">Insertion (at position)</td>
                <td>O(n)</td>
              </tr>
              <tr>
                <td className="py-2">Deletion (at end)</td>
                <td>O(1)</td>
              </tr>
              <tr>
                <td className="py-2">Deletion (at position)</td>
                <td>O(n)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Implementation Example</h2>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">{`// Dynamic array implementation in TypeScript
class DynamicArray<T> {
  private array: T[];
  private size: number;
  private capacity: number;

  constructor(initialCapacity: number = 10) {
    this.array = new Array(initialCapacity);
    this.size = 0;
    this.capacity = initialCapacity;
  }

  push(element: T): void {
    if (this.size === this.capacity) {
      this.resize();
    }
    this.array[this.size] = element;
    this.size++;
  }

  private resize(): void {
    this.capacity *= 2;
    const newArray = new Array(this.capacity);
    for (let i = 0; i < this.size; i++) {
      newArray[i] = this.array[i];
    }
    this.array = newArray;
  }
}`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Common Use Cases</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Storing sequential data</li>
          <li>Temporary storage for sorting algorithms</li>
          <li>Buffer for reading file content</li>
          <li>Implementation of other data structures (stacks, queues)</li>
          <li>Matrix operations</li>
        </ul>
      </section>

      <PageNavigation 
              previousPage={{
                href: "/adt",
                label: "Abstract Data Types"
              }}
              nextPage={{
                href: "/arrays/dynamic",
                label: "Dynamic Arrays"
              }}
              relatedPages={[
                { href: "/linked", label: "Linked Lists" },
                { href: "/arrays/circular", label: "Circular arrays" },
              ]}
              projects={[
                  { href: "/projects/vector", label: "Vector Implementation" },
                  { href: "/projects/bag", label: "Bag Class Implementation" },
                  { href: "/projects/sequence/array", label: "Sequence Class Implementation" },
              ]}
            />
    </div>
  )
}