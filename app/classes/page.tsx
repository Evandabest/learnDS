'use client';

import { PageNavigation } from '@/components/page-navigation';

export default function ClassesPage() {

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Understanding Classes and Objects in C++</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Classes</h2>
        <p className="mb-4">
          A class is a user-defined data type that encapsulates data and functions that operate on that data. 
          It serves as a blueprint for creating objects, defining their properties and behaviors.
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`class Student {
  private:
    string name;
    int id;
  public:
    void setName(string n) { name = n; }
    string getName() { return name; }
};`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Objects</h2>
        <p className="mb-4">
          An object is an instance of a class. When a class is defined, no memory is allocated, 
          but when an object is created, memory is allocated for the data members of the class.
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`Student student1;  // Creating an object
student1.setName("John");  // Using object methods`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Header Files</h2>
        <p className="mb-4">
          Header files (.h) contain declarations of classes, functions, and variables that can be shared 
          across multiple source files. They help in organizing code and promoting reusability.
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`// student.h
#ifndef STUDENT_H
#define STUDENT_H

class Student {
    // Class declaration
};

#endif`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Class Attributes (Members)</h2>
        <p className="mb-4">
          Class attributes are variables that belong to the class. They represent the state or
          properties of class objects.
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`class Car {
  private:
    string brand;    // Data member
    string model;    // Data member
    int year;        // Data member
    double price;    // Data member
};`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Member Functions (Methods)</h2>
        <p className="mb-4">
          Member functions define the behavior of a class. They can access and modify class attributes.
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`class Rectangle {
  private:
    double width;
    double height;
  
  public:
    // Constructor
    Rectangle(double w, double h) : width(w), height(h) {}
    
    // Member functions
    double getArea() { return width * height; }
    double getPerimeter() { return 2 * (width + height); }
    
    // Modifier function
    void resize(double factor) {
        width *= factor;
        height *= factor;
    }
};`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Constructors and Destructors</h2>
        <p className="mb-4">
          Constructors initialize objects when they are created. Destructors clean up resources
          when objects are destroyed.
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`class Student {
  private:
    string* name;
    int id;
    
  public:
    // Default constructor
    Student() : name(nullptr), id(0) {}
    
    // Parameterized constructor
    Student(string n, int i) {
        name = new string(n);
        id = i;
    }
    
    // Destructor
    ~Student() {
        delete name;
    }
};`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Access Specifiers</h2>
        <p className="mb-4">
          Access specifiers control the visibility and accessibility of class members.
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li className="mb-2"><strong>private:</strong> Only accessible within the class</li>
          <li className="mb-2"><strong>public:</strong> Accessible from anywhere</li>
          <li className="mb-2"><strong>protected:</strong> Accessible in the class and its derived classes</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Inheritance Basics</h2>
        <p className="mb-4">
          Classes can inherit properties and methods from other classes, promoting code reuse.
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-black">{`class Animal {
  protected:
    string name;
  public:
    void setName(string n) { name = n; }
};

class Dog : public Animal {
  public:
    void bark() {
        cout << name << " says: Woof!" << endl;
    }
};`}</code>
        </pre>
      </section>

      <PageNavigation 
        nextPage={{
          href: "/adt",
          label: "Abstract Data Structures"
        }}
        relatedPages={[
          { href: "/template", label: "Templates" },
          { href: "/operator-overloading", label: "Operator Overloading" },
        ]}
        projects={[
            { href: "/projects/vector", label: "Vector Implementation" },
            { href: "/projects/statistician", label: "Statistician Class" },
            { href: "/projects/bag", label: "Bag Class" },
        ]}
      />

    </div>
  );
}