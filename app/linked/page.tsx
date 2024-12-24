'use client';

export default function LinkedListPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Linked List ADT</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is a Linked List?</h2>
        <p className="mb-4">
          A linked list is a linear data structure where elements are stored in nodes, 
          and each node points to the next node in the sequence.
        </p>
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <pre className="text-center text-lg">
            <code>{`Head → [1|•] → [2|•] → [3|•] → [4|nullptr]`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Node Header File (node.h)</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`// node.h
#ifndef NODE_H
#define NODE_H

template<class Item>
class Node {
public:
    // Constructors
    Node(const Item& init_data = Item(), Node<Item>* init_next = nullptr);
    
    // Member functions
    void set_data(const Item& new_data);
    void set_next(Node<Item>* new_next);
    Item data() const;
    const Node<Item>* next() const;
    Node<Item>* next();

private:
    Item data_field;
    Node<Item>* next_ptr;
};

#endif`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">LinkedList Header File (linkedlist.h)</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`// linkedlist.h
#ifndef LINKEDLIST_H
#define LINKEDLIST_H

#include "node.h"

template<class Item>
class LinkedList {
public:
    // Constructors
    LinkedList();
    LinkedList(const LinkedList<Item>& source);
    ~LinkedList();

    // Modification member functions
    void start();
    void advance();
    void insert(const Item& entry);
    void attach(const Item& entry);
    void remove_current();
    void operator=(const LinkedList<Item>& source);
    void clear();

    // Constant member functions
    size_t size() const;
    bool is_item() const;
    Item current() const;

private:
    Node<Item>* head_ptr;
    Node<Item>* tail_ptr;
    Node<Item>* cursor;
    size_t many_nodes;
};

#endif`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Important Concepts from Main & Savitch</h2>
        <div className="space-y-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Value Semantics</h3>
            <p>The linked list toolkit provides value semantics, meaning:</p>
            <ul className="list-disc pl-5">
              <li>Assignment operator creates a new copy</li>
              <li>Copy constructor creates an independent copy</li>
              <li>Changes to one list don't affect copies</li>
            </ul>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">The Big Three</h3>
            <p>Required for proper memory management:</p>
            <pre className="bg-gray-100 p-4 rounded-lg">
              <code className="text-black">{`// 1. Destructor
~LinkedList();

// 2. Copy Constructor
LinkedList(const LinkedList<Item>& source);

// 3. Assignment Operator
void operator=(const LinkedList<Item>& source);`}</code>
            </pre>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Sequence Class Implementation</h3>
            <p>The linked list implements a sequence with:</p>
            <ul className="list-disc pl-5">
              <li>Cursor for current position</li>
              <li>Head pointer for start of list</li>
              <li>Tail pointer for efficient end operations</li>
              <li>Size counter for O(1) size queries</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preconditions & Postconditions</h2>
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Key Functions</h3>
          <pre className="bg-gray-100 p-4 rounded-lg">
            <code className="text-black">{`void insert(const Item& entry)
// Precondition: size() < CAPACITY
// Postcondition: entry inserted before current item

void attach(const Item& entry)
// Precondition: size() < CAPACITY
// Postcondition: entry inserted after current item

void remove_current()
// Precondition: is_item() returns true
// Postcondition: current item removed`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Memory Management Tips</h2>
        <div className="space-y-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Preventing Memory Leaks</h3>
            <ul className="list-disc pl-5">
              <li>Delete nodes in destructor</li>
              <li>Deep copy in copy constructor</li>
              <li>Handle self-assignment in assignment operator</li>
              <li>Clear old data before copying in assignment</li>
            </ul>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Common Pitfalls</h3>
            <ul className="list-disc pl-5">
              <li>Losing track of head pointer</li>
              <li>Improper handling of empty lists</li>
              <li>Not updating tail pointer</li>
              <li>Memory leaks in error conditions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Operations</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Basic Operations</h3>
            <ul className="list-disc pl-5">
              <li>Insert at front/back</li>
              <li>Remove from front/back</li>
              <li>Insert after node</li>
              <li>Remove after node</li>
              <li>Search for value</li>
              <li>Traverse list</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Time Complexity</h3>
            <ul className="list-disc pl-5">
              <li>Access: O(n)</li>
              <li>Search: O(n)</li>
              <li>Insert at front: O(1)</li>
              <li>Delete at front: O(1)</li>
              <li>Insert at end: O(1) with tail pointer</li>
              <li>Delete at end: O(n)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Advantages & Disadvantages</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Advantages</h3>
            <ul className="list-disc pl-5">
              <li>Dynamic size</li>
              <li>Efficient insertion/deletion</li>
              <li>No memory waste</li>
              <li>No reallocation needed</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Disadvantages</h3>
            <ul className="list-disc pl-5">
              <li>No random access</li>
              <li>Extra memory for links</li>
              <li>Not cache friendly</li>
              <li>No backward traversal (singly-linked)</li>
            </ul>
          </div>
        </div>
      </section>
      
      <footer className="mt-12 text-sm text-gray-600">
        <p>Reference: "Data Structures and Other Objects Using C++" by Michael Main and Walter Savitch</p>
      </footer>
    </div>
  );
}