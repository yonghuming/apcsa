# 2D Array

2D array is array of array. Element of 2D array is array.

## Declare 2d Array
```java
int[][] arr2d = {
    {1, 2, 3};
    {4, 5, 6}
};

arr2d.length; // rows 2
arr2d[0].length; // columns of arr2d, 3

String[][] mat = new String[4][6];
```

## Traverse 2d Array

```java

// using for each loop
for (int row = 0; row < arr2d.length; row++)
{
    for (int col = 0; col < arr2d[0].length; col++)
    {
        System.out.print(arr2d[row][col] + " ");
    }
    System.out.println();
}

// using for each loop
for (int[] row : arr2d)
{
    for (int element : row)
    {
        System.out.print(elment + " ");
    }
    System.out.println();
}

for (int[] row : arr2d)
{
    for (int col = 0; col < row.length; col++)
    {
        System.out.print(row[col] + " ");
    }
    System.out.println();
}

for (int row = 0; row < arr2d.length; row++)
{
    for (int element : arr2d[row])
    {
        System.out.print(elment + " ");
    }
}
```