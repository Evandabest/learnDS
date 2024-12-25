'use client';

import { PageNavigation } from "@/components/page-navigation";

export default function DijkstrasPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Dijkstra's Algorithm</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is Dijkstra's Algorithm?</h2>
        <p className="mb-4">
          Dijkstra's algorithm finds the shortest path between nodes in a weighted graph. 
          It works by maintaining a set of unvisited nodes and continuously updating the 
          shortest distance to each node.
        </p>
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <pre className="text-center text-lg">
            <code>{`    A --- 4 --- B
    |         / |
    2       2   3
    |     /     |
    C --- 1 --- D`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Implementation</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`vector<int> dijkstra(vector<vector<pair<int,int>>>& graph, int start) {
    int n = graph.size();
    vector<int> dist(n, INT_MAX);
    vector<bool> visited(n, false);
    
    // Priority queue to get minimum distance vertex
    priority_queue<pair<int,int>, 
                  vector<pair<int,int>>, 
                  greater<pair<int,int>>> pq;
    
    // Distance to start is 0
    dist[start] = 0;
    pq.push({0, start});
    
    while (!pq.empty()) {
        int u = pq.top().second;
        pq.pop();
        
        if (visited[u]) continue;
        visited[u] = true;
        
        // Check all neighbors
        for (auto& [v, weight] : graph[u]) {
            if (!visited[v] && dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
                pq.push({dist[v], v});
            }
        }
    }
    
    return dist;
}`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Step-by-Step Example</h2>
        <div className="space-y-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Starting from vertex A:</h3>
            <ol className="list-decimal pl-5">
              <li>Initial distances: A=0, B=∞, C=∞, D=∞</li>
              <li>Update neighbors of A: B=4, C=2</li>
              <li>Visit C (smallest distance)</li>
              <li>Update through C: D=3</li>
              <li>Visit B through D</li>
              <li>Continue until all vertices visited</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Time Complexity</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">With Priority Queue</h3>
            <ul className="list-disc pl-5">
              <li>O((V + E) log V)</li>
              <li>V = vertices</li>
              <li>E = edges</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">With Array</h3>
            <ul className="list-disc pl-5">
              <li>O(V²)</li>
              <li>Better for dense graphs</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Limitations</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Cannot handle negative weights</li>
          <li>Not suitable for negative cycles</li>
          <li>Must use modified versions for directed graphs</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>GPS and navigation systems</li>
          <li>Network routing protocols</li>
          <li>Social networks</li>
          <li>Games pathfinding</li>
        </ul>
      </section>

      <PageNavigation
        previousPage={{
            href: "/traversal/preorder",
            label: "Preorder Traversal"
        }}
        nextPage={{
            href: "/dijkstras/bellmonford",
            label: "Bellman-Ford Algorithm"
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