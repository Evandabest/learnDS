
#include <iostream>
#include "table.cpp"
#include "table.h"

using namespace std;

int main()
{

    Table table1(4, 10, 5, "Brown", 100.0);
    Table table2(4, 5, 5, "White", 50.0);
    Table table3(4, 15, 10, "Black", 150.0);
    Table table4(4, 20, 15, "Red", 200.0);
    Table table5(4, 25, 20, "Blue", 250.0);

    Table tables[] = {table1, table2, table3, table4, table5};

    cout << "Welcome to the table store" << endl;
    cout << "1. Display all tables" << endl;
    cout << "2. Calculate area of all tables" << endl;
    cout << "3. Get price of a table" << endl;
    cout << "4. Purchase a table" << endl;
    cout << "5. Exit" << endl;

    int menuChoice = 0;
    while (cin >> menuChoice)
    {
        switch (menuChoice)
        {
        case 1:
            for (int i = 0; i < 5; i++)
            {
                cout << "Table " << i + 1 << endl;
                tables[i].displayDetails();
            }
            break;
        case 2:
            for (int i = 0; i < 5; i++)
            {
                cout << "Table " << i + 1 << endl;
                tables[i].calculateArea();
            }
            break;
        case 3:
            int tableNumber;
            cout << "Enter table number: ";
            cin >> tableNumber;
            tables[tableNumber - 1].getPrice();
            break;
        case 4:
            int tableNumber2;
            cout << "Enter table number: ";
            cin >> tableNumber2;
            tables[tableNumber2 - 1] = Table(0, 0, 0, "", 0);
            cout << "Table purchased" << endl;
            break;
        case 5:
            cout << "Thank you for coming" << endl;
            return 0;

        default:
            cout << "Invalid choice" << endl;
            break;
        }

        cout << "1. Display all tables" << endl;
        cout << "2. Calculate area of all tables" << endl;
        cout << "3. Get price of a table" << endl;
        cout << "4. Purchase a table" << endl;
        cout << "5. Exit" << endl;
    }
}
