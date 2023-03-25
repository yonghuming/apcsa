<template><div><h2 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> array</h2>
<blockquote>
<p>Array is a list / collection of values / objects
EltType[] arrayName = EltType[numOfElement];</p>
</blockquote>
<h3 id="declare-array" tabindex="-1"><a class="header-anchor" href="#declare-array" aria-hidden="true">#</a> declare array</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ages <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// an array initialize with 3 integer value</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// default value is 0, have 10 elements</span>
<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> colors <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token string">"green"</span><span class="token punctuation">,</span> <span class="token string">"blue"</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// </span>
<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> shopList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// defaut value: null</span>
<span class="token keyword">double</span><span class="token punctuation">[</span><span class="token punctuation">]</span> scores <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">double</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// defaut value: 0.0</span>
<span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span> isParty <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// defaut value: false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- slide .left-->
<h2 id="null" tabindex="-1"><a class="header-anchor" href="#null" aria-hidden="true">#</a> null</h2>
<blockquote>
<p>null is nothing, 不能访问 null 的方法</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> colors <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// colors[1] = "red"; </span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>colors<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>==java.lang.NullPointerException==</p>
</blockquote>
<!-- slide .left-->
<h2 id="visit-element-of-an-array" tabindex="-1"><a class="header-anchor" href="#visit-element-of-an-array" aria-hidden="true">#</a> visit element of an array</h2>
<blockquote>
<p>[] is array / list element visiting operator</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> colors <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token string">"green"</span><span class="token punctuation">,</span> <span class="token string">"blue"</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// </span>
<span class="token class-name">String</span> red <span class="token operator">=</span> colors<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// index of "red" is zero</span>
<span class="token class-name">String</span> c <span class="token operator">=</span> colors<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// blue</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- slide .left-->
<h2 id="length-of-array" tabindex="-1"><a class="header-anchor" href="#length-of-array" aria-hidden="true">#</a> length of array</h2>
<blockquote>
<p>arr.length property not a method like string.length()</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> colors <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token string">"green"</span><span class="token punctuation">,</span> <span class="token string">"blue"</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// </span>
<span class="token keyword">int</span> numOfColors <span class="token operator">=</span> colors<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// => 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>ArrayIndexOutOfBound</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>colors<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// Runtime Exception</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- slide .left-->
<h2 id="practice" tabindex="-1"><a class="header-anchor" href="#practice" aria-hidden="true">#</a> practice</h2>
<p>Given an array of ints, return true if 6 appears as ==either the first or last== <code v-pre>element</code> in the array. The array will be length 1 or more.</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token function">firstLast6</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span> → <span class="token boolean">true</span>
<span class="token function">firstLast6</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> → <span class="token boolean">true</span>
<span class="token function">firstLast6</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> → <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Solution</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> first <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// int last  = arr[arr.length]; // ArrayIndexOutOfBound</span>
<span class="token keyword">int</span> last  <span class="token operator">=</span> arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> 

<span class="token keyword">boolean</span> rst <span class="token operator">=</span> first <span class="token operator">==</span> <span class="token number">6</span> <span class="token operator">||</span> last <span class="token operator">==</span> <span class="token number">6</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- slide .left-->
<h2 id="traverse-array" tabindex="-1"><a class="header-anchor" href="#traverse-array" aria-hidden="true">#</a> traverse array</h2>
<blockquote>
<p>visit each element of array using loop.</p>
</blockquote>
</div></template>


