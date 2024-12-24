'use client';

export default function SequencePage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Sequence Class Project</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is a Sequence?</h2>
        <p className="mb-4">
          A sequence is a template class that maintains a list of items with a current position.
          Think of it as an array with a moveable cursor.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sequence Header File</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`// sequence.h
template <class Value>
class sequence {
public:
    // Typedefs
    typedef std::size_t size_type;
    
    // Constructors
    sequence();
    sequence(const sequence& source);
    
    // Destructor
    ~sequence();
    
    // Modification member functions
    void start();
    void advance();
    void insert(const Value& entry);
    void attach(const Value& entry);
    void remove_current();
    
    // Constant member functions
    size_type size() const;
    bool is_item() const;
    Value current() const;
    
private:
    static const size_type CAPACITY = 30;
    Value data[CAPACITY];
    size_type used;
    size_type current_index;
};`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Operations</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Navigation</h3>
            <ul className="list-disc pl-5">
              <li>start() - Move to start</li>
              <li>advance() - Move forward</li>
              <li>is_item() - Valid position?</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Modification</h3>
            <ul className="list-disc pl-5">
              <li>insert() - Add before current</li>
              <li>attach() - Add after current</li>
              <li>remove_current() - Remove at current</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Usage Example</h2>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code className="text-black">{`sequence<int> seq;

// Add elements
seq.insert(10);  // [10]
seq.attach(20);  // [10, 20]
seq.attach(30);  // [10, 20, 30]

// Navigation
seq.start();     // Current -> 10
seq.advance();   // Current -> 20
seq.advance();   // Current -> 30

// Modification
seq.insert(25);  // [10, 20, 25, 30]`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Time Complexity</h2>
        <div className="border p-4 rounded-lg">
          <ul className="list-disc pl-5">
            <li>start(): O(1)</li>
            <li>advance(): O(1)</li>
            <li>insert(): O(n)</li>
            <li>attach(): O(n)</li>
            <li>remove_current(): O(n)</li>
            <li>size(): O(1)</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preconditions & Postconditions</h2>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code className="text-black">{`void insert(const Value& entry)
// Precondition: size() < CAPACITY
// Postcondition: Entry inserted before current item

void attach(const Value& entry)
// Precondition: size() < CAPACITY
// Postcondition: Entry inserted after current item

void remove_current()
// Precondition: is_item() returns true
// Postcondition: Current item removed`}</code>
        </pre>
      </section>
    </div>
  );
}