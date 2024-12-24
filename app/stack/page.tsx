'use client';

export default function StackPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Stack ADT</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is a Stack?</h2>
        <p className="mb-4">
          A stack is a Last-In-First-Out (LIFO) data structure. Think of it like a stack of plates:
          you can only add or remove plates from the top.
        </p>
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <pre className="text-center text-black text-lg">
            <code>{`    
        ┌───┐
               │ 3 │  ← Top
        ├───┤
        │ 2 │
        ├───┤
        │ 1 │
        └───┘`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Stack Header File (stack.h)</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`// stack.h
#ifndef STACK_H
#define STACK_H

template<class Item>
class Stack {
public:
    // Constructors
    Stack();
    Stack(const Stack<Item>& source);
    ~Stack();

    // Modification member functions
    void push(const Item& entry);
    Item pop();
    void operator=(const Stack<Item>& source);

    // Constant member functions
    bool empty() const;
    Item top() const;
    size_t size() const;

private:
    static const size_t CAPACITY = 30;
    Item data[CAPACITY];
    size_t used;
};

#endif`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Operations</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Basic Operations</h3>
            <ul className="list-disc pl-5">
              <li>push - Add to top</li>
              <li>pop - Remove from top</li>
              <li>top - View top item</li>
              <li>empty - Check if empty</li>
              <li>size - Get number of items</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Time Complexity</h3>
            <ul className="list-disc pl-5">
              <li>Push: O(1)</li>
              <li>Pop: O(1)</li>
              <li>Top: O(1)</li>
              <li>Empty: O(1)</li>
              <li>Size: O(1)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Applications</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Function call stack</li>
          <li>Expression evaluation</li>
          <li>Undo operations</li>
          <li>Backtracking algorithms</li>
          <li>Browser history</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preconditions & Postconditions</h2>
        <div className="border p-4 rounded-lg">
          <pre className="bg-gray-100 p-4 rounded-lg">
            <code className="text-black">{`void push(const Item& entry)
// Precondition: size() < CAPACITY
// Postcondition: entry added to top

Item pop()
// Precondition: !empty()
// Postcondition: removes and returns top item

Item top() const
// Precondition: !empty()
// Postcondition: returns top item (no removal)`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Implementation Notes</h2>
        <div className="space-y-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Array-Based Implementation</h3>
            <ul className="list-disc pl-5">
              <li>Fixed capacity (CAPACITY constant)</li>
              <li>Top element at data[used-1]</li>
              <li>Simple indexing and memory management</li>
              <li>Limited by fixed size</li>
            </ul>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Error Handling</h3>
            <ul className="list-disc pl-5">
              <li>Check capacity before push</li>
              <li>Check empty before pop/top</li>
              <li>Throw exceptions for violations</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="mt-12 text-sm text-gray-600">
        <p>Reference: "Data Structures and Other Objects Using C++" by Main & Savitch</p>
      </footer>
    </div>
  );
}