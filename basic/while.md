# while loop

<!-- slide .left -->
### while
如果条件成立，执行；
直到条件不成立
```java
int i = 0; // loop variable

while (i < 5)
{
    System.out.println(i); 
    i += 1; // update loop variable
}
```
<!-- slide .left -->
如何输出 43210？
* 循环的初始值是多少
* 终止值
* 循环变量应该怎么变化？
<!-- slide .left -->
如何输出 43210？
```java
int i = 4;
while (i >= 0) // i > -1
{
    System.out.print(i);
    i += 1;
}
```

<!-- slide .left -->
### 无限循环
```java
int a = 0;

while (a < 5)
{
    System.out.println(a);
}
```
循环变量没有变化

```java
int a = 0;

while (a < 5)
{
    System.out.println(a);
    a -= 1; // i = i - 1
}
```
循环变量虽然变化了，但是不能使得条件不成立

<!-- slide .left -->
### 循环不执行
循环变量不满足条吗
```java
int a = 0;

while (a > 5)
{
    System.out.println(a);
}
```

<!-- slide .left -->
if 语句筛选失败
```java
int x = 0;
while (x < 20)
{
    if (x % 2 == 1) // % 求余数 == 判断是否相等
    {
        System.out.println(x);
    }
    x += 2; // x = x + 2
}
```

<!-- slide .left -->
## hailstone
* if even, divided by 2
* if odd, multiply 3 and plus 1

```java
// while 是条件循环
int n = 3;

while (n != 1) // != not equal
{
    System.out.println(n);
    if (n % 2 == 0) // 5 reminder / modular
    {
        n = n / 2;
    }
    else
    {
        n = n * 3 + 1;
    }
}

```

<!-- slide .left -->
输出 0 到 100,不包含 100 之间所有的偶数
```java
int n = 0;

while (n < 100)
{
    if (n % 2 == 0) // % remindler
    {
        System.out.println(n);
    }

    n += 1;
}
```
<!-- slide .left -->
输出 0 到 100,不包含 100 之间所有的偶数
步长为 2
```java
int n = 0;

while (n < 100)
{
  
    System.out.println(n);
    
    n += 2;
}
```
<!-- slide .left -->
输出 0 到 100,不包含 100 之间所有的偶数或者 3 的倍数
步长为 2
```java
int n = 0;

while (n < 100)
{
    if (n % 2 == 0 || n % 3 == 0)
    {
        System.out.println(n);
    }
    n += 1;
}
```

<!-- slide .left -->
对于整数 n（假设是 100），输出所有 n 的因数，不包含 n。
```java
int n = 100;
```
* 输入：要输出所有因数的那个整数
* 输出：n 的所有因数

<!-- slide .left -->
对于整数 n（假设是 100），输出所有 n 的因数，不包含 n。
```java
int n = 100;

int i = 1;

while (i < n)
{
    if (n % i == 0)
    {
        System.out.println(i);
    }

    i += 1;
}
```
<!-- slide .left -->
对于整数 n（假设是 100），输出所有 n 的因数之和，不包含 n 自身。
```java
int n = 100;
int factorsSum = 0;
int i = 1;

while (i < n)
{
    if (n % i == 0)
    {
        factorsSum += i; // factorsSum = factorsSum + i
    }
    i += 1;
}

// output sum of facor sum ecclude n itself
System.out.println(factorSum);
```

<!-- slide .left -->
### Perfect Number
<p style="font-size:24px">
如果一个数字，除了自身之外，所有因数的和等于自己，那么这个数字，就是完全数。
对于整数 n（假设是 100），输出所有 n 的因数之和，不包含 n 自身。
</p>

```java
int n = 100;
int factorsSum = 0;
int i = 1;

// processing
while (i < n)
{
    if (n % i == 0)
    {
        factorsSum += i;
    }
    i += 1;
}

// output
if (factorsSum == n)
{
    System.out.println("is a perfect number");
    
}
else
{
    System.out.println("not a perfect number");
}
```
<!-- slide .left-->

### 水仙花数
<p style="font-size:24px">
如果一个数字，每个数位的三次方之和等于自身，就是水仙花数，比如 153

</p>
$1^3 + 5^3 + 3^3 = 153$

```java
int n = 153; // 已经确定是 3 位数
int one = n % 10;
int ten = n / 10 % 10;
int hun = n / 100; // n / 10 / 10 % 10

int cubeSum = one * one * one 
cubeSum += ten * ten * ten 
cubeSum += hun * hun * hun;

if (cubeSum == n)
{
    // 是水仙花数
}

```
<!-- slide .left -->

### 水仙花数
<p style="font-size:24px">
如果一个数字，每个数位的三次方之和等于自身，就是水仙花数，比如 153879
</p>
> 如果整数的位数是任意的，如何得到每一位？

```java
int n = 12345; // 不知道 n 的位数
// 不知道循环几次，需要条件循环
int cubeSum = 0;
while (n != 0)
{
    int digit = n % 10;
    cubeSum += digit * digit * digit;
    n = n / 10;
}
System.out.println(cubeSum);
// check equality
```

<!-- slide .left -->

### 水仙花数
<p style="font-size:24px">
如果一个数字，每个数位的三次方之和等于自身，就是水仙花数，比如 153879
</p>
> 如果整数的位数是任意的，如何得到每一位？

```java
int n = 12345; // 不知道 n 的位数
// 不知道循环几次，需要条件循环
int cubeSum = 0;
while (n != 0)
{
    int digit = n % 10;
    cubeSum += Math.pow(digit, 3); // digit 的 3 次方
    n = n / 10;
}
System.out.println(cubeSum);
// check equality
```
$a_{n-1}a_{n-2}...a_2a_1a_0$

<!-- slide .left -->
### ==substring==
> String substring(int from, int to)

给定一个字符串，输出字符串的每一位。
输入：abcd ==substring==
输出：
a
b
c
d
输入: hello
h
e
l
l
0
> String substring(int from, int to)

<!-- slide .left -->
如何获取字符串 "hello" 的第二位？
```java
"hello".substring(1, 1+1);
```
遍历字符串 while 循环
```java
int i = 0; // loop variable
String s = "hello";
while (i < s.length())
{
    System.out.println(s.substring(i, i+1));
    i += 1;
}
```

<!-- slide .left -->
给定一个字符串，abcdef，返回字符串 aabbccddef

输入: "hello"
输出: "hheelllloo"

* 首先跟依次访问字符串的每个字符是类似的
* 不同点每个字符重复了 2 次

```java
int i = 0; // loop variable
String s = "hello";
while (i < s.length())
{
    // print 不换行
    System.out.print(s.substring(i, i+1)+s.substring(i, i+1));
    i += 1;
}
System.out.println();
```
<!-- slide .left -->
第二种思路，先得到字符串，然后再输出
```java
int i = 0; // loop variable
String s = "hello";
String rst = "";

while (i < s.length())
{
    // print 不换行
    rst = rst + s.substring(i, i + 1);
    rst = rst + s.substring(i, i + 1);
    i += 1;
}
System.out.println(rst);
```
> 如果是给定一个字符串 abcde 和整数 n, 输出 n 个 a，n 个 b，n 个 c。
<!-- slide -->
```java
int i = 0; // loop variable
String s = "hello";
String rst = "";

while (i < s.length())
{
    // print 不换行
    String tmp = s.substring(i, i + 1);
    rst = rst + tmp;
    rst = rst + tmp;
    i += 1;
}
System.out.println(rst);
```
<!-- slide -->
```java
int i = 0; // loop variable
String s = "hello";
String rst = "";

while (i < s.length())
{
    // print 不换行
    char tmp = s.charAt(i);
    rst = rst + tmp;
    rst = rst + tmp;
    i += 1;
}
System.out.println(rst);
```

<!-- slide -->
```java
int i = 0; // loop variable
String s = "hello";
String rst = "";

while (i < s.length())
{
    char tmp = s.charAt(i);

    int times = 0;

    while (times < 10)
    {
        rst = rst + tmp;
        times += 1;
    }

    i += 1;
}
System.out.println(rst);
```

<!-- slide -->
```java
int i = 0; // loop variable
String s = "hello";
String rst = "";
int times = 0;

while (i < s.length())
{
    char tmp = s.charAt(i);
    times = 0; // 这里不要忘记重新初始化内层的循环变量
    while (times < 10)
    {
        rst = rst + tmp;
        times += 1;
    }
    System.out.println(times);

    i += 1;
}
System.out.println(rst);
```

<!-- slide -->
```java
int i = 0; // loop variable
        String s = "hello";
        String rst = "";
        while (i < s.length())
        {
            rst += s.charAt(i);
            rst += s.charAt(i);

            i += 1;
        }
        System.out.println(rst);
```
<!-- slide -->
```java
int low = 0, high = 10;
while (low != high)
{
    low += 1;
    high -= 2;
}
System.out.println("low: " + low + " high: " + high);
```

<!-- slide .left -->
### 逆序输出字符串
给定字符串，把字符串逆序输出（提示：用 while 循环）。
#### 分析
* 先输出的字符串的最后一个
* 然后倒数第二
* 从字符串的最后一个索引到 0
* 字符最后一个元素的索引是什么？
* 应该怎么取
<!-- slide .left -->
给定字符串，把字符串逆序输出（提示：用 while 循环）。
```java
String s = "world";
// last 是最后一个字符的索引
int last = s.length() - 1;

String rst = ""; // result 用来表示结果

while (last >= 0)
{
    // 倒着把字符添加到 rst 末尾
    rst += s.charAt(last);
    last -= 1;
}
System.out.println(rst);
```

<!-- slide .left -->
给定字符串，把字符串逆序输出（提示：用 while 循环）。
```java
String s = "world";
// last 表示最后一个字符索引
int last = s.length() - 1;

while (last >= 0)
{
    // print 不换行输出，结尾没有 \n
    System.out.print(s.charAt(last));
    last -= 1;
}
System.out.println();
```

<!-- slide -->
```java
String s = "world";
int index = 0;

String rst = ""; // result 用来表示结果

while (index < s.length())
{
    // 倒着把字符添加到 rst 末尾
    //  h e l l o
    // -5-4-3-2-1
    rst += s.charAt(s.length() - 1 - index);
    index += 1;
}
System.out.println(rst);
```

<!-- slide .left -->
### 单词统计
nice to meet you .........you area very nice;
编写程序统计其中 you 出现的次数。
```java
String s = "hello you hello you you are very neice youyouyou";
        int index = 0;
        String you = "you";
        int count = 0;
        // 注意为什么是 s.length() - you.length() + 1
        // hello world
        //         you
        while (index < s.length() - you.length() + 1)
        {
            String sub = s.substring(index, index + you.length());
            if (sub.equals(you))
            {
                count += 1;
            }
            index += 1;
        }
        System.out.println(count);
```
