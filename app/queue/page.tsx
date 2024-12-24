'use client';

export default function QueuePage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Queue ADT</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is a Queue?</h2>
        <p className="mb-4">
          A queue is a First-In-First-Out (FIFO) data structure. Think of it like a line at a store:
          the first person to arrive is the first person served.
        </p>
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <pre className="text-center text-lg">
            <code>{`Front → [1] → [2] → [3] → [4] ← Rear
      ↑                       ↑
   Dequeue               Enqueue`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Queue Header File (queue.h)</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`// queue.h
#ifndef QUEUE_H
#define QUEUE_H

template<class Item>
class Queue {
public:
    // Constructors
    Queue();
    Queue(const Queue<Item>& source);
    ~Queue();

    // Modification member functions
    void enqueue(const Item& entry);
    Item dequeue();
    void operator=(const Queue<Item>& source);

    // Constant member functions
    bool empty() const;
    Item front() const;
    size_t size() const;

private:
    static const size_t CAPACITY = 30;
    Item data[CAPACITY];
    size_t first;    // Index of front item
    size_t last;     // Index of rear item
    size_t count;    // Number of items
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
              <li>enqueue - Add to rear</li>
              <li>dequeue - Remove from front</li>
              <li>front - View front item</li>
              <li>empty - Check if empty</li>
              <li>size - Get number of items</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Time Complexity</h3>
            <ul className="list-disc pl-5">
              <li>Enqueue: O(1)</li>
              <li>Dequeue: O(1)</li>
              <li>Front: O(1)</li>
              <li>Empty: O(1)</li>
              <li>Size: O(1)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Applications</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Print job scheduling</li>
          <li>Process scheduling in OS</li>
          <li>Breadth-first search</li>
          <li>Customer service systems</li>
          <li>Message buffers</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Circular Array Implementation</h2>
        <div className="border p-4 rounded-lg">
          <p className="mb-4">The queue uses a circular array to efficiently manage space:</p>
          <pre className="bg-gray-100 p-4 rounded-lg">
            <code className="text-black">{`[5][6][7][ ][ ][1][2][3][4]
         ↑     ↑     ↑
        last  empty first
        
next_index = (current_index + 1) % CAPACITY`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preconditions & Postconditions</h2>
        <div className="border p-4 rounded-lg">
          <pre className="bg-gray-100 p-4 rounded-lg">
            <code className="text-black">{`void enqueue(const Item& entry)
// Precondition: size() < CAPACITY
// Postcondition: entry added to rear

Item dequeue()
// Precondition: !empty()
// Postcondition: removes and returns front item

Item front() const
// Precondition: !empty()
// Postcondition: returns front item`}</code>
          </pre>
        </div>
      </section>

      <footer className="mt-12 text-sm text-gray-600">
        <p>Reference: "Data Structures and Other Objects Using C++" by Main & Savitch</p>
      </footer>
    </div>
  );
}