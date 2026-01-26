/*
 * Basic Calculator in C
 * Performs simple arithmetic operations.
 */

#include <stdio.h>

int main() {
    char operator;
    double num1, num2, result;
    
    printf("Simple Calculator\n");
    printf("=================\n");
    printf("Enter operator (+, -, *, /): ");
    scanf(" %c", &operator);
    
    printf("Enter first number: ");
    scanf("%lf", &num1);
    
    printf("Enter second number: ");
    scanf("%lf", &num2);
    
    switch(operator) {
        case '+':
            result = num1 + num2;
            printf("%.2lf + %.2lf = %.2lf\n", num1, num2, result);
            break;
        case '-':
            result = num1 - num2;
            printf("%.2lf - %.2lf = %.2lf\n", num1, num2, result);
            break;
        case '*':
            result = num1 * num2;
            printf("%.2lf * %.2lf = %.2lf\n", num1, num2, result);
            break;
        case '/':
            if (num2 == 0) {
                printf("Error: Division by zero!\n");
            } else {
                result = num1 / num2;
                printf("%.2lf / %.2lf = %.2lf\n", num1, num2, result);
            }
            break;
        default:
            printf("Error: Invalid operator!\n");
    }
    
    return 0;
}
