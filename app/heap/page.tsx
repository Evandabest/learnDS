'use client';

import { PageNavigation } from "@/components/page-navigation";

export default function HeapPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Priority Queues & Heaps</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is a Priority Queue?</h2>
        <p className="mb-4">
          A priority queue is an abstract data type where each element has a priority. 
          Elements with higher priority are served before elements with lower priority.
        </p>
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <pre className="text-center text-lg">
            <code>{`Max Heap:
       100
      /   \\
    85     75
   /  \\   /
  65  32 45`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Types of Heaps</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Max Heap</h3>
            <ul className="list-disc pl-5">
              <li>Parent larger than children</li>
              <li>Root is largest element</li>
              <li>Used for descending priority</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Min Heap</h3>
            <ul className="list-disc pl-5">
              <li>Parent smaller than children</li>
              <li>Root is smallest element</li>
              <li>Used for ascending priority</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Operations</h2>
        <div className="border p-4 rounded-lg">
          <ul className="list-disc pl-5">
            <li>insert - Add new element</li>
            <li>remove - Remove highest priority</li>
            <li>peek - View highest priority</li>
            <li>size - Get number of elements</li>
            <li>isEmpty - Check if empty</li>
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
                <th className="px-4 py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Insert</td>
                <td className="border px-4 py-2">O(log n)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Remove</td>
                <td className="border px-4 py-2">O(log n)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Peek</td>
                <td className="border px-4 py-2">O(1)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Task scheduling in operating systems</li>
          <li>Event-driven simulation</li>
          <li>Dijkstra's shortest path algorithm</li>
          <li>Job scheduling in printers</li>
          <li>Emergency room patient management</li>
          <li>Game AI for decision making</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Properties</h2>
        <div className="border p-4 rounded-lg">
          <ul className="list-disc pl-5">
            <li>Complete binary tree structure</li>
            <li>Heap property maintained at all times</li>
            <li>Can be efficiently implemented with arrays</li>
            <li>Parent and child relationships:
              <ul className="list-disc pl-5 mt-2">
                <li>Parent: (i-1)/2</li>
                <li>Left Child: 2i + 1</li>
                <li>Right Child: 2i + 2</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <PageNavigation
        previousPage={{
            href: "/btree",
            label: "B-Trees"
        }}
        nextPage={{
            href: "/graphs",
            label: "Graphs"
        }}
        relatedPages={[
            { href: "/linked/doubly", label: "Doubly Linked Lists" },
            { href: "/binary", label: "Binary Trees" },
        ]}
        projects={[
            { href: "/projects/heap", label: "Heap implementation" },
            
        ]}
        />
    </div>
  );
}