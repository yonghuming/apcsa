# if statement

<!-- slide .left-->
### condition 
#### relation

#### logical
* and && 
* or ||
* not !

<!-- slide .left-->
## 德摩根定律
> !(a && b ) == !a || !b
!(a || b) == !a && !b
<!-- slide .left-->
## if
```java
int score = 99;

if (score > 90)
{
    System.out.println("A");
}
```

```flow
st=>operation: Statement
cond=>condition: Yes

io=>inputoutput: print a
st->cond
cond(yes)->io
```

* a statement or code block
```java
{
    // statements
}
```
* 如果条件成立，就执行 if 里面的语句
* 如果条件不成立，啥也不执行


<!-- slide .left style="margin-top:0px;"-->

## if
```java
int score = 99;

if (score > 90)
{
    System.out.println("A");
} // if statement compound statement
if (score > 80)
{
    System.out.println("B");
} // if statement
if (score > 70)
{
    System.out.println("C");
}
if (score > 60)
{
    System.out.println("D");
}
// end

```

```flow
st=>operation: Statement
e=>end: end
cond=>condition: Yes
cond80=>condition: >80
cond70=>condition: >70
cond60=>condition: >60


ioa=>inputoutput: print a
iob=>inputoutput: print b
ioc=>inputoutput: print c
iod=>inputoutput: print d

st->cond
cond(yes)->ioa->cond80(yes)->iob->cond70(yes)->ioc->cond60(yes)->iod->e
cond(no)->cond80
cond80(no)->cond70
cond70(no)->cond60
cond60(no)->e
```


* 如果条件成立，就执行 if 里面的语句
* 如果条件不成立，啥也不执行




<!-- slide .left-->
## if
```java
int score = 99;

if (score > 90)
{
    if (score >= 95)
    {
        System.out.println("A+");
    } // if statement
    if (score < 95)
    {
        System.out.println("A");
    }
}
// end
```

```flow
st=>operation: Statement
e=>end
cond=>condition: >90
cond95=>condition: >= 95
conda=>condition: < 95
d=>operation: 啥也不是为了排版
 
ioaplus=>inputoutput: print a+
io=>inputoutput: print a

st->cond
cond(no)->d->e
cond(yes)->cond95(yes)->ioaplus->conda(yes)->io->e
cond95(no)->conda
conda(no)->e

```


* 嵌套的 if 规则 if 相同
* 如果条件成立就执行
<!-- slide -->
## 增强运算符

```java
int a = 2;
a += 2; // a = a + 2;
a /= 1; // a = a / 1;
a %= 10; // a = a % 10;
```

<!-- slide -->
```java
double a; 

// a = 2; 
int b = 2;
if (b > 0)
{
    b = 3;
}
else if (b < 0)
{
    b = 4;
}
```

<!-- slide .left -->
### compound relation expression
```java
int a = 99;

if (a > 90)
{
    System.out.println("A");
}
if (a > 80 && a <= 90)
{
    System.out.println("B");
}
if (a > 70 && a <= 80)
{
    System.out.println("C");
}
if (a > 60 && a <= 70)
{
    System.out.println("D");
}
```



<!-- slide .left -->
### else if
```java
int a = 99;

if (a > 90)
{
    System.out.println("A");
}
else if (a > 80 && a <= 90)
{
    System.out.println("B");
}
else if (a > 70 && a <= 80)
{
    System.out.println("C");
}
else if (a > 60 && a <= 70)
{
    System.out.println("D");
}
```


<!-- slide .left -->
### else if
```java
int a = 99;

if (a > 90)
{
    System.out.println("A");
}
else if (a > 80)
{
    System.out.println("B");
}
else if (a > 70)
{
    System.out.println("C");
}
else if (a > 60)
{
    System.out.println("D");
}
```

<!-- slide .left -->
### else if else
```java
int a = 99;

if (a > 90)
{
    System.out.println("A");
}
else if (a > 80)
{
    System.out.println("B");
}
else if (a > 70)
{
    System.out.println("C");
}

else
{
     System.out.println("F");
}
```
<!-- slide .left -->
### else if else
```java
int a = 99;

if (a > 80)
{
    System.out.println("B"); // output b
}
else if (a > 90)
{
    System.out.println("A");
}
else if (a > 70)
{
    System.out.println("C");
}

else
{
     System.out.println("F");
}
```
<!-- slide .left-->
if without brace
```java
int a = 2;
if (a > 3)
   System.out.println("hello"); // a statement
   System.out.println("hi"); // omit result of a > 3
```
if condition is true, excute a statment or a  code block
```java
int a = 21;
if (a > 3)
{   // code block as a statement
    System.out.println("hello");
    System.out.println("hi");
}
```
<!-- slide -->
```java
int a, b, c, max;

if (a > b && b > c)
{
    max = a;
}
else if (b > a && b > c)
{
    max = b;
}
else
{
    max = c;
}
```
ss
    hello 
    world