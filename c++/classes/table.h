#ifndef TABLE_H
#define TABLE_H

#include <string>

using namespace std;

class Table
{
private:
    unsigned int length; // unsigned integer - has to be positive
    unsigned int width;
    string color;
    unsigned int legs;
    double price;

public:
    Table(unsigned int length, unsigned int width, unsigned int legs, string color, double price);
    void getColor();
    void getLegs();
    void getPrice();
    void getLength();
    void getWidth();
    void setColor(string color);
    void setLegs(unsigned int legs);
    void calculateArea();
    void displayDetails();
};

#endif
