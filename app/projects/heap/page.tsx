'use client';

export default function PriorityQueuePage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Priority Queue Project</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Header File</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`// priority_queue.h
template <class Item>
class priority_queue {
public:
    // Typedefs and member constants
    typedef std::size_t size_type;
    static const size_type CAPACITY = 30;
    
    // Constructors
    priority_queue();
    priority_queue(const priority_queue& source);
    
    // Modification member functions
    void push(const Item& entry);
    Item pop();
    void operator=(const priority_queue& source);
    
    // Constant member functions
    size_type size() const;
    bool empty() const;
    Item top() const;
    
private:
    Item data[CAPACITY];
    size_type used;
    void reheapify_up(size_type index);
    void reheapify_down(size_type index);
};`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Operations</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">push</h3>
            <pre className="bg-gray-50 p-3 rounded text-sm">
              <code>{`void push(const Item& entry)
// Precondition: size() < CAPACITY
// Postcondition: entry added to heap`}</code>
            </pre>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">pop</h3>
            <pre className="bg-gray-50 p-3 rounded text-sm">
              <code>{`Item pop()
// Precondition: !empty()
// Postcondition: removes & returns highest priority`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Implementation Notes</h2>
        <div className="border p-4 rounded-lg">
          <ul className="list-disc pl-5">
            <li>Uses array-based complete binary tree</li>
            <li>Parent at (i-1)/2</li>
            <li>Left child at 2i + 1</li>
            <li>Right child at 2i + 2</li>
            <li>Maintains heap property</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Time Complexity</h2>
        <div className="border p-4 rounded-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Operation</th>
                <th className="px-4 py-2">Average Case</th>
                <th className="px-4 py-2">Worst Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">push</td>
                <td className="border px-4 py-2">O(log n)</td>
                <td className="border px-4 py-2">O(log n)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">pop</td>
                <td className="border px-4 py-2">O(log n)</td>
                <td className="border px-4 py-2">O(log n)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">top</td>
                <td className="border px-4 py-2">O(1)</td>
                <td className="border px-4 py-2">O(1)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}