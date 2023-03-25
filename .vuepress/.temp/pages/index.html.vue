<template><div><h1 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h1>
<nav class="table-of-contents"><ul></ul></nav>
<ul>
<li>
<p>data and types
hello</p>
<ul>
<li>int</li>
</ul>
</li>
<li>
<p>double</p>
</li>
<li>
<p>condtion</p>
</li>
<li>
<p>iteration</p>
</li>
<li>
<p>using object</p>
</li>
<li>
<p>writing class</p>
</li>
<li>
<p>array</p>
</li>
</ul>
<mermaid>
graph LR
A --> B
</mermaid>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span>
<span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Main</span>
<span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token class-name">String</span> letter<span class="token punctuation">,</span> <span class="token class-name">String</span> rule<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">int</span> index <span class="token operator">=</span> rule<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>letter<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">return</span> letter<span class="token punctuation">;</span> <span class="token comment">// if letter not exist in rule, return letter</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">!=</span> rule<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// letter not last element of rule</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// letter not the last elment</span>
      <span class="token keyword">return</span> rule<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> index<span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return char next to letter</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span> <span class="token comment">// if letter is last one return first elment</span>
      <span class="token keyword">return</span> rule<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// first element</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">changeKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> letter<span class="token punctuation">,</span> <span class="token class-name">String</span> key<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">int</span> index <span class="token operator">=</span> key<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>letter<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">return</span> letter<span class="token punctuation">;</span> <span class="token comment">// letter not containing in key</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// letter containing in key</span>
    <span class="token keyword">return</span> key<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">+</span> key<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">changeKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> letter<span class="token punctuation">,</span> <span class="token class-name">String</span> key<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">int</span> index <span class="token operator">=</span> key<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>letter<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">return</span> letter<span class="token punctuation">;</span> <span class="token comment">// letter not containing in key</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// letter containing in key</span>
    <span class="token class-name">String</span> result <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> key<span class="token punctuation">.</span>lenght<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!=</span> index<span class="token punctuation">)</span>
      <span class="token punctuation">{</span>
        result <span class="token operator">+=</span> key<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// alias</span>
        <span class="token comment">// result += key.charAt(i);      </span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">String</span> s1<span class="token punctuation">,</span> <span class="token class-name">String</span> s2<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">int</span> min <span class="token operator">=</span> s1<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">></span> s2<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      min <span class="token operator">=</span> s2<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> min<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token class-name">String</span> t1 <span class="token operator">=</span> s1<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">String</span> t2 <span class="token operator">=</span> s2<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token operator">!</span><span class="token punctuation">(</span>t1<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>t2<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">{</span>
        <span class="token keyword">return</span> s1<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-</span> s1<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> s1<span class="token punctuation">.</span>length <span class="token operator">-</span> s2<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">letterAndPatter</span><span class="token punctuation">(</span><span class="token class-name">String</span> letter<span class="token punctuation">,</span> <span class="token class-name">String</span> pattern<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pattern<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>letter<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// pattern.contains(patter)</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">return</span> letter<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">String</span> result <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> pattern<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      result <span class="token operator">+=</span> pattern<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">countEvens</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// counter</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
      <span class="token punctuation">{</span>
        count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> count<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token doc-comment comment">/**
   * count how may many value in arr
  */</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> value<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// counter</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> value<span class="token punctuation">)</span> <span class="token comment">// condition, pattern of find / search</span>
      <span class="token punctuation">{</span>
        count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> count<span class="token punctuation">;</span>
  
    
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token class-name">String</span> value<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// counter</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// compare content of String</span>
        <span class="token comment">// shoud use equals method</span>
      <span class="token punctuation">{</span>
        count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> count<span class="token punctuation">;</span>  
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printRun</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">int</span> run <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token comment">// &lt; length-1</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> arr<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// compare last element, current element</span>
      <span class="token punctuation">{</span>
        run <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">else</span>
      <span class="token punctuation">{</span>
        run <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"index: "</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">" run: "</span> <span class="token operator">+</span> run<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">has</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> value<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> num <span class="token operator">:</span> arr<span class="token punctuation">)</span> <span class="token comment">// for each loop, </span>
    <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">==</span> value<span class="token punctuation">)</span> <span class="token comment">// {1, 100, 2}</span>
      <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// else</span>
      <span class="token comment">// {</span>
      <span class="token comment">//   return false;</span>
      <span class="token comment">// }</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// no element of arr equals value</span>
  <span class="token punctuation">}</span>
  <span class="token doc-comment comment">/** cal sum of array using for each loop */</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> num <span class="token operator">:</span> arr<span class="token punctuation">)</span> <span class="token comment">// num represent each element</span>
    <span class="token punctuation">{</span>
      sum <span class="token operator">+=</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token doc-comment comment">/**cal sum of arr using regular for loop*/</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">sum2</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      sum <span class="token operator">+=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// arr[i] represent each element</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr2d<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> row <span class="token operator">:</span> arr2d<span class="token punctuation">)</span> <span class="token comment">// for each loop</span>
    <span class="token punctuation">{</span>
      sum <span class="token operator">+=</span> <span class="token function">sum</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">sum2</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> mat<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> row <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> row <span class="token operator">&lt;</span> mat<span class="token punctuation">.</span>length<span class="token punctuation">;</span> row<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> col <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> col <span class="token operator">&lt;</span> mat<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> col<span class="token operator">++</span><span class="token punctuation">)</span>
      <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> mat<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getColumn</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr2d<span class="token punctuation">,</span> <span class="token keyword">int</span> c<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">int</span> len <span class="token operator">=</span> arr2d<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> rst <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr2d<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      rst<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr2d<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> rst<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">crossLine</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> square<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> rst <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>square<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> square<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      rst<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> square<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> rst<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">crossLineRTLB</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> square<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> resultArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>square<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> square<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      resultArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> square<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>square<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> resultArray<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// rows * cols == arr.length</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">arrayToMatrixRowMajor</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> rows<span class="token punctuation">,</span> <span class="token keyword">int</span> cols<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>rows<span class="token punctuation">]</span><span class="token punctuation">[</span>cols<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> row <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> row <span class="token operator">&lt;</span> rows<span class="token punctuation">;</span> row<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> col <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> col <span class="token operator">&lt;</span> cols<span class="token punctuation">;</span> col<span class="token operator">++</span><span class="token punctuation">)</span>
      <span class="token punctuation">{</span>
        result<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>row <span class="token operator">*</span> cols <span class="token operator">+</span> col<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
        
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">arrayToMatrixColumnMajor</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> rows<span class="token punctuation">,</span> <span class="token keyword">int</span> cols<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>rows<span class="token punctuation">]</span><span class="token punctuation">[</span>cols<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> row <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> row <span class="token operator">&lt;</span> rows<span class="token punctuation">;</span> row<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> col <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> col <span class="token operator">&lt;</span> cols<span class="token punctuation">;</span> col<span class="token operator">++</span><span class="token punctuation">)</span>
      <span class="token punctuation">{</span>
        result<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>col <span class="token operator">*</span> rows <span class="token operator">+</span> row<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
        
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">snack</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> rows<span class="token punctuation">,</span> <span class="token keyword">int</span> cols<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> rst <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>rows<span class="token punctuation">]</span><span class="token punctuation">[</span>cols<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> row <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> row <span class="token operator">&lt;</span> rows<span class="token punctuation">;</span> row<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> col <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> col <span class="token operator">&lt;</span> cols<span class="token punctuation">;</span> col<span class="token operator">++</span><span class="token punctuation">)</span>
      <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
          rst<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>row <span class="token operator">*</span> cols <span class="token operator">+</span> col<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span>
        <span class="token punctuation">{</span>
          rst<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>row<span class="token operator">*</span>col <span class="token operator">+</span> cols <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> col<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>    
    <span class="token keyword">return</span> rst<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">rangeAverage</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> mat<span class="token punctuation">,</span> <span class="token keyword">int</span> rowStart<span class="token punctuation">,</span> <span class="token keyword">int</span> rowEnd<span class="token punctuation">,</span> <span class="token keyword">int</span> colStart<span class="token punctuation">,</span> <span class="token keyword">int</span> colEnd<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token punctuation">(</span>rowEnd <span class="token operator">-</span> rowStart <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>colEnd <span class="token operator">-</span> colStart <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> row <span class="token operator">=</span> rowStart<span class="token punctuation">;</span> row <span class="token operator">&lt;=</span> rowEnd<span class="token punctuation">;</span> row<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> col <span class="token operator">=</span> colStart<span class="token punctuation">;</span> col <span class="token operator">&lt;=</span> colEnd<span class="token punctuation">;</span> col<span class="token operator">++</span><span class="token punctuation">)</span>
      <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> mat<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">)</span> sum <span class="token operator">/</span> count<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">countEvens</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">count</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
    <span class="token function">printRun</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> mat <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                   <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                   <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 3 rows, 2 columns</span>
    <span class="token keyword">int</span> num <span class="token operator">=</span> mat<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>ArrayList</p>
</li>
<li>
<p>Inherence</p>
</li>
<li>
<p>Recursion</p>
</li>
</ul>
<blockquote>
<p>递归的题目可以递归树来解决。递归树是一个有 3 个分支的树，左子树表示递归调用之前的内容；中子树表示向下递归调用；右递归表示递归之后执行的部分。</p>
</blockquote>
</div></template>


