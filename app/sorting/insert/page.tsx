'use client';

import { PageNavigation } from "@/components/page-navigation";

export default function InsertionSortPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Insertion Sort</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Algorithm</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`template <class Item>
void insertion_sort(Item data[], size_t n) {
    for (size_t i = 1; i < n; ++i) {
        Item next = data[i];
        size_t j;
        
        // Shift larger elements right
        for (j = i; j > 0 && data[j-1] > next; --j) {
            data[j] = data[j-1];
        }
        
        // Insert in correct position
        data[j] = next;
    }
}`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Step-by-Step Process</h2>
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <pre className="text-center text-lg">
            <code>{`Initial:  [7, 3, 5, 1, 9]
Step 1:   [3, 7, 5, 1, 9]
Step 2:   [3, 5, 7, 1, 9]
Step 3:   [1, 3, 5, 7, 9]
Step 4:   [1, 3, 5, 7, 9]`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Time Complexity</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Performance</h3>
            <ul className="list-disc pl-5">
              <li>Best Case: O(n)</li>
              <li>Average Case: O(n²)</li>
              <li>Worst Case: O(n²)</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Space</h3>
            <ul className="list-disc pl-5">
              <li>O(1) auxiliary space</li>
              <li>In-place algorithm</li>
              <li>Stable sort</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Simple implementation</li>
          <li>Efficient for small data sets</li>
          <li>Adaptive: O(n) when nearly sorted</li>
          <li>More efficient than bubble sort</li>
          <li>Stable sorting algorithm</li>
        </ul>
      </section>

      <PageNavigation
        previousPage={{
            href: "/sorting/bubble",
            label: "Bubble sort"
        }}
        nextPage={{
            href: "/sorting/select",
            label: "Selection Sort"
        }}
        relatedPages={[
            { href: "/arrays", label: "Arrays" },
            { href: "/sorting/quick", label: "Quick Sort" },
            { href: "/sorting/merge", label: "Merge Sort" },
            { href: "/sorting/bubble", label: "Bubble Sort" },
        ]}
        />
    </div>
  );
}