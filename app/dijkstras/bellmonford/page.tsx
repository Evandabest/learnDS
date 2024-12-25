'use client';

import { PageNavigation } from "@/components/page-navigation";

export default function BellmanFordPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Bellman-Ford Algorithm</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is Bellman-Ford?</h2>
        <p className="mb-4">
          The Bellman-Ford algorithm finds shortest paths from a source vertex to all other vertices, 
          even with negative edge weights (unlike Dijkstra&apos;s).
        </p>
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <pre className="text-center text-lg">
            <code>{`    A --- 4 --- B
    |         / |
    2      -2   3
    |     /     |
    C --- 1 --- D`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Implementation</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`vector<int> bellmanFord(vector<Edge>& edges, int V, int start) {
    // Initialize distances
    vector<int> dist(V, INT_MAX);
    dist[start] = 0;
    
    // Relax all edges V-1 times
    for (int i = 1; i <= V-1; i++) {
        for (const Edge& e : edges) {
            if (dist[e.from] != INT_MAX && 
                dist[e.from] + e.weight < dist[e.to]) {
                dist[e.to] = dist[e.from] + e.weight;
            }
        }
    }
    
    // Check for negative cycles
    for (const Edge& e : edges) {
        if (dist[e.from] != INT_MAX && 
            dist[e.from] + e.weight < dist[e.to]) {
            throw "Negative cycle detected";
        }
    }
    
    return dist;
}`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Edge Structure</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`struct Edge {
    int from;
    int to;
    int weight;
    
    Edge(int f, int t, int w) 
        : from(f), to(t), weight(w) {}
};`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Step-by-Step Process</h2>
        <div className="space-y-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Algorithm Steps:</h3>
            <ol className="list-decimal pl-5">
              <li>Initialize distances (source = 0, others = ∞)</li>
              <li>Repeat V-1 times:
                <ul className="list-disc pl-5">
                  <li>For each edge (u,v), try to relax it</li>
                  <li>{`Update dist[v] if dist[u] + weight < dist[v]`}</li>
                </ul>
              </li>
              <li>Check for negative cycles</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Complexity Analysis</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Time Complexity</h3>
            <ul className="list-disc pl-5">
              <li>O(VE)</li>
              <li>V = vertices</li>
              <li>E = edges</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Space Complexity</h3>
            <ul className="list-disc pl-5">
              <li>O(V)</li>
              <li>Only stores distances</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Advantages over Dijkstra</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Can handle negative edge weights</li>
          <li>Detects negative cycles</li>
          <li>Simpler implementation</li>
          <li>Better for dense graphs</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Network routing protocols (RIP)</li>
          <li>Currency exchange calculations</li>
          <li>Arbitrage detection</li>
          <li>Traffic routing with delays</li>
        </ul>
      </section>

      <PageNavigation
        previousPage={{
            href: "/dijkstras",
            label: "Dijkstra's Algorithm"
        }}
        nextPage={{
            href: "/recursion",
            label: "recursion"
        }}
        relatedPages={[
            { href: "/binary", label: "Binary Trees" },
            { href: "/graphs", label: "Graphs" },
            { href: "/traversal/preorder", label: "Preorder traversal" },
            { href: "/traversal/bfs", label: "Breadth-First Search" },
        ]}
        />
    </div>
  );
}