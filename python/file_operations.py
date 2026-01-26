#!/usr/bin/env python3
"""
File I/O Operations Program
Demonstrates reading from and writing to files.
"""

import os

def write_to_file(filename, content):
    """Write content to a file."""
    with open(filename, 'w') as f:
        f.write(content)
    print(f"Content written to {filename}")

def read_from_file(filename):
    """Read and return content from a file."""
    if not os.path.exists(filename):
        print(f"File {filename} does not exist")
        return None
    
    with open(filename, 'r') as f:
        content = f.read()
    return content

def append_to_file(filename, content):
    """Append content to a file."""
    with open(filename, 'a') as f:
        f.write(content)
    print(f"Content appended to {filename}")

def main():
    filename = "sample.txt"
    
    # Write to file
    write_to_file(filename, "Hello, this is a sample file.\n")
    
    # Append to file
    append_to_file(filename, "This line is appended.\n")
    
    # Read from file
    content = read_from_file(filename)
    if content:
        print("\nFile contents:")
        print(content)
    
    # Clean up
    if os.path.exists(filename):
        os.remove(filename)
        print(f"\n{filename} has been removed")

if __name__ == "__main__":
    main()
