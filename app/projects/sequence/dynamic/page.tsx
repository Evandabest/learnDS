'use client';

export default function DynamicSequencePage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Dynamic Array Sequence</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Dynamic Sequence Header</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`// sequence.h
template <class Value>
class sequence {
public:
    // Typedefs
    typedef std::size_t size_type;
    
    // Constructors and destructor
    sequence(size_type init_capacity = 30);
    sequence(const sequence& source);
    ~sequence();
    
    // Modification member functions
    void start();
    void advance();
    void insert(const Value& entry);
    void attach(const Value& entry);
    void remove_current();
    void operator=(const sequence& source);
    void resize(size_type new_capacity);
    
    // Constant member functions
    size_type size() const { return used; }
    size_type capacity() const { return current_capacity; }
    bool is_item() const;
    Value current() const;
    
private:
    Value* data;
    size_type used;
    size_type current_capacity;
    size_type current_index;
};`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Resizing Strategy</h2>
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <pre className="text-center text-lg">
            <code>{`Initial:  [1][2][3][4] capacity=4
Resize:   [1][2][3][4][_][_][_][_] capacity=8
Growth:   Double capacity when full`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Memory Management</h2>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code className="text-black">{`template <class Value>
void sequence<Value>::resize(size_type new_capacity) {
    Value* larger_array = new Value[new_capacity];
    
    // Copy existing elements
    for (size_type i = 0; i < used; ++i)
        larger_array[i] = data[i];
        
    // Delete old array and update pointers
    delete [] data;
    data = larger_array;
    current_capacity = new_capacity;
}`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Time Complexity</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Operations</h3>
            <ul className="list-disc pl-5">
              <li>start(): O(1)</li>
              <li>advance(): O(1)</li>
              <li>insert(): O(n)</li>
              <li>attach(): O(n)</li>
              <li>remove_current(): O(n)</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Amortized Analysis</h3>
            <ul className="list-disc pl-5">
              <li>resize(): O(n)</li>
              <li>Doubling strategy: O(1) amortized</li>
              <li>Space efficiency: O(n)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )}