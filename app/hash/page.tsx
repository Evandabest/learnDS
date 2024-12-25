'use client';

import { PageNavigation } from "@/components/page-navigation";

export default function HashPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Hash Tables & Functions</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Hash Table Header</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`// hash_table.h
template<class Item>
class hash_table {
public:
    // Typedefs and constants
    typedef std::size_t size_type;
    static const size_type CAPACITY = 811;  // Prime number
    
    // Constructor
    hash_table();
    
    // Modification member functions
    void insert(const Item& entry);
    bool remove(const Item& target);
    
    // Constant member functions
    bool is_present(const Item& target) const;
    void find(const Item& target, bool& found, size_type& index) const;
    double load_factor() const;
    
private:
    Item data[CAPACITY];
    bool used[CAPACITY];
    size_type count;
    size_type hash(const Item& key) const;
    size_type next_index(size_type index) const;  // For probing
};`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Hash Functions</h2>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code className="text-black">{`// String hashing
size_type hash(const string& key) {
    size_type hash_value = 0;
    for (char ch : key)
        hash_value = 37 * hash_value + ch;
    return hash_value % CAPACITY;
}

// Integer hashing
size_type hash(int key) {
    return key % CAPACITY;
}

// Double hashing
size_type hash(double key) {
    return size_type(key * CAPACITY) % CAPACITY;
}`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Collision Resolution</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Linear Probing</h3>
            <pre className="bg-gray-50 p-3 rounded text-sm">
              <code>{`next_index = (current + 1) % CAPACITY`}</code>
            </pre>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Quadratic Probing</h3>
            <pre className="bg-gray-50 p-3 rounded text-sm">
              <code>{`next_index = (current + i*i) % CAPACITY`}</code>
            </pre>
          </div>
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
                <td className="border px-4 py-2">Insert</td>
                <td className="border px-4 py-2">O(1)</td>
                <td className="border px-4 py-2">O(n)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Search</td>
                <td className="border px-4 py-2">O(1)</td>
                <td className="border px-4 py-2">O(n)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Delete</td>
                <td className="border px-4 py-2">O(1)</td>
                <td className="border px-4 py-2">O(n)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Load Factor</h2>
        <div className="border p-4 rounded-lg">
          <p className="mb-4">Load Factor = n/m where:</p>
          <ul className="list-disc pl-5">
            <li>n = number of items stored</li>
            <li>m = size of hash table</li>
            <li>Should be kept below 0.7</li>
            <li>Affects performance significantly</li>
          </ul>
        </div>
      </section>
      
      <PageNavigation
        previousPage={{
            href: "/sorting/merge",
            label: "Merge sort"
        }}
        relatedPages={[
            { href: "/arrays", label: "Arrays" },
            
        ]}
        />      
    </div>
  );
}