
#include "table.h"
#include <iostream>

using namespace std;

Table::Table(unsigned int legs, unsigned int length, unsigned int width, string color, double price)
{
    this->legs = legs;
    this->length = length;
    this->width = width;
    this->color = color;
    this->price = price;
}

void Table::calculateArea()
{

    cout << "Calculating area of table" << endl;
    cout << "Area = " << length * width << endl;
}

void Table::getColor()
{
    cout << "Color of table is " << color << endl;
}

void Table::getLegs()
{
    cout << "Table has " << legs << " legs" << endl;
}

void Table::setColor(string inputColor)
{
    this->color = inputColor;
}

void Table::setLegs(unsigned int inputLegs)
{
    this->legs = inputLegs;
}

void Table::getPrice()
{
    cout << "Price of table is " << price << endl;
}

void Table::getLength()
{
    cout << "Length of table is " << length << endl;
}

void Table::getWidth()
{
    cout << "Width of table is " << width << endl;
}

void Table::displayDetails()
{
    cout << "Table has " << legs << " legs" << endl;
    cout << "Table has length " << length << endl;
    cout << "Table has width " << width << endl;
    cout << "Table has color " << color << endl;
    cout << "Table has price " << price << endl;
}
