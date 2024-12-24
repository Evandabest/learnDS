'use client';

export default function BTreePage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">B-Trees</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is a B-Tree?</h2>
        <p className="mb-4">
          A B-tree is a self-balancing tree structure that maintains sorted data and allows searches,
          sequential access, insertions, and deletions in logarithmic time.
        </p>
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <pre className="text-center text-lg">
            <code>{`Order-3 B-tree:

        [30]
    /         \\
  [10,20]    [40,50]
/    |    \\    |     \\
1-9  11-19 21-29 31-39 41-99`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">B-Tree Properties</h2>
        <div className="border p-4 rounded-lg">
          <ul className="list-disc pl-5">
            <li>All leaves at same level</li>
            <li>Nodes can have multiple keys</li>
            <li>Keys within node are ordered</li>
            <li>Node size bound by order (t):
              <ul className="list-disc pl-5 mt-2">
                <li>Non-root internal nodes: t-1 to 2t-1 keys</li>
                <li>Root: 1 to 2t-1 keys</li>
                <li>Children: t to 2t</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Structure</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`template <class Item>
class BTreeNode {
public:
    Item* keys;         // Array of keys
    int t;             // Minimum degree
    BTreeNode** C;     // Array of child pointers
    int n;             // Current number of keys
    bool leaf;         // Is true when node is leaf
    
    // Functions
    void traverse();
    BTreeNode* search(Item k);
    void insertNonFull(Item k);
    void splitChild(int i, BTreeNode* y);
};

template <class Item>
class BTree {
private:
    BTreeNode<Item>* root;
    int t;  // Minimum degree

public:
    BTree(int _t) { root = nullptr; t = _t; }
    
    void traverse() {
        if (root != nullptr) root->traverse();
    }
    
    BTreeNode<Item>* search(Item k) {
        return (root == nullptr) ? nullptr : root->search(k);
    }
    
    void insert(Item k);
};`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Time Complexity</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Operations</h3>
            <ul className="list-disc pl-5">
              <li>Search: O(log n)</li>
              <li>Insert: O(log n)</li>
              <li>Delete: O(log n)</li>
              <li>Traverse: O(n)</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Space</h3>
            <ul className="list-disc pl-5">
              <li>O(n) space complexity</li>
              <li>High space utilization</li>
              <li>Better than binary trees</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>File systems</li>
          <li>Database indexing</li>
          <li>Multilevel indexing</li>
          <li>Large data storage</li>
        </ul>
      </section>

      <footer className="mt-12 text-sm text-gray-600">
        <p>Reference: Database Management Systems</p>
      </footer>
    </div>
  );
}