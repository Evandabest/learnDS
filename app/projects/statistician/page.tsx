'use client';

import Link from "next/link";

export default function StatisticianPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Statistician Class Project</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="mb-4">
          The Statistician class processes a sequence of numbers to compute basic statistics:
          length, sum, mean, minimum, and maximum values.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Class Definition</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`class statistician {
  public:
    // Constructors
    statistician();
    
    // Modification member functions
    void next_number(double r);
    void reset();
    
    // Constant member functions
    int length() const { return count; }
    double sum() const { return total; }
    double mean() const;
    double minimum() const;
    double maximum() const;
    
  private:
    int count;     // Length of sequence
    double total;  // Sum of all numbers
    double tinyest;// Smallest number
    double largest;// Largest number
};`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Implementation Details</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Constructor initializes count to 0 and other members to 0.0</li>
          <li>next_number() adds a new number to the sequence</li>
          <li>mean() returns total/count (or 0.0 if count is 0)</li>
          <li>reset() resets all members to initial values</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Example Usage</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`statistician s;
s.next_number(3.5);
s.next_number(2.0);
s.next_number(10.25);

cout << "Count: " << s.length() << endl;    // 3
cout << "Sum: " << s.sum() << endl;         // 15.75
cout << "Mean: " << s.mean() << endl;       // 5.25
cout << "Min: " << s.minimum() << endl;     // 2.0
cout << "Max: " << s.maximum() << endl;     // 10.25`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <Link href={'/operator-overloading'} className="text-2xl hover:text-yellow-300 font-semibold mb-4">Operator Overloading</Link>
        <p className="mb-4">
          The class also supports combining two statisticians using operator+:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`statistician operator+(const statistician& s1, const statistician& s2);
// Returns a statistician with numbers from both sequences`}</code>
        </pre>
      </section>

    </div>
  );
}