'use client';

export default function BinaryTreePage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Binary Trees</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is a Binary Tree?</h2>
        <p className="mb-4">
          A binary tree is a hierarchical data structure where each node has at most two children,
          referred to as left child and right child.
        </p>
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <pre className="text-center text-lg">
            <code>{`     [50]
    /    \\
  [30]   [70]
  /  \\   /  \\
[20][40][60][80]`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Node Header File (bintree.h)</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`// bintree.h
template <class Item>
class binary_tree_node {
public:
    // Constructor
    binary_tree_node(
        const Item& init_data = Item(),
        binary_tree_node* init_left = nullptr,
        binary_tree_node* init_right = nullptr
    );

    // Member functions
    Item& data();
    binary_tree_node* left();
    binary_tree_node* right();
    void set_data(const Item& new_data);
    void set_left(binary_tree_node* new_left);
    void set_right(binary_tree_node* new_right);
    bool is_leaf() const;

private:
    Item data_field;
    binary_tree_node *left_field, *right_field;
};`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tree Traversals</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Types</h3>
            <ul className="list-disc pl-5">
              <li>Preorder (Root-Left-Right)</li>
              <li>Inorder (Left-Root-Right)</li>
              <li>Postorder (Left-Right-Root)</li>
              <li>Level-order (Breadth-first)</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Example Functions</h3>
            <pre className="bg-gray-50 p-3 rounded text-sm">
              <code>{`void inorder(binary_tree_node* root);
void preorder(binary_tree_node* root);
void postorder(binary_tree_node* root);`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Operations</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Basic Operations</h3>
            <ul className="list-disc pl-5">
              <li>Insert node</li>
              <li>Delete node</li>
              <li>Search for value</li>
              <li>Find height</li>
              <li>Count nodes</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Time Complexity</h3>
            <ul className="list-disc pl-5">
              <li>Search: O(h) - h is height</li>
              <li>Insert: O(h)</li>
              <li>Delete: O(h)</li>
              <li>Traversal: O(n)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tree Properties</h2>
        <div className="space-y-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Binary Search Tree Property</h3>
            <p>For each node:</p>
            <ul className="list-disc pl-5">
              <li>All left subtree values &lt; node value</li>
              <li>All right subtree values &gt; node value</li>
              <li>No duplicate values allowed</li>
            </ul>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Tree Balance</h3>
            <ul className="list-disc pl-5">
              <li>Height-balanced trees</li>
              <li>AVL tree conditions</li>
              <li>Rebalancing operations</li>
              <li>Rotation techniques</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Memory Management</h2>
        <div className="border p-4 rounded-lg">
          <ul className="list-disc pl-5">
            <li>Recursive deletion in destructor</li>
            <li>Deep copy in copy constructor</li>
            <li>Clear old tree in assignment</li>
            <li>Handle self-assignment</li>
          </ul>
        </div>
      </section>

      <footer className="mt-12 text-sm text-gray-600">
        <p>Reference: "Data Structures and Other Objects Using C++" by Main & Savitch</p>
      </footer>
    </div>
  );
}