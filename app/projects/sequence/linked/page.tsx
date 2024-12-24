'use client';

export default function LinkedSequencePage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Linked Sequence Project</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Node Class Header</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`// node.h
template <class Item>
class node {
public:
    // Constructor
    node(const Item& init_data = Item(),
         node* init_link = nullptr)
    { data_field = init_data; link_field = init_link; }

    // Member functions
    Item& data() { return data_field; }
    node* link() { return link_field; }
    const node* link() const { return link_field; }
    void set_data(const Item& new_data) { data_field = new_data; }
    void set_link(node* new_link) { link_field = new_link; }

private:
    Item data_field;
    node* link_field;
};`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sequence Class Header</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`// sequence.h
template <class Value>
class sequence {
public:
    // Typedefs
    typedef std::size_t size_type;
    
    // Constructors and destructor
    sequence();
    sequence(const sequence& source);
    ~sequence();
    
    // Modification member functions
    void start();
    void advance();
    void insert(const Value& entry);
    void attach(const Value& entry);
    void remove_current();
    void operator=(const sequence& source);
    
    // Constant member functions
    size_type size() const;
    bool is_item() const;
    Value current() const;
    
private:
    node<Value>* head_ptr;
    node<Value>* tail_ptr;
    node<Value>* cursor;
    node<Value>* precursor;
    size_type many_nodes;
};`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Visual Representation</h2>
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <pre className="text-center text-lg">
            <code>{`head_ptr → [1] → [2] → [3] → [4] → nullptr
           ↑
         cursor`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Time Complexity</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Operations</h3>
            <ul className="list-disc pl-5">
              <li>start(): O(1)</li>
              <li>advance(): O(1)</li>
              <li>insert(): O(1)</li>
              <li>attach(): O(1)</li>
              <li>remove_current(): O(1)</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Memory</h3>
            <ul className="list-disc pl-5">
              <li>Dynamic allocation</li>
              <li>No size limit</li>
              <li>Extra pointer overhead</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Differences from Array Version</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>No fixed capacity</li>
          <li>Dynamic memory allocation</li>
          <li>Constant time insertions</li>
          <li>Requires pointer management</li>
          <li>More memory per element</li>
        </ul>
      </section>

      <footer className="mt-12 text-sm text-gray-600">
        <p>Reference: "Data Structures and Other Objects Using C++" by Main & Savitch</p>
      </footer>
    </div>
  );
}