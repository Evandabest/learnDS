'use client';

export default function BagPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Bag Class</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is a Bag?</h2>
        <p className="mb-4">
          A bag is an unordered collection where items can appear multiple times.
          Think of it like a shopping bag where you can put multiple items of the same type.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Bag Header File</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`// bag.h
template <class Item>
class bag {
public:
    // Typedefs and member constants
    typedef std::size_t size_type;
    static const size_type CAPACITY = 30;
    
    // Constructors
    bag();
    bag(const bag& source);
    
    // Modification member functions
    void insert(const Item& entry);
    void operator +=(const bag& addend);
    bool erase_one(const Item& target);
    size_type erase(const Item& target);
    void operator =(const bag& source);
    
    // Constant member functions
    size_type size() const;
    size_type count(const Item& target) const;
    
private:
    Item data[CAPACITY];
    size_type used;
};`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Operations</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Insert</h3>
            <pre className="bg-gray-50 p-3 rounded text-sm">
              <code>{`void insert(const Item& entry)
// Precondition: size() < CAPACITY
// Postcondition: entry added to bag`}</code>
            </pre>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Erase</h3>
            <pre className="bg-gray-50 p-3 rounded text-sm">
              <code>{`bool erase_one(const Item& target)
// Removes one occurrence
// Returns true if found & removed`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Time Complexity</h2>
        <div className="border p-4 rounded-lg">
          <ul className="list-disc pl-5">
            <li>insert(): O(1)</li>
            <li>erase_one(): O(n)</li>
            <li>count(): O(n)</li>
            <li>operator+=(): O(n)</li>
            <li>size(): O(1)</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Usage Example</h2>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code className="text-black">{`bag<int> numbers;

// Insert items
numbers.insert(10);
numbers.insert(20);
numbers.insert(10);  // Duplicates allowed

// Count occurrences
cout << numbers.count(10);  // Outputs: 2
cout << numbers.size();     // Outputs: 3

// Remove one occurrence
numbers.erase_one(10);     // Removes one 10
cout << numbers.count(10);  // Outputs: 1`}</code>
        </pre>
      </section>
    </div>
  );
}