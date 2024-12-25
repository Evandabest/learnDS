'use client';

import { PageNavigation } from "@/components/page-navigation";

export default function ADTPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Abstract Data Types (ADTs)</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is an ADT?</h2>
        <p className="mb-4">
          Think of an ADT like a vending machine. You don't need to know how it works inside - 
          you just need to know what buttons to press to get your snack. Similarly, an ADT defines 
          what operations can be performed without showing how they are implemented.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Common ADT Examples</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border text-black rounded-lg p-6 bg-white shadow-sm">
            <h3 className="text-xl font-bold mb-3">Stack</h3>
            <p className="mb-2">Like a stack of plates:</p>
            <ul className="list-disc pl-5 mb-4">
              <li>Push (add to top)</li>
              <li>Pop (remove from top)</li>
              <li>Peek (view top)</li>
            </ul>
            <pre className="bg-gray-50 text-black p-3 rounded text-sm">
              <code>{`stack.push(item);
item = stack.pop();
top = stack.peek();`}</code>
            </pre>
          </div>

          <div className="border text-black rounded-lg p-6 bg-white shadow-sm">
            <h3 className="text-xl font-bold mb-3">Queue</h3>
            <p className="mb-2">Like a line at a store:</p>
            <ul className="list-disc pl-5 mb-4">
              <li>Enqueue (join line)</li>
              <li>Dequeue (leave line)</li>
              <li>Front (who's first)</li>
            </ul>
            <pre className="bg-gray-50 p-3 text-black rounded text-sm">
              <code>{`queue.enqueue(item);
item = queue.dequeue();
first = queue.front();`}</code>
            </pre>
          </div>

          <div className="border text-black rounded-lg p-6 bg-white shadow-sm">
            <h3 className="text-xl font-bold mb-3">List</h3>
            <p className="mb-2">Like a shopping list:</p>
            <ul className="list-disc pl-5 mb-4">
              <li>Insert (add item)</li>
              <li>Remove (cross off)</li>
              <li>Get (read item)</li>
            </ul>
            <pre className="bg-gray-50 text-black p-3 rounded text-sm">
              <code>{`list.insert(position, item);
item = list.remove(position);
item = list.get(position);`}</code>
            </pre>
          </div>

          <div className="border rounded-lg text-black p-6 bg-white shadow-sm">
            <h3 className="text-xl font-bold mb-3">Dictionary</h3>
            <p className="mb-2">Like a phone book:</p>
            <ul className="list-disc pl-5 mb-4">
              <li>Insert (add entry)</li>
              <li>Remove (delete entry)</li>
              <li>Find (lookup entry)</li>
            </ul>
            <pre className="bg-gray-50 text-black p-3 rounded text-sm">
              <code>{`dict.insert(key, value);
dict.remove(key);
value = dict.find(key);`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Use ADTs?</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Hide complex implementation details</li>
          <li>Focus on how to use, not how it works</li>
          <li>Change implementation without affecting users</li>
          <li>Make code more organized and maintainable</li>
        </ul>
      </section>

      <PageNavigation 
              previousPage={{
                href: "/classes",
                label: "Classes & Objects"
              }}
              nextPage={{
                href: "/arrays",
                label: "Arrays"
              }}
              relatedPages={[
                { href: "/arrays/dynamic", label: "Dynamic Arrays" },
                { href: "/linked", label: "Linked Lists" },
              ]}
              projects={[
                  { href: "/projects/vector", label: "Vector Implementation" },
                  { href: "/projects/bag", label: "Bag Class Implementation" },
                  { href: "/projects/sequence/array", label: "Sequence Class Implementation" },
              ]}
            />
    </div>
  );
}