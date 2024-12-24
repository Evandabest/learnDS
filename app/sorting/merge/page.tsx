'use client';

export default function MergeSortPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Merge Sort</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Algorithm</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`template <class Item>
void mergesort(Item data[], size_t first, size_t last) {
    if (first < last) {
        size_t mid = (first + last) / 2;
        mergesort(data, first, mid);      // Sort left half
        mergesort(data, mid + 1, last);   // Sort right half
        merge(data, first, mid, last);    // Merge sorted halves
    }
}

template <class Item>
void merge(Item data[], size_t first, size_t mid, size_t last) {
    // Temporary arrays for merging
    Item* temp = new Item[last - first + 1];
    size_t i = first;      // Index for left subarray
    size_t j = mid + 1;    // Index for right subarray
    size_t k = 0;          // Index for temp array
    
    // Merge while elements in both arrays
    while (i <= mid && j <= last) {
        if (data[i] <= data[j])
            temp[k++] = data[i++];
        else
            temp[k++] = data[j++];
    }
    
    // Copy remaining elements
    while (i <= mid)
        temp[k++] = data[i++];
    while (j <= last)
        temp[k++] = data[j++];
        
    // Copy back to original array
    for (i = 0; i < k; i++)
        data[first + i] = temp[i];
        
    delete [] temp;
}`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Visual Process</h2>
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <pre className="text-center text-lg">
            <code>{`[38, 27, 43, 3, 9, 82, 10]
           /                \\
   [38, 27, 43]         [3, 9, 82, 10]
    /      \\            /         \\
[38]    [27, 43]     [3, 9]    [82, 10]
         /    \\       /   \\      /    \\
      [27]   [43]   [3]  [9]  [82]  [10]
         \\    /       \\   /      \\    /
      [27, 43]       [3, 9]    [10, 82]
           \\          /           /
        [27, 38, 43] [3, 9]  [10, 82]
                \\      /         /
            [3, 9, 27, 38, 43] [10, 82]
                        \\         /
             [3, 9, 10, 27, 38, 43, 82]`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Complexity Analysis</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Time Complexity</h3>
            <ul className="list-disc pl-5">
              <li>Best Case: O(n log n)</li>
              <li>Average Case: O(n log n)</li>
              <li>Worst Case: O(n log n)</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Space Complexity</h3>
            <ul className="list-disc pl-5">
              <li>O(n) auxiliary space</li>
              <li>Not in-place sorting</li>
              <li>Stable sort algorithm</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Divide and conquer approach</li>
          <li>Stable sorting algorithm</li>
          <li>Predictable performance</li>
          <li>Not adaptive</li>
          <li>External sorting possible</li>
        </ul>
      </section>

      <footer className="mt-12 text-sm text-gray-600">
        <p>Reference: "Data Structures and Other Objects Using C++" by Main & Savitch</p>
      </footer>
    </div>
  );
}