import { PageNavigation } from "@/components/page-navigation";

export default function QuickSortPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Quick Sort</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 mb-4">
          QuickSort is a divide-and-conquer algorithm that picks a &apos;pivot&apos; element and partitions the array around it.
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code>{`
Initial:  [4, 1, 3, 8, 2, 7, 5, 6]  // pivot = 4
Step 1:   [1, 3, 2] 4 [8, 7, 5, 6]  // partition around 4
Step 2:   [1, 2] 3 [4] [5, 6] 7 [8] // recursive partitioning
Final:    [1, 2, 3, 4, 5, 6, 7, 8]   // sorted array
          `}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Implementation</h2>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">{`function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left: number[] = [];
  const right: number[] = [];
  const equal: number[] = [];
  
  for (let element of arr) {
    if (element < pivot) left.push(element);
    else if (element > pivot) right.push(element);
    else equal.push(element);
  }
  
  return [...quickSort(left), ...equal, ...quickSort(right)];
}

// In-place implementation
function quickSortInPlace(arr: number[], low: number = 0, high: number = arr.length - 1): void {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSortInPlace(arr, low, pivotIndex - 1);
    quickSortInPlace(arr, pivotIndex + 1, high);
  }
}

function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high];
  let i = low - 1;
  
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Time Complexity</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="pb-4">Case</th>
                <th className="pb-4">Time</th>
                <th className="pb-4">Space</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">Best</td>
                <td>O(n log n)</td>
                <td>O(log n)</td>
              </tr>
              <tr>
                <td className="py-2">Average</td>
                <td>O(n log n)</td>
                <td>O(log n)</td>
              </tr>
              <tr>
                <td className="py-2">Worst</td>
                <td>O(n²)</td>
                <td>O(n)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>In-place sorting algorithm</li>
          <li>Unstable sort</li>
          <li>Efficient for large datasets</li>
          <li>Widely used in practice</li>
          <li>Various pivot selection strategies available</li>
        </ul>
      </section>

      <PageNavigation
        previousPage={{
            href: "/sorting/select",
            label: "Selection sort"
        }}
        nextPage={{
            href: "/sorting/merge",
            label: "Merge Sort"
        }}
        relatedPages={[
            { href: "/arrays", label: "Arrays" },
            { href: "/sorting/quick", label: "Quick Sort" },
            { href: "/sorting/merge", label: "Merge Sort" },
            { href: "/sorting/bubble", label: "Bubble Sort" },
        ]}
        />
    </div>
  )
}