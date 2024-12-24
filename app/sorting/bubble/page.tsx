'use client';

export default function BubbleSortPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Bubble Sort</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Algorithm</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`template <class Item>
void bubble_sort(Item data[], size_t n) {
    bool swapped;
    for (size_t i = 0; i < n-1; i++) {
        swapped = false;
        // Last i elements are already in place
        for (size_t j = 0; j < n-i-1; j++) {
            if (data[j] > data[j+1]) {
                // Swap elements
                Item temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
                swapped = true;
            }
        }
        // If no swapping occurred, array is sorted
        if (!swapped)
            break;
    }
}`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Visual Process</h2>
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <pre className="text-center text-lg">
            <code>{`Initial:  [5, 1, 4, 2, 8]
Pass 1:   [1, 4, 2, 5, 8]  // 5>1 swap, 5>4 swap, 5>2 swap
Pass 2:   [1, 2, 4, 5, 8]  // 4>2 swap
Pass 3:   [1, 2, 4, 5, 8]  // No swaps needed
Final:    [1, 2, 4, 5, 8]`}</code>
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
          <li>Adaptive: O(n) when nearly sorted</li>
          <li>Stable sorting algorithm</li>
          <li>No extra memory needed</li>
          <li>Poor performance on large datasets</li>
        </ul>
      </section>
    </div>
  );
}