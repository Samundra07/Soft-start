#!/usr/bin/env node
/**
 * Array Manipulation Program
 * Demonstrates various array operations and methods.
 */

// Sample array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];

function demonstrateArrayMethods() {
    console.log('Original numbers:', numbers);
    console.log('Original fruits:', fruits);
    console.log();
    
    // Map - transform each element
    const doubled = numbers.map(n => n * 2);
    console.log('Doubled numbers:', doubled);
    
    // Filter - select elements that meet a condition
    const evenNumbers = numbers.filter(n => n % 2 === 0);
    console.log('Even numbers:', evenNumbers);
    
    // Reduce - combine all elements into a single value
    const sum = numbers.reduce((acc, n) => acc + n, 0);
    console.log('Sum of numbers:', sum);
    
    // Find - get first element that matches condition
    const firstEven = numbers.find(n => n % 2 === 0);
    console.log('First even number:', firstEven);
    
    // Some - check if at least one element matches
    const hasEven = numbers.some(n => n % 2 === 0);
    console.log('Has even numbers:', hasEven);
    
    // Every - check if all elements match
    const allPositive = numbers.every(n => n > 0);
    console.log('All numbers positive:', allPositive);
    
    // Sort
    const sortedFruits = [...fruits].sort();
    console.log('Sorted fruits:', sortedFruits);
    
    // Reverse
    const reversed = [...numbers].reverse();
    console.log('Reversed numbers:', reversed);
    
    // Slice
    const sliced = numbers.slice(2, 5);
    console.log('Sliced numbers (index 2-4):', sliced);
    
    // Concat
    const combined = numbers.concat([11, 12, 13]);
    console.log('Combined with [11, 12, 13]:', combined);
}

function main() {
    console.log('=== Array Manipulation Demo ===\n');
    demonstrateArrayMethods();
}

main();
