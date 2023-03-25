
# array
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


## null
>null is nothing, 不能访问 null 的方法
```java
String[] colors = new String[3];
// colors[1] = "red"; 
System.out.println(colors[1].substring(2));
```
>==java.lang.NullPointerException==

## visit element of an array
> [] is array / list element visiting operator
```java
String[] colors = {"red", "green", "blue"}; // 
String red = colors[0]; // index of "red" is zero
String c = colors[2]; // blue
```

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



## Common Argthmetic
### traverse array
> visit each element of array using loop.
#### regular for loop
using regular for loop traverse array:
```java
for (int i = 0; i < arr.length; i++)
{
    System.out.println(arr[i]); 
    // arr[i] is elment, i is index
}
```

#### For each loop traverse array

```java
int[] arr = {1, 2, 3};
for (int element : arr)
{
    System.out.println(element);
    // variable element is element
}
```
### count elment

```java
// count how may elment contains a
int counter = 0;
String[] colors = ["black", "red", "abc"];
for (int i = 0; i < colors.length; i++)
{
    // "abcd".indexOf("xy") => -1
    // "abcd".indexOf("cd") => 2
    // "happy".index("appy") => 1
    if (colors[i].indexOf("a") != -1)
    {
        counter += 1;
    }
}
```

```java
// define a method
public static int count(String[] arr)
{
    int counter = 0;
    for (int i = 0; i < arr.length; i++)
    {
        if (arr[i].indexOf("a") != -1)
        {
            counter += 1;
        }
    }
    return counter;
}

// call / invoke / use method 
String[] colors = ["black", "red", "abc"];
count(colors);
```



```java
// define a method
public static int count(String[] arr)
{
    int counter = 0;
    for (int i = 0; i < arr.length; i++)
    {
        boolean hasA = arr[i].indexOf("a") != -1;
        if (hasA)
        {
            counter += 1;
        }
    }
    return counter;
}

// call / invoke / use method 
String[] colors = ["black", "red", "abc"];
count(colors);
```



```java
// define a method
public static int count(String[] arr)
{
    int counter = 0;
    for (int i = 0; i < arr.length; i++)
    {
        String item = arr[i]; // acess elment
        // check whether item contains "a"
        boolean hasA = item.indexOf("a") != -1;
        if (hasA)
        {
            counter += 1; 
        }
    }
    return counter;
}
```
这里用 counter 变量只是一个习惯，其实变量可以任意的，只要保持一致就行
```java
public static int count(String[] arr)
{
    int aaaaaaaaa = 0;
    for (int i = 0; i < arr.length; i++)
    {
        String item = arr[i]; // acess elment
        // check whether item contains "a"
        boolean hasA = item.indexOf("a") != -1;
        if (hasA)
        {
            aaaaaaaaa += 1; 
        }
    }
    return aaaaaaaaa;
}

// call / invoke / use method 
String[] colors = ["black", "red", "abc"];
count(colors);
```
叫做 `aaaaaaaaa` 也行只不过没有可读性 readability 和描述性 discriptive.
count how many elment equals to value, how many occurrence:


```java
public static int count(String[] arr, String value)
{
    int count = 0;
    for (int i = 0; i < arr.length; i++)
    {
        String item = arr[i]; // acess elment
        if (item.equals(value))
        {
            count += 1; 
        }
    }
    return count;
}

// call / invoke / use method 
String[] colors = ["black", "red", "abc"];
count(colors, "red");
```

All above method could be simplize using for each loop:

```java
public static int count(String[] arr, String value)
{
    int count = 0;
    for (String item : arr)
    {
        if (item.equals(value))
        {
            count += 1;
        }
    }
    return count;
}

// call / invoke / use method 
String[] colors = ["black", "red", "abc"];
count(colors, "red");
```

```java
public static int count(int[] arr, int value)
{
    int count = 0;
    for (int item : arr)
    {
        if (item == vallue))
        {
            count += 1;
        }
    }
    return count;
}

// call / invoke / use method 
String[] colors = ["black", "red", "abc"];
count(colors, "red");
```

Sometimes, elment of array could be objects, we some times count / search / find whether specific property of object comforts / meets specific condition(s);

```java
class Student
{
    private int age;

    // constructor of Student class
    public Student(int age)
    {
        this.age = age;
    }

    // getter / acessor method
    public int getAge()
    {
        return age;
    }
}
Student[] guys = new Student[10];
// some code add students to guys array

// search how many students are adult
// age > 18
public static int count(Student[] guys)
{
    int count = 0;
    for (Student item : guys)
    {
        int age = item.getAge();
        if (age >= 18)
        {
            count += 1;
        }
    }
    return count;
}
```
for readability and descriptive, chang to:
```java
public static int count(Student[] guys)
{
    int count = 0;
    for (Student student : guys)
    {
        int age = student.getAge();
        if (age >= 18)
        {
            count += 1;
        }
    }
    return count;
}
```

In a classroom, we have a lots of students, we could store objects of students in array or ArrayList
```java
class Classroom
{
    private Student[] students;

    public Classroom()
    {
        students = new new Student[50];
    }

    public int countAdults()
    {
        int count = 0;
        for (Student student : students)
        {
            int age = student.getAge();
            if (age >= 18)
            {
                count += 1;
            }
        }
        return count;
    }
}
```
We could also use ArrayList to store Student objects:
```java
class Classroom
{
    private ArrayList<String> students;

    public Classroom()
    {
        students = new ArrayList<>();
    }

    public int countAdults()
    {
        int count = 0;
        for (Student student : students)
        {
            int age = student.getAge();
            if (age >= 18)
            {
                count += 1;
            }
        }
        return count;
    }

    // regular / counted for loop version
    public int countAdults2()
    {
        int count = 0;
        for (int i = 0; i < students.size(); i++)
        {
            // access Student object
            Student student = students.get(i);
            // get age of specific student
            int age = student.getAge();
            if (age >= 18) // compare
            {
                count += 1;
            }
        }
        return count;
    }

}
```
### Local Max value

## Search
### Linear Search 

> Linear search also called brute force search

```java
int[] arr = {1, 2, 3};

// method name could be in or have or contains
public static boolean has(int[] arr, int value)
{
    for (int i = 0; i < arr.length; i++)
    {
        int element = arr[i];
        if (element == value)
        {
            return true;
        }
    }

    // if do not find element of arr equals
    // to value
    return false;
}

// call method 
has(arr, 2); // true
has(arr, 100); // false
```
using for each loop
```java
int[] arr = {1, 2, 3};

// method name could be in or have or contains
public static boolean has(int[] arr, int value)
{
    for (int element : arr)
    {
        if (element == value)
        {
            return true;
        }
    }

    // if do not find element of arr equals
    // to value
    return false;
}

// call method 
has(arr, 2); // true
has(arr, 100); // false
```

```java
// check wheter names array contains "zhangsan"

public static boolean contains(String[] names, String name)
{
    for (String element : names)
    {
        if (element.equails(name))
        {
            return true;
        }
    }

    // if do not find element of names equals
    // to name
    return false;
}

// call method
String[] names = {"zhangsan", "lisi", "wangwu"};
contains(names, "zhangsan"); // true
```
search ArrayList


```java
// check wheter names array contains "zhangsan"

public static boolean has(ArrayList<String> names, 
                          String name)
{
    for (String element : names)
    {
        if (element.equails(name))
        {
            return true;
        }
    }

    // if do not find element of names equals
    // to name
    return false;
}

// call method
ArrayList<String> names = new ArrayList<>();
// add some names
contains(names, "zhangsan"); // true
```
### Binaray Search

### sum

```java
public static double sum(double[] nums)
{
    double total = 0;
    for (double num : nums)
    {
        total += total;
    }
    return total;
}
```

```java
class Student
{
    private int score;

    // constructor of Student class
    public Student(int score)
    {
        this.score = score;
    }

    // getter / acessor method
    public int getScore()
    {
        return score;
    }
}

// cal total score of students
public static double sum(Student[] students)
{
    double total = 0;
    for (Student student : students)
    {
        total += student.getScore();
    }
    return total;
}

Student[] students = new Student[10];
// initialize objects of students array
// call sum method
sum(students);
```
### find duplicates elment
```java
public static boolean hasDuplicats(int[] arr)
{
    // 0 <= i < j < arr.length
    for (int i = 0; i < arr.length - 1; i++)
    {
        for (int j = i + 1; j < arr.length; j++)
        {
            if (arr[i] == arr[j])
            {
                return true;
            }
        }
    }
    return false;
}

int[] arr = {0, 1, 2, 3};
// arr[0] arr[1]
// arr[0] arr[2]
// arr[0] arr[3]
// arr[1] arr[2]
// arr[1] arr[3]
// arr[2] arr[3]
```
## Maximum and Minium
### Max
```java
public static int maxValue(int[] arr)
{
    int max = arr[0];
    for (int num : arr)
    {
        if (num > max)
        {
            max = num;
        }
    }
    return max;
}
```

```java
public static int maxValue(int[] arr)
{
    int max = arr[0];
    for (int index = 0; index < arr.length; index++)
    {
        int num = arr[index];
        if (num > max)
        {
            max = num;
        }
    }
    return max;
}
```
在负数数组中，查找最大值，我们可以假设 0 是最大值么？所以假设的最大值应该小于等于实际的最大值。我们有时候也把最大值设置为整数的最小值，对于整数类型来说。

```java
public static int maxValue(int[] arr)
{
    int max = Integer.MIN_VALUE;

    for (int index = 0; index < arr.length; index++)
    {
        int num = arr[index];
        if (num > max)
        {
            max = num;
        }
    }
    return max;
}
```
### Min

```java
public static int minValue(int[] arr)
{
    int min = arr[0];
    for (int index = 0; index < arr.length; index++)
    {
        int num = arr[index];
        if (num < min)
        {
            min = num;
        }
    }
    return min;
}
```

## run 

连续出现的内容.
```java
int[] arr = {1, 2, 2, 3, 3, 3};
```
有两个或者连续两个以上连续的元素就是 run。
### ascending and deascending

## Sort

### Bubble Sort
![动画图解](https://www.runoob.com/wp-content/uploads/2019/03/bubbleSort.gif)
```java {5}
public static void bubbleSort(int[] arr)
{
    for (int i = 0; i < arr.length; i++)
    {
        for (int j = 0; j < arr.length - 1; j++)
        {
            if (arr[j] > arr[j+1])
            {
                // swap two element
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}
```


```java {5}
public static void bubbleSort(int[] arr)
{
    for (int i = 0; i < arr.length; i++)
    {
        for (int j = 0; j < arr.length - i; j++)
        {
            if (arr[j] > arr[j+1])
            {
                // swap two element
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}
```

### Snsertion Sort
![](https://www.runoob.com/wp-content/uploads/2019/03/insertionSort.gif)
### Selection Sort
![](https://www.runoob.com/wp-content/uploads/2019/03/selectionSort.gif)
从第一个数字开始，选择后面最小的，和当前的数字交换，
```java
/**
 * find index of min value in array arr
 * from index start to arr.length, exclusive
 */
public static findMinIndex(int[] arr, int start)
{
    int min = arr[start];
    int minIndex = start;

    for (int i = start; i < arr.length; i++)
    {
        if (arr[i] < min)
        {
            min = arr[i];
            minIndex = i;
        }
    }
    return minIndex;
}

public static findMinIndex2(int[] arr, int start)
{
    int minIndex = start;

    for (int i = start; i < arr.length; i++)
    {
        if (arr[i] < arr[minIndex])
        {
            minIndex = i;
        }
    }
    return minIndex;
}

/**
 * swap element of array arr
 * precondtion: 0 <= index1 < arr.length
 * 0 <= index2 < arr.length
 */
public static swap(int[] arr, int index1, int index2)
{
    int temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

public static void selectionSort(int[] arr)
{
    for (int i = 0; i < arr.length; i++)
    {
        int minIndex = findMinIndex(arr, i);
        swap(i, minIndex);
    }
}
```
compose to one method
```java
public static void selectionSort(int[] arr)
{
    for (int i = 0; i < arr.length; i++)
    {
        // find position(index) of smallest elment
        int minIndex = i;
        for (int j = i + 1; j < arr.length; j++)
        {
            if (arr[j] < arr[minIndex])
            {
                minIndex = j;
            }
        }
        // swap current element and smallest element
        int temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}
```