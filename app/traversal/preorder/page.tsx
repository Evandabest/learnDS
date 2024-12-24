'use client';

export default function PreorderTraversalPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Pre-order Traversal</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is Pre-order Traversal?</h2>
        <p className="mb-4">
          Pre-order traversal visits nodes in the following order:
          1. Root node
          2. Left subtree
          3. Right subtree
        </p>
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <pre className="text-center text-lg">
            <code>{`     [4]
    /   \\
   [2]   [6]
  /  \\   /  \\
[1]  [3] [5] [7]

Pre-order: 4, 2, 1, 3, 6, 5, 7`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Implementation</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`template <class Item>
void preorder(binary_tree_node<Item>* root) {
    if (root != nullptr) {
        cout << root->data();       // Process root
        preorder(root->left());     // Process left subtree
        preorder(root->right());    // Process right subtree
    }
}`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Step-by-Step Example</h2>
        <div className="space-y-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Processing Steps:</h3>
            <ol className="list-decimal pl-5">
              <li>Print root (4)</li>
              <li>Go to left child (2)</li>
              <li>Print 2</li>
              <li>Go to left child (1)</li>
              <li>Print 1</li>
              <li>Go to right child (3)</li>
              <li>Print 3</li>
              <li>Go to right subtree of root (6)</li>
              <li>Print 6</li>
              <li>Print left child (5)</li>
              <li>Print right child (7)</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Creating a copy of the tree</li>
          <li>Serializing/storing a tree</li>
          <li>Prefix expression parsing</li>
          <li>Directory listing (print parent before children)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Complexity Analysis</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Time Complexity</h3>
            <p>O(n) - visits each node once</p>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Space Complexity</h3>
            <p>O(h) - recursive stack depth</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Mistakes</h2>
        <div className="border p-4 rounded-lg">
          <ul className="list-disc pl-5">
            <li>Processing children before root</li>
            <li>Not checking for null nodes</li>
            <li>Wrong recursion order</li>
            <li>Stack overflow on deep trees</li>
          </ul>
        </div>
      </section>

      <footer className="mt-12 text-sm text-gray-600">
        <p>Reference: "Data Structures and Other Objects Using C++" by Main & Savitch</p>
      </footer>
    </div>
  );
}