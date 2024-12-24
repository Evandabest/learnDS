'use client';

export default function PostorderTraversalPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Post-order Traversal</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is Post-order Traversal?</h2>
        <p className="mb-4">
          Post-order traversal visits nodes in the following order:
          1. Left subtree
          2. Right subtree
          3. Root node
        </p>
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <pre className="text-center text-lg">
            <code>{`     [4]
    /   \\
   [2]   [6]
  /  \\   /  \\
[1]  [3] [5] [7]

Post-order: 1, 3, 2, 5, 7, 6, 4`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Implementation</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`template <class Item>
void postorder(binary_tree_node<Item>* root) {
    if (root != nullptr) {
        postorder(root->left());    // Process left subtree
        postorder(root->right());   // Process right subtree
        cout << root->data();       // Process root
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
              <li>Start at root (4)</li>
              <li>Go to left child (2)</li>
              <li>Go to its left child (1) - print 1</li>
              <li>Go to right child (3) - print 3</li>
              <li>Print parent (2)</li>
              <li>Go to right subtree (6)</li>
              <li>Process left child (5) - print 5</li>
              <li>Process right child (7) - print 7</li>
              <li>Print parent (6)</li>
              <li>Finally, print root (4)</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Use Cases</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Deleting a tree (delete children before parent)</li>
          <li>Evaluating postfix expressions</li>
          <li>Computing directory sizes (need children first)</li>
          <li>Finding tree height (need subtrees first)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Complexity Analysis</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Time Complexity</h3>
            <p>O(n) - visits each node exactly once</p>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Space Complexity</h3>
            <p>O(h) - recursive stack depth equals tree height</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Pitfalls</h2>
        <div className="border p-4 rounded-lg">
          <ul className="list-disc pl-5">
            <li>Processing root before children</li>
            <li>Not handling empty trees</li>
            <li>Incorrect recursion termination</li>
            <li>Not preserving tree structure during traversal</li>
          </ul>
        </div>
      </section>

      <footer className="mt-12 text-sm text-gray-600">
        <p>Reference: "Data Structures and Other Objects Using C++" by Main & Savitch</p>
      </footer>
    </div>
  );
}