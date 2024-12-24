'use client';

export default function SelectionSortPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Selection Sort</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Algorithm</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`template <class Item>
void selection_sort(Item data[], size_t n) {
    for (size_t i = 0; i < n-1; ++i) {
        // Find position of smallest element
        size_t min_pos = i;
        for (size_t j = i+1; j < n; ++j) {
            if (data[j] < data[min_pos]) {
                min_pos = j;
            }
        }
        // Swap if necessary
        if (min_pos != i) {
            Item temp = data[i];
            data[i] = data[min_pos];
            data[min_pos] = temp;
        }
    }
}`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Visual Process</h2>
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <pre className="text-center text-lg">
            <code>{`Initial:  [64, 25, 12, 22, 11]
Step 1:   [11, 25, 12, 22, 64]  // 11 is minimum
Step 2:   [11, 12, 25, 22, 64]  // 12 is minimum
Step 3:   [11, 12, 22, 25, 64]  // 22 is minimum
Step 4:   [11, 12, 22, 25, 64]  // 25 is minimum`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Time Complexity</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Performance</h3>
            <ul className="list-disc pl-5">
              <li>Best Case: O(n²)</li>
              <li>Average Case: O(n²)</li>
              <li>Worst Case: O(n²)</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Space</h3>
            <ul className="list-disc pl-5">
              <li>O(1) auxiliary space</li>
              <li>In-place algorithm</li>
              <li>Not stable</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Characteristics</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Simple implementation</li>
          <li>Makes minimum number of swaps (O(n))</li>
          <li>Not adaptive</li>
          <li>Performance not affected by input order</li>
          <li>Good for small arrays</li>
        </ul>
      </section>

      <footer className="mt-12 text-sm text-gray-600">
        <p>Reference: "Data Structures and Other Objects Using C++" by Main & Savitch</p>
      </footer>
    </div>
  );
}