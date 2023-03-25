
## array
> Array is a list / collection of values / objects
EltType[] arrayName = EltType[numOfElement];
### declare array
```java
int[] ages = {15, 17, 14}; // an array initialize with 3 integer value
int[] a = new int[3]; // default value is 0, have 10 elements
String[] colors = {"red", "green", "blue"}; // 
String[] shopList = new String[2]; // defaut value: null
double[] scores = new double[4]; // defaut value: 0.0
boolean[] isParty = new boolean[6]; // defaut value: false
```

<!-- slide .left-->
## null
>null is nothing, 不能访问 null 的方法
```java
String[] colors = new String[3];
// colors[1] = "red"; 
System.out.println(colors[1].substring(2));
```
>==java.lang.NullPointerException==

<!-- slide .left-->
## visit element of an array
> [] is array / list element visiting operator
```java
String[] colors = {"red", "green", "blue"}; // 
String red = colors[0]; // index of "red" is zero
String c = colors[2]; // blue
```
<!-- slide .left-->
## length of array
> arr.length property not a method like string.length()

```java
String[] colors = {"red", "green", "blue"}; // 
int numOfColors = colors.length; // => 3
```
> ArrayIndexOutOfBound

```java
colors[10]; // Runtime Exception
```

<!-- slide .left-->
## practice
Given an array of ints, return true if 6 appears as ==either the first or last== `element` in the array. The array will be length 1 or more.

```java
firstLast6([1, 2, 6]) → true
firstLast6([6, 1, 2, 3]) → true
firstLast6([13, 6, 1, 2, 3]) → false
```
Solution
```java
int first = arr[0];
// int last  = arr[arr.length]; // ArrayIndexOutOfBound
int last  = arr[arr.length-1]; 

boolean rst = first == 6 || last == 6;
```



<!-- slide .left-->
## traverse array
> visit each element of array using loop.