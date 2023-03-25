---
title: APCSA Introduction
description: AP计算机科学A，AP 计算机科学，AP 计算机科学 A，APCSA，AP 计算机，AP computer science
---
# Introduction

[[toc]]


* data and types
hello
  * int 

* double
* condtion

* iteration

* using object

* writing class

* array



<mermaid>
graph LR
A --> B
</mermaid>

```java
class Dog
{
  private String name;
  public Dog(String name)
  {
    this.name = name;
  }
  public String getName()
  {
    return name;
  }
}
class Main
{
  public static String translate(String letter, String rule)
  {
    int index = rule.indexOf(letter);
    if (index == -1)
    {
      return letter; // if letter not exist in rule, return letter
    }
    if (index != rule.length - 1) // letter not last element of rule
    {
      // letter not the last elment
      return rule.substring(index+1, index+2); // return char next to letter
    }
    else
    { // if letter is last one return first elment
      return rule.substring(0, 1); // first element
    }
  }
  public static String changeKey(String letter, String key)
  {
    int index = key.indexOf(letter);
    if (index == -1)
    {
      return letter; // letter not containing in key
    }
    // letter containing in key
    return key.substring(0, index) + key.substring(index+1);
  }
  public static String changeKey(String letter, String key)
  {
    int index = key.indexOf(letter);
    if (index == -1)
    {
      return letter; // letter not containing in key
    }
    // letter containing in key
    String result = "";
    for (int i = 0; i < key.lenght; i++)
    {
      if (i != index)
      {
        result += key.substring(i, i+1);
        // alias
        // result += key.charAt(i);      
      }
    }
    return result;
  }
  
  public static String compareTo(String s1, String s2)
  {
    int min = s1.length();
    if (min > s2.length())
    {
      min = s2.length();
    }
    for (int i = 0; i < min; i++)
    {
      String t1 = s1.substring(i, i+1);
      String t2 = s2.substring(i, i+1);
      if !(t1.equals(t2))
      {
        return s1.charAt(i) - s1.charAt(i);
      }
    }
    return s1.length - s2.length;
  }
  public static String letterAndPatter(String letter, String pattern)
  {
    if (pattern.indexOf(letter) != -1) // pattern.contains(patter)
    {
      return letter;
    }
    String result = "";
    for (int i = pattern.length-1; i>= 0; i--)
    {
      result += pattern.substring(i, i+1);
    }
    return result;
  }
  public static int countEvens(int[] arr)
  {
    int count = 0; // counter
    for (int i = 0; i < arr.length; i++)
    {
      if (arr[i] % 2 == 0)
      {
        count += 1;
      }
    }
    return count;
  }
  /**
   * count how may many value in arr
  */
  public static int count(int[] arr, int value)
  {
    int count = 0; // counter
    for (int i = 0; i < arr.length; i++)
    {
      if (arr[i] == value) // condition, pattern of find / search
      {
        count += 1;
      }
    }
    return count;
  
    
  }
  public static int count(String[] arr, String value)
  {
    int count = 0; // counter
    for (int i = 0; i < arr.length; i++)
    {
      if (arr[i].equals(value)) // compare content of String
        // shoud use equals method
      {
        count += 1;
      }
    }
    return count;  
  }
  public static void printRun(int[] arr)
  {
    int run = 1;
    for (int i = 0; i < arr.length - 1; i++) // < length-1
    {
      if (arr[i] == arr[i+1]) // compare last element, current element
      {
        run += 1;
      }
      else
      {
        run = 1;
      }
      System.out.println("index: " + i + " " + arr[i] + " run: " + run);
    }
  }
  public static boolean has(int[] arr, int value)
  {
    for (int num : arr) // for each loop, 
    {
      if (num == value) // {1, 100, 2}
      {
        return true;
      }
      // else
      // {
      //   return false;
      // }
    }
    return false; // no element of arr equals value
  }
  /** cal sum of array using for each loop */
  public static int sum(int[] arr)
  {
    int sum = 0;
    for (int num : arr) // num represent each element
    {
      sum += num;
    }
    return sum;
  }
  /**cal sum of arr using regular for loop*/
  public static int sum2(int[] arr)
  {
    int sum = 0;
    for (int i = 0; i < arr.length; i++)
    {
      sum += arr[i]; // arr[i] represent each element
    }
    return sum;
  }
  
  
  public static int sum(int[][] arr2d)
  {
    int sum = 0;
    for (int[] row : arr2d) // for each loop
    {
      sum += sum(row);
    }
    return sum;
  }
  public static int sum2(int[][] mat)
  {
    int sum = 0;
    for (int row = 0; row < mat.length; row++)
    {
      for (int col = 0; col < mat[0].length; col++)
      {
        sum += mat[row][col];
      }
    }
    return sum;
  }
  public static int[] getColumn(int[][] arr2d, int c)
  {
    int len = arr2d.length;
    int[] rst = new int[len];
    for (int i = 0; i < arr2d.length; i++)
    {
      rst[i] = arr2d[i][c];
    }
    return rst;
  }
  public static int[] crossLine(int[][] square)
  {
    int[] rst = new int[square.length];
    for (int i = 0; i < square.length; i++)
    {
      rst[i] = square[i][i];
    }
    return rst;
  }
  public static int[] crossLineRTLB(int[][] square)
  {
    int[] resultArray = new int[square.length];
    for (int i = 0; i < square.length; i++)
    {
      resultArray[i] = square[i][square.length-1-i];
    }
    return resultArray;
  }
  // rows * cols == arr.length
  public static int[][] arrayToMatrixRowMajor(int[] arr, int rows, int cols)
  {
    int[][] result = new int[rows][cols];

    for (int row = 0; row < rows; row++)
    {
      for (int col = 0; col < cols; col++)
      {
        result[row][col] = arr[row * cols + col];
      }
        
    }

    return result;
  }
  public static int[][] arrayToMatrixColumnMajor(int[] arr, int rows, int cols)
  {
    int[][] result = new int[rows][cols];

    for (int row = 0; row < rows; row++)
    {
      for (int col = 0; col < cols; col++)
      {
        result[row][col] = arr[col * rows + row];
      }
        
    }

    return result;
  }
  public static int[][] snack(int[] arr, int rows, int cols)
  {
    int[][] rst = new int[rows][cols];

    for (int row = 0; row < rows; row++)
    {
      for (int col = 0; col < cols; col++)
      {
        if (row % 2 == 0)
        {
          rst[row][col] = arr[row * cols + col];
        }
        else
        {
          rst[row][col] = arr[row*col + cols - 1 - col];
        }
      }
    }    
    return rst;
  }
  public static double rangeAverage(int[][] mat, int rowStart, int rowEnd, int colStart, int colEnd)
  {
    int count = (rowEnd - rowStart + 1) * (colEnd - colStart + 1);
    int sum = 0;
    for (int row = rowStart; row <= rowEnd; row++)
    {
      for (int col = colStart; col <= colEnd; col++)
      {
        sum += mat[row][col];
      }
    }
    return (double) sum / count;
  }
  
  public static void main(String[] args) {
    int[] arr = {1, 1, 1, 2, 3, 4, 5};
    System.out.println(countEvens(arr)); // 2
    System.out.println(count(arr, 4)); // 1
    printRun(arr);
    int[][] mat = {{1, 2},
                   {3, 4},
                   {5, 6}}; // 3 rows, 2 columns
    int num = mat[2][1]; // 6
  }
}
```

* ArrayList

* Inherence

* Recursion
> 递归的题目可以递归树来解决。递归树是一个有 3 个分支的树，左子树表示递归调用之前的内容；中子树表示向下递归调用；右递归表示递归之后执行的部分。