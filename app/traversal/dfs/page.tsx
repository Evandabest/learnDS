'use client';

export default function DFSPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Depth-First Search (DFS)</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is DFS?</h2>
        <p className="mb-4">
          DFS is a traversal algorithm that explores as far as possible along each branch before backtracking.
        </p>
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <pre className="text-center text-lg">
            <code>{`     [1]
    /   \\
   [2]   [3]
  /  \\     \\
[4]  [5]    [6]

Visit Order: 1 → 2 → 4 → 5 → 3 → 6`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Implementation</h2>
        <div className="space-y-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Recursive Approach</h3>
            <pre className="bg-gray-100 p-4 rounded-lg">
              <code className="text-black">{`template <class Item>
void DFS(Node<Item>* node, vector<bool>& visited) {
    if (!node) return;
    
    cout << node->data;        // Process current node
    visited[node->id] = true;  // Mark as visited
    
    // Visit all unvisited neighbors
    for (auto& neighbor : node->neighbors) {
        if (!visited[neighbor->id]) {
            DFS(neighbor, visited);
        }
    }
}`}</code>
            </pre>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Iterative Approach (Using Stack)</h3>
            <pre className="bg-gray-100 p-4 rounded-lg">
              <code className="text-black">{`template <class Item>
void DFS_iterative(Node<Item>* start) {
    stack<Node<Item>*> s;
    vector<bool> visited(MAX_NODES, false);
    
    s.push(start);
    visited[start->id] = true;
    
    while (!s.empty()) {
        Node<Item>* current = s.top();
        s.pop();
        cout << current->data;
        
        // Push unvisited neighbors
        for (auto& neighbor : current->neighbors) {
            if (!visited[neighbor->id]) {
                s.push(neighbor);
                visited[neighbor->id] = true;
            }
        }
    }
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Finding connected components</li>
          <li>Topological sorting</li>
          <li>Maze solving</li>
          <li>Path finding</li>
          <li>Cycle detection</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Complexity Analysis</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Time Complexity</h3>
            <ul className="list-disc pl-5">
              <li>O(V + E) for graphs</li>
              <li>V = vertices, E = edges</li>
              <li>O(n) for trees</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Space Complexity</h3>
            <ul className="list-disc pl-5">
              <li>O(V) for visited array</li>
              <li>O(h) recursive stack</li>
              <li>O(V) iterative stack</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Pitfalls</h2>
        <div className="border p-4 rounded-lg">
          <ul className="list-disc pl-5">
            <li>Not marking nodes as visited</li>
            <li>Stack overflow in recursive approach</li>
            <li>Not handling cycles in graphs</li>
            <li>Not checking for null/invalid nodes</li>
          </ul>
        </div>
      </section>

      <footer className="mt-12 text-sm text-gray-600">
        <p>Reference: "Data Structures and Other Objects Using C++" by Main & Savitch</p>
      </footer>
    </div>
  );
}