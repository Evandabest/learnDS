'use client';

export default function OperatorOverloadingPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Operator Overloading in C++</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is Operator Overloading?</h2>
        <p className="mb-4">
          Operator overloading allows you to define how operators work with user-defined classes.
          This enables more intuitive syntax when working with custom objects.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Syntax</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`class Complex {
  private:
    double real, imag;
  
  public:
    // Operator overloading as member function
    Complex operator+(const Complex& other) {
        return Complex(real + other.real, imag + other.imag);
    }
    
    // Operator overloading as friend function
    friend Complex operator-(const Complex& c1, const Complex& c2);
};`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Operators to Overload</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Arithmetic operators (+, -, *, /)</li>
          <li>Comparison operators (==, !=, &lt;, &gt;)</li>
          <li>Assignment operator (=)</li>
          <li>Stream operators (&lt;&lt;, &gt;&gt;)</li>
          <li>Increment/Decrement (++, --)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Stream Operator Example</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`class Point {
    int x, y;
public:
    friend ostream& operator<<(ostream& out, const Point& p) {
        out << "(" << p.x << ", " << p.y << ")";
        return out;
    }
    
    friend istream& operator>>(istream& in, Point& p) {
        in >> p.x >> p.y;
        return in;
    }
};`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Assignment Operator</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`class String {
    char* str;
public:
    String& operator=(const String& other) {
        if (this != &other) {  // Self-assignment check
            delete[] str;       // Free existing resource
            str = new char[strlen(other.str) + 1];
            strcpy(str, other.str);
        }
        return *this;
    }
};`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Maintain natural semantics of operators</li>
          <li>Implement related operators consistently</li>
          <li>Consider returning references for chain operations</li>
          <li>Use const where appropriate</li>
          <li>Handle self-assignment in assignment operator</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Use Cases</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`// Vector addition
Vector v1(1, 2), v2(3, 4);
Vector v3 = v1 + v2;

// String concatenation
MyString s1("Hello "), s2("World");
MyString s3 = s1 + s2;

// Matrix operations
Matrix m1(2,2), m2(2,2);
Matrix m3 = m1 * m2;`}</code>
        </pre>
      </section>

    </div>
  );
}