#!/usr/bin/env python3
"""
Sorting Algorithms Program
Demonstrates various sorting algorithms.
"""

def bubble_sort(arr):
    """Sort array using bubble sort algorithm."""
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

def selection_sort(arr):
    """Sort array using selection sort algorithm."""
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

def insertion_sort(arr):
    """Sort array using insertion sort algorithm."""
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

def main():
    test_array = [64, 34, 25, 12, 22, 11, 90]
    print(f"Original array: {test_array}")
    
    # Bubble sort
    arr1 = test_array.copy()
    bubble_sort(arr1)
    print(f"Bubble sort result: {arr1}")
    
    # Selection sort
    arr2 = test_array.copy()
    selection_sort(arr2)
    print(f"Selection sort result: {arr2}")
    
    # Insertion sort
    arr3 = test_array.copy()
    insertion_sort(arr3)
    print(f"Insertion sort result: {arr3}")

if __name__ == "__main__":
    main()
