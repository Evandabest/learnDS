'use client';

export default function BinaryTreePage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Binary Tree Project</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Binary Tree Node Header</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`// binary_tree.h
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
    const Item& data() const;
    binary_tree_node* left();
    const binary_tree_node* left() const;
    binary_tree_node* right();
    const binary_tree_node* right() const;
    
    // Modification member functions
    void set_data(const Item& new_data);
    void set_left(binary_tree_node* new_left);
    void set_right(binary_tree_node* new_right);
    bool is_leaf() const;
    
private:
    Item data_field;
    binary_tree_node* left_field;
    binary_tree_node* right_field;
};`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Binary Tree Class Header</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`// binary_tree.h
template <class Item>
class binary_tree {
public:
    // Constructors and destructor
    binary_tree();
    binary_tree(const binary_tree& source);
    ~binary_tree();
    
    // Modification member functions
    void create_first_node(const Item& entry);
    void shift_to_root();
    void shift_to_left();
    void shift_to_right();
    void shift_to_parent();
    void add_left(const Item& entry);
    void add_right(const Item& entry);
    void remove_left();
    void remove_right();
    
    // Constant member functions
    bool is_empty() const;
    Item retrieve() const;
    bool is_leaf() const;
    
    // Tree traversal functions
    void preorder(void (*visit)(Item&));
    void inorder(void (*visit)(Item&));
    void postorder(void (*visit)(Item&));
    
private:
    binary_tree_node<Item>* root_ptr;
    binary_tree_node<Item>* cursor;
    binary_tree_node<Item>* parent;
    void tree_clear(binary_tree_node<Item>*& root);
    binary_tree_node<Item>* tree_copy(const binary_tree_node<Item>* root);
};`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tree Toolkit Functions</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`template <class Item>
void print(binary_tree_node<Item>* node_ptr);

template <class Item>
void tree_clear(binary_tree_node<Item>*& root_ptr);

template <class Item>
binary_tree_node<Item>* tree_copy(const binary_tree_node<Item>* root_ptr);

template <class Item>
std::size_t tree_size(const binary_tree_node<Item>* node_ptr);`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Updated Example Usage</h2>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code className="text-black">{`// Create and manipulate a binary tree
binary_tree<int> tree;
tree.create_first_node(50);

// Add children
tree.add_left(25);
tree.add_right(75);

// Navigation
tree.shift_to_left();
tree.add_left(12);
tree.add_right(37);
tree.shift_to_root();

// Traversal example
void print_item(int& item) {
    cout << item << " ";
}
tree.inorder(print_item);  // Prints: 12 25 37 50 75`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Time Complexity</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Node Operations</h3>
            <ul className="list-disc pl-5">
              <li>Access data/links: O(1)</li>
              <li>Modify data/links: O(1)</li>
              <li>Check if leaf: O(1)</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Tree Operations</h3>
            <ul className="list-disc pl-5">
              <li>Print tree: O(n)</li>
              <li>Clear tree: O(n)</li>
              <li>Copy tree: O(n)</li>
              <li>Size: O(n)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Memory Management</h2>
        <div className="border p-4 rounded-lg">
          <ul className="list-disc pl-5">
            <li>Always delete nodes when clearing tree</li>
            <li>Make deep copies when copying trees</li>
            <li>Set pointers to nullptr after deletion</li>
            <li>Avoid memory leaks in recursive operations</li>
          </ul>
        </div>
      </section>

      <footer className="mt-12 text-sm text-gray-600">
        <p>Reference: "Data Structures and Other Objects Using C++" by Main & Savitch</p>
      </footer>
    </div>
  );
}