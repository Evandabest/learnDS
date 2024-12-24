'use client';

export default function GraphPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Graphs</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Graph Representations</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Adjacency List</h3>
            <pre className="bg-gray-50 p-3 rounded text-sm">
              <code>{`0 -> [1, 2]
1 -> [2]
2 -> [0, 3]
3 -> [3]`}</code>
            </pre>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Adjacency Matrix</h3>
            <pre className="bg-gray-50 p-3 rounded text-sm">
              <code>{`  0 1 2 3
0 0 1 1 0
1 0 0 1 0
2 1 0 0 1
3 0 0 0 1`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Graph Class Implementation</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`template <class Item>
class Graph {
public:
    static const size_t MAXIMUM = 20;
    
    // Constructor
    Graph() { number_of_vertices = 0; }
    
    // Modification member functions
    void add_vertex(const Item& label);
    void add_edge(size_t source, size_t target);
    void remove_edge(size_t source, size_t target);
    
    // Constant member functions
    size_t size() const { return number_of_vertices; }
    bool is_edge(size_t source, size_t target) const;
    std::set<size_t> neighbors(size_t vertex) const;
    
private:
    size_t number_of_vertices;
    Item labels[MAXIMUM];
    bool edges[MAXIMUM][MAXIMUM];
};`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Graph Types</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Directed Graph</h3>
            <pre className="text-center">
              <code>{`A → B
↓   ↓
C → D`}</code>
            </pre>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Undirected Graph</h3>
            <pre className="text-center">
              <code>{`A — B
|   |
C — D`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Operations</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Time Complexity</h3>
            <ul className="list-disc pl-5">
              <li>Add Vertex: O(1)</li>
              <li>Add Edge: O(1)</li>
              <li>Remove Edge: O(1)</li>
              <li>Find Edge: O(1)</li>
              <li>Get Neighbors: O(V)</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Space Complexity</h3>
            <ul className="list-disc pl-5">
              <li>Adjacency Matrix: O(V²)</li>
              <li>Adjacency List: O(V + E)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Applications</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Social Networks</li>
          <li>Road Networks</li>
          <li>Computer Networks</li>
          <li>Dependency Resolution</li>
          <li>State Machines</li>
        </ul>
      </section>
    </div>
  );
}