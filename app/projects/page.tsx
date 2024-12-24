'use client';

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Data Structures Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h3 className="text-xl font-bold mb-3">Sequence Class</h3>
          <p className="text-gray-600 mb-2">Difficulty: ⭐⭐</p>
          <p className="mb-2">Template class for managing ordered data with cursor.</p>
          <ul className="list-disc pl-5">
            <li>Dynamic size array</li>
            <li>Current position tracking</li>
            <li>Insert/remove operations</li>
          </ul>
        </div>

        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h3 className="text-xl font-bold mb-3">Bag Class</h3>
          <p className="text-gray-600 mb-2">Difficulty: ⭐</p>
          <p className="mb-2">Unordered collection with duplicates.</p>
          <ul className="list-disc pl-5">
            <li>Add/remove items</li>
            <li>Count occurrences</li>
            <li>Template implementation</li>
          </ul>
        </div>

        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h3 className="text-xl font-bold mb-3">Set Class</h3>
          <p className="text-gray-600 mb-2">Difficulty: ⭐⭐⭐</p>
          <p className="mb-2">Mathematical set implementation.</p>
          <ul className="list-disc pl-5">
            <li>No duplicates</li>
            <li>Set operations</li>
            <li>Efficient searching</li>
          </ul>
        </div>

        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h3 className="text-xl font-bold mb-3">Priority Queue</h3>
          <p className="text-gray-600 mb-2">Difficulty: ⭐⭐⭐</p>
          <p className="mb-2">Queue with priority-based dequeuing.</p>
          <ul className="list-disc pl-5">
            <li>Heap implementation</li>
            <li>Priority management</li>
            <li>Efficient operations</li>
          </ul>
        </div>

        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h3 className="text-xl font-bold mb-3">Binary Search Tree</h3>
          <p className="text-gray-600 mb-2">Difficulty: ⭐⭐⭐⭐</p>
          <p className="mb-2">Ordered tree data structure.</p>
          <ul className="list-disc pl-5">
            <li>Binary search property</li>
            <li>Tree traversals</li>
            <li>Balanced operations</li>
          </ul>
        </div>

        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h3 className="text-xl font-bold mb-3">Statistician</h3>
          <p className="text-gray-600 mb-2">Difficulty: ⭐⭐</p>
          <p className="mb-2">Statistical calculations class.</p>
          <ul className="list-disc pl-5">
            <li>Mean, median, mode</li>
            <li>Standard deviation</li>
            <li>Data management</li>
          </ul>
        </div>

        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h3 className="text-xl font-bold mb-3">Expression Tree</h3>
          <p className="text-gray-600 mb-2">Difficulty: ⭐⭐⭐⭐⭐</p>
          <p className="mb-2">Mathematical expression evaluator.</p>
          <ul className="list-disc pl-5">
            <li>Tree construction</li>
            <li>Expression evaluation</li>
            <li>Operator precedence</li>
          </ul>
        </div>

        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h3 className="text-xl font-bold mb-3">Hash Table</h3>
          <p className="text-gray-600 mb-2">Difficulty: ⭐⭐⭐⭐</p>
          <p className="mb-2">Efficient key-value storage.</p>
          <ul className="list-disc pl-5">
            <li>Hash functions</li>
            <li>Collision resolution</li>
            <li>Dynamic resizing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}