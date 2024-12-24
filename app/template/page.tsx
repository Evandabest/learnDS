'use client';

export default function TemplatePage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Template Functions in C++</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What are Template Functions?</h2>
        <p className="mb-4">
          Template functions allow you to write a single function that can work with different 
          data types without having to write separate functions for each type.
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`// Basic template function
template <typename T>
T max(T a, T b) {
    return (a > b) ? a : b;
}

// Usage
int maxInt = max(10, 20);        // Works with integers
double maxDouble = max(3.14, 2.72); // Works with doubles
string maxStr = max("abc", "def");  // Works with strings`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Multiple Template Parameters</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`template <typename T, typename U>
auto add(T a, U b) -> decltype(a + b) {
    return a + b;
}

// Usage
int sum1 = add(5, 3);      // Both integers
double sum2 = add(3.14, 2); // Double and integer
string str = add("Hello", "World"); // Two strings`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Template Specialization</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`// General template
template <typename T>
T absolute(T x) {
    return (x < 0) ? -x : x;
}

// Specialization for strings
template <>
string absolute(string x) {
    return x;  // Strings don't have negative values
}

// Usage
cout << absolute(-5);      // Outputs: 5
cout << absolute(-3.14);   // Outputs: 3.14
cout << absolute("hello"); // Outputs: hello`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Use Cases</h2>
        <div className="space-y-4">
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Array Operations</h3>
            <pre className="bg-gray-100 p-4 rounded-lg">
              <code className="text-black">{`template <typename T>
T sum(T arr[], int size) {
    T result = T();  // Initialize to default value
    for(int i = 0; i < size; i++) {
        result += arr[i];
    }
    return result;
}`}</code>
            </pre>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Container Operations</h3>
            <pre className="bg-gray-100 p-4 rounded-lg">
              <code className="text-black">{`template <typename Container>
void printContainer(const Container& c) {
    for(const auto& element : c) {
        cout << element << " ";
    }
    cout << endl;
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Use meaningful template parameter names (T, U, Container)</li>
          <li>Consider constraints on template parameters</li>
          <li>Provide clear documentation about required operations</li>
          <li>Test with different data types</li>
          <li>Be mindful of compiler error messages</li>
        </ul>
      </section>
    </div>
  );
}