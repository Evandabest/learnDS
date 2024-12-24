'use client';

export default function BSTPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Binary Search Tree Project</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">BST Header File</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`// bst.h
template <class Item>
class binary_search_tree {
public:
    // Constructors and destructor
    binary_search_tree();
    binary_search_tree(const binary_search_tree& source);
    ~binary_search_tree();
    
    // Modification member functions
    void insert(const Item& entry);
    bool remove(const Item& target);
    void operator=(const binary_search_tree& source);
    
    // Constant member functions
    bool search(const Item& target) const;
    void print() const;
    bool empty() const;
    
private:
    binary_tree_node<Item>* root_ptr;
    
    // Helper functions
    void insert_aux(binary_tree_node<Item>*& root, const Item& entry);
    bool remove_aux(binary_tree_node<Item>*& root, const Item& target);
    binary_tree_node<Item>* remove_max(binary_tree_node<Item>*& root);
    void print_aux(binary_tree_node<Item>* root) const;
    void tree_clear(binary_tree_node<Item>*& root);
    binary_tree_node<Item>* tree_copy(const binary_tree_node<Item>* root);
};`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">BST Property</h2>
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <pre className="text-center text-lg">
            <code>{`     [50]
    /    \\
  [25]   [75]
  /  \\   /  \\
[10][30][60][90]

For each node X:
- All values in left subtree < X
- All values in right subtree > X`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Example Usage</h2>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code className="text-black">{`binary_search_tree<int> bst;

// Insert elements
bst.insert(50);
bst.insert(25);
bst.insert(75);
bst.insert(10);
bst.insert(30);

// Search
if (bst.search(25))
    cout << "Found 25!";

// Remove
bst.remove(25);  // Restructures tree

// Print in-order
bst.print();     // Prints sorted order`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Time Complexity</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Average Case</h3>
            <ul className="list-disc pl-5">
              <li>Search: O(log n)</li>
              <li>Insert: O(log n)</li>
              <li>Remove: O(log n)</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Worst Case</h3>
            <ul className="list-disc pl-5">
              <li>Search: O(n)</li>
              <li>Insert: O(n)</li>
              <li>Remove: O(n)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Important Notes</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>BST property must be maintained after each operation</li>
          <li>Balancing not automatically maintained</li>
          <li>Performance depends on insertion order</li>
          <li>In-order traversal gives sorted sequence</li>
        </ul>
      </section>

      <footer className="mt-12 text-sm text-gray-600">
        <p>Reference: "Data Structures and Other Objects Using C++" by Main & Savitch</p>
      </footer>
    </div>
  );
}