import { PageNavigation } from "@/components/page-navigation";

export default function DynamicArraysPage() {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Dynamic Arrays</h1>
  
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What is a Dynamic Array?</h2>
          <p className="text-gray-700 mb-4">
            A dynamic array is a resizable array that grows automatically when elements are added beyond its capacity. 
            Unlike static arrays, dynamic arrays manage their own memory allocation and deallocation.
          </p>
        </section>
  
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Automatic resizing</li>
            <li>Amortized O(1) insertion at end</li>
            <li>Memory efficiency through capacity management</li>
            <li>Better space utilization compared to linked lists</li>
          </ul>
        </section>
  
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Implementation Details</h2>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">{`class DynamicArray<T> {
    private array: T[];
    private size: number = 0;
    private capacity: number;
  
    constructor(initialCapacity: number = 16) {
      this.capacity = initialCapacity;
      this.array = new Array(initialCapacity);
    }
  
    push(element: T): void {
      if (this.size === this.capacity) {
        this.resize();
      }
      this.array[this.size] = element;
      this.size++;
    }
  
    pop(): T | undefined {
      if (this.size === 0) return undefined;
      this.size--;
      return this.array[this.size];
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
          <h2 className="text-2xl font-semibold mb-4">Time Complexities</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="text-left">
                  <th className="pb-4">Operation</th>
                  <th className="pb-4">Average Case</th>
                  <th className="pb-4">Worst Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">Access</td>
                  <td>O(1)</td>
                  <td>O(1)</td>
                </tr>
                <tr>
                  <td className="py-2">Push</td>
                  <td>O(1)</td>
                  <td>O(n)</td>
                </tr>
                <tr>
                  <td className="py-2">Pop</td>
                  <td>O(1)</td>
                  <td>O(1)</td>
                </tr>
                <tr>
                  <td className="py-2">Insert</td>
                  <td>O(n)</td>
                  <td>O(n)</td>
                </tr>
                <tr>
                  <td className="py-2">Delete</td>
                  <td>O(n)</td>
                  <td>O(n)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
  
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Common Applications</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Implementation of Stack data structure</li>
            <li>String builders</li>
            <li>Buffer pools</li>
            <li>Vector in C++</li>
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
            { href: "/arrays/circular", label: "Circular Arrays" },
            { href: "/stack", label: "Stack" },
            { href: "/queue", label: "Queues" }
            
          ]}
          projects={[
            { href: "/projects/sequence/array", label: "Sequence class implementation (static)" },
            { href: "/projects/sequence/dynamic", label: "Sequence class Implementation (dynamic)" },
            { href: "/projects/vector", label: "Vector Implementation" }
          ]}
        />
      </div>
    )
  }