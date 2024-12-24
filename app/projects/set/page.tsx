'use client';

export default function SetPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Set Class</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Set Header File</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`// set.h
template <class Item>
class set {
public:
    typedef std::size_t size_type;
    static const size_type CAPACITY = 30;
    
    // Constructors
    set();
    set(const set& source);
    
    // Modification member functions
    void insert(const Item& entry);
    bool erase(const Item& target);
    void operator=(const set& source);
    void operator+=(const set& addend);
    void operator*=(const set& multiplier);
    
    // Constant member functions
    size_type size() const;
    bool contains(const Item& target) const;
    
private:
    Item data[CAPACITY];
    size_type used;
};`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Set Operations</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Union (+=)</h3>
            <pre className="bg-gray-50 p-3 rounded text-sm">
              <code>{`s1 += s2;  // Add all elements from s2 to s1
// Duplicates are not added`}</code>
            </pre>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Intersection (*=)</h3>
            <pre className="bg-gray-50 p-3 rounded text-sm">
              <code>{`s1 *= s2;  // Keep only elements in both sets
// Result stored in s1`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Example Usage</h2>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code className="text-black">{`set<int> s1, s2;

// Insert elements
s1.insert(10);
s1.insert(20);
s1.insert(30);

s2.insert(20);
s2.insert(40);

// Union
s1 += s2;  // s1 now contains {10, 20, 30, 40}

// Check membership
if (s1.contains(20)) {
    cout << "Found 20";
}

// Remove element
s1.erase(30);  // Returns true if found and removed`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Time Complexity</h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="border p-4 rounded-lg">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Operation</th>
                  <th className="px-4 py-2">Time</th>
                  <th className="px-4 py-2">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">insert</td>
                  <td className="border px-4 py-2">O(n)</td>
                  <td className="border px-4 py-2">Must check for duplicates</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">erase</td>
                  <td className="border px-4 py-2">O(n)</td>
                  <td className="border px-4 py-2">Search and shift</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">contains</td>
                  <td className="border px-4 py-2">O(n)</td>
                  <td className="border px-4 py-2">Linear search</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">+=</td>
                  <td className="border px-4 py-2">O(n²)</td>
                  <td className="border px-4 py-2">Check each element</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">*=</td>
                  <td className="border px-4 py-2">O(n²)</td>
                  <td className="border px-4 py-2">Check each element</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}