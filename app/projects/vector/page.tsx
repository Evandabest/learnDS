'use client';

export default function VectorPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Vector Class Project</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="mb-4">
          A vector is a dynamic array that grows automatically as elements are added. 
          It provides constant-time access to elements and amortized constant-time 
          insertion at the end.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Implementation</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`template <class T>
class Vector {
private:
    T* data;           // Pointer to dynamic array
    size_t capacity;   // Current capacity
    size_t count;      // Number of elements

public:
    // Constructor
    Vector(size_t initial_capacity = 10) {
        data = new T[initial_capacity];
        capacity = initial_capacity;
        count = 0;
    }

    // Destructor
    ~Vector() {
        delete[] data;
    }

    // Add element to end
    void push_back(const T& value) {
        if (count == capacity) {
            resize(capacity * 2);
        }
        data[count++] = value;
    }

    // Access element
    T& operator[](size_t index) {
        return data[index];
    }

    // Remove last element
    void pop_back() {
        if (count > 0) count--;
    }

    // Current size
    size_t size() const {
        return count;
    }

private:
    // Resize array
    void resize(size_t new_capacity) {
        T* new_data = new T[new_capacity];
        for (size_t i = 0; i < count; i++) {
            new_data[i] = data[i];
        }
        delete[] data;
        data = new_data;
        capacity = new_capacity;
    }
};`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Time Complexity</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Common Operations</h3>
            <ul className="list-disc pl-5">
              <li>Access [i]: O(1)</li>
              <li>Insert/remove at end: O(1) amortized</li>
              <li>Insert/remove in middle: O(n)</li>
              <li>Search: O(n)</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Memory</h3>
            <ul className="list-disc pl-5">
              <li>Space: O(n)</li>
              <li>Doubles capacity when full</li>
              <li>Amortized cost analysis</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Example Usage</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`Vector<int> vec;
// Add elements
vec.push_back(10);
vec.push_back(20);
vec.push_back(30);

// Access elements
cout << vec[0] << endl;  // 10
cout << vec[1] << endl;  // 20

// Remove last element
vec.pop_back();

// Get size
cout << vec.size() << endl;  // 2`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Important Considerations</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Memory management (Rule of Three/Five)</li>
          <li>Exception safety</li>
          <li>Iterator support</li>
          <li>Growth strategy optimization</li>
        </ul>
      </section>
    </div>
  );
}