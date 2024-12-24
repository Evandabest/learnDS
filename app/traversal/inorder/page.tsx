'use client';

export default function InorderTraversalPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Inorder Traversal</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is Inorder Traversal?</h2>
        <p className="mb-4">
          Inorder traversal visits nodes in the following order:
          1. Left subtree
          2. Root node
          3. Right subtree
        </p>
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <pre className="text-center text-lg">
            <code>{`     [4]
    /   \\
   [2]   [6]
  /  \\   /  \\
[1]  [3] [5] [7]

Inorder: 1, 2, 3, 4, 5, 6, 7`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Implementation</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`template <class Item>
void inorder(binary_tree_node<Item>* root) {
    if (root != nullptr) {
        inorder(root->left());     // Process left subtree
        cout << root->data();      // Process root
        inorder(root->right());    // Process right subtree
    }
}`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Step-by-Step Example</h2>
        <div className="space-y-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Steps:</h3>
            <ol className="list-decimal pl-5">
              <li>Start at root (4)</li>
              <li>Traverse left subtree of 4</li>
              <li>Visit left child (2)</li>
              <li>Visit left child (1)</li>
              <li>Return to 2</li>
              <li>Visit right child (3)</li>
              <li>Return to 4</li>
              <li>Traverse right subtree...</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Complexity</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Time Complexity</h3>
            <ul className="list-disc pl-5">
              <li>O(n) - visits each node once</li>
              <li>n is number of nodes</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Space Complexity</h3>
            <ul className="list-disc pl-5">
              <li>O(h) - recursion stack</li>
              <li>h is height of tree</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Binary Search Tree traversal (gives sorted order)</li>
          <li>Expression tree evaluation</li>
          <li>Binary tree to linked list conversion</li>
          <li>Checking if tree is BST</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Errors</h2>
        <div className="border p-4 rounded-lg">
          <ul className="list-disc pl-5">
            <li>Not handling null nodes</li>
            <li>Wrong order of operations</li>
            <li>Stack overflow on deep trees</li>
            <li>Not preserving original tree structure</li>
          </ul>
        </div>
      </section>

      <footer className="mt-12 text-sm text-gray-600">
        <p>Reference: "Data Structures and Other Objects Using C++" by Main & Savitch</p>
      </footer>
    </div>
  );
}