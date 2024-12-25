'use client';

import { PageNavigation } from "@/components/page-navigation";

export default function BFSPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Breadth-First Search (BFS)</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is BFS?</h2>
        <p className="mb-4">
          BFS traverses level by level, visiting all nodes at the current depth before moving to nodes at the next depth level.
        </p>
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <pre className="text-center text-lg">
            <code>{`     [1]          Level 0
    /   \\
   [2]   [3]       Level 1
  /  \\     \\
[4]  [5]    [6]    Level 2

Visit Order: 1 → 2 → 3 → 4 → 5 → 6`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Implementation</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`template <class Item>
void BFS(Node<Item>* start) {
    if (!start) return;
    
    queue<Node<Item>*> q;
    vector<bool> visited(MAX_NODES, false);
    
    q.push(start);
    visited[start->id] = true;
    
    while (!q.empty()) {
        Node<Item>* current = q.front();
        q.pop();
        cout << current->data;
        
        // Add unvisited neighbors to queue
        for (auto& neighbor : current->neighbors) {
            if (!visited[neighbor->id]) {
                q.push(neighbor);
                visited[neighbor->id] = true;
            }
        }
    }
}`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Level-Order Traversal</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`template <class Item>
void levelOrder(binary_tree_node<Item>* root) {
    if (!root) return;
    
    queue<binary_tree_node<Item>*> q;
    q.push(root);
    
    while (!q.empty()) {
        int level_size = q.size();
        
        for (int i = 0; i < level_size; i++) {
            binary_tree_node<Item>* current = q.front();
            q.pop();
            cout << current->data() << " ";
            
            if (current->left())
                q.push(current->left());
            if (current->right())
                q.push(current->right());
        }
        cout << endl;  // New line after each level
    }
}`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Shortest path in unweighted graph</li>
          <li>Level-order tree traversal</li>
          <li>Finding connected components</li>
          <li>Web crawling</li>
          <li>GPS navigation</li>
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
              <li>O(V) for queue</li>
              <li>O(V) for visited array</li>
              <li>Can be O(w) where w is max width</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Comparison with DFS</h2>
        <div className="border p-4 rounded-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">BFS</th>
                <th className="px-4 py-2">DFS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Uses Queue</td>
                <td className="border px-4 py-2">Uses Stack</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Level by level</td>
                <td className="border px-4 py-2">Branch by branch</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">More memory</td>
                <td className="border px-4 py-2">Less memory</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Shortest path</td>
                <td className="border px-4 py-2">Path finding</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <PageNavigation
        previousPage={{
            href: "/traversal/dfs",
            label: "Depth-First Search"
        }}
        nextPage={{
            href: "/traversal/inorder",
            label: "Inorder Traversal"
        }}
        relatedPages={[
            { href: "/array", label: "Arrays" },
            { href: "/array/2d", label: "2 dimensional Arrays" },
            { href: "/traversal/bfs", label: "Breadth-First Search" },
            { href: "/dijkstras", label: "Dijkstras Algorithm" },
        ]}
        projects={[
            { href: "/projects/bst", label: "Binary Search Tree" }
        ]}
      
        />
    </div>
  );
}