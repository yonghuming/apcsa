<template><div><h1 id="if-statement" tabindex="-1"><a class="header-anchor" href="#if-statement" aria-hidden="true">#</a> if statement</h1>
<!-- slide .left-->
<h3 id="condition" tabindex="-1"><a class="header-anchor" href="#condition" aria-hidden="true">#</a> condition</h3>
<h4 id="relation" tabindex="-1"><a class="header-anchor" href="#relation" aria-hidden="true">#</a> relation</h4>
<h4 id="logical" tabindex="-1"><a class="header-anchor" href="#logical" aria-hidden="true">#</a> logical</h4>
<ul>
<li>and &amp;&amp;</li>
<li>or ||</li>
<li>not !</li>
</ul>
<!-- slide .left-->
<h2 id="德摩根定律" tabindex="-1"><a class="header-anchor" href="#德摩根定律" aria-hidden="true">#</a> 德摩根定律</h2>
<blockquote>
<p>!(a &amp;&amp; b ) == !a || !b
!(a || b) == !a &amp;&amp; !b</p>
</blockquote>
<!-- slide .left-->
<h2 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> if</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> score <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">></span> <span class="token number">90</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"A"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-flow line-numbers-mode" data-ext="flow"><pre v-pre class="language-flow"><code>st<span class="token operator">=></span>operation<span class="token operator">:</span> Statement
cond<span class="token operator">=></span>condition<span class="token operator">:</span> Yes

io<span class="token operator">=></span>inputoutput<span class="token operator">:</span> print a
st<span class="token operator">-</span><span class="token operator">></span>cond
<span class="token function">cond</span><span class="token punctuation">(</span>yes<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span>io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>a statement or code block</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token punctuation">{</span>
    <span class="token comment">// statements</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>如果条件成立，就执行 if 里面的语句</li>
<li>如果条件不成立，啥也不执行</li>
</ul>
<!-- slide .left style="margin-top:0px;"-->
<h2 id="if-1" tabindex="-1"><a class="header-anchor" href="#if-1" aria-hidden="true">#</a> if</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> score <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">></span> <span class="token number">90</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"A"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token comment">// if statement compound statement</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">></span> <span class="token number">80</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"B"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token comment">// if statement</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">></span> <span class="token number">70</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"C"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">></span> <span class="token number">60</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"D"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-flow line-numbers-mode" data-ext="flow"><pre v-pre class="language-flow"><code>st<span class="token operator">=></span>operation<span class="token operator">:</span> Statement
e<span class="token operator">=></span>end<span class="token operator">:</span> end
cond<span class="token operator">=></span>condition<span class="token operator">:</span> Yes
cond80<span class="token operator">=></span>condition<span class="token operator">:</span> <span class="token operator">></span><span class="token number">80</span>
cond70<span class="token operator">=></span>condition<span class="token operator">:</span> <span class="token operator">></span><span class="token number">70</span>
cond60<span class="token operator">=></span>condition<span class="token operator">:</span> <span class="token operator">></span><span class="token number">60</span>


ioa<span class="token operator">=></span>inputoutput<span class="token operator">:</span> print a
iob<span class="token operator">=></span>inputoutput<span class="token operator">:</span> print b
ioc<span class="token operator">=></span>inputoutput<span class="token operator">:</span> print c
iod<span class="token operator">=></span>inputoutput<span class="token operator">:</span> print d

st<span class="token operator">-</span><span class="token operator">></span>cond
<span class="token function">cond</span><span class="token punctuation">(</span>yes<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span>ioa<span class="token operator">-</span><span class="token operator">></span><span class="token function">cond80</span><span class="token punctuation">(</span>yes<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span>iob<span class="token operator">-</span><span class="token operator">></span><span class="token function">cond70</span><span class="token punctuation">(</span>yes<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span>ioc<span class="token operator">-</span><span class="token operator">></span><span class="token function">cond60</span><span class="token punctuation">(</span>yes<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span>iod<span class="token operator">-</span><span class="token operator">></span>e
<span class="token function">cond</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span>cond80
<span class="token function">cond80</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span>cond70
<span class="token function">cond70</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span>cond60
<span class="token function">cond60</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span>e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>如果条件成立，就执行 if 里面的语句</li>
<li>如果条件不成立，啥也不执行</li>
</ul>
<!-- slide .left-->
<h2 id="if-2" tabindex="-1"><a class="header-anchor" href="#if-2" aria-hidden="true">#</a> if</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> score <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">></span> <span class="token number">90</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">>=</span> <span class="token number">95</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"A+"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token comment">// if statement</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">&lt;</span> <span class="token number">95</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"A"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-flow line-numbers-mode" data-ext="flow"><pre v-pre class="language-flow"><code>st<span class="token operator">=></span>operation<span class="token operator">:</span> Statement
e<span class="token operator">=></span>end
cond<span class="token operator">=></span>condition<span class="token operator">:</span> <span class="token operator">></span><span class="token number">90</span>
cond95<span class="token operator">=></span>condition<span class="token operator">:</span> <span class="token operator">>=</span> <span class="token number">95</span>
conda<span class="token operator">=></span>condition<span class="token operator">:</span> <span class="token operator">&lt;</span> <span class="token number">95</span>
d<span class="token operator">=></span>operation<span class="token operator">:</span> 啥也不是为了排版
 
ioaplus<span class="token operator">=></span>inputoutput<span class="token operator">:</span> print a<span class="token operator">+</span>
io<span class="token operator">=></span>inputoutput<span class="token operator">:</span> print a

st<span class="token operator">-</span><span class="token operator">></span>cond
<span class="token function">cond</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span>d<span class="token operator">-</span><span class="token operator">></span>e
<span class="token function">cond</span><span class="token punctuation">(</span>yes<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">cond95</span><span class="token punctuation">(</span>yes<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span>ioaplus<span class="token operator">-</span><span class="token operator">></span><span class="token function">conda</span><span class="token punctuation">(</span>yes<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span>io<span class="token operator">-</span><span class="token operator">></span>e
<span class="token function">cond95</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span>conda
<span class="token function">conda</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span>e

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>嵌套的 if 规则 if 相同</li>
<li>如果条件成立就执行</li>
</ul>
<!-- slide -->
<h2 id="增强运算符" tabindex="-1"><a class="header-anchor" href="#增强运算符" aria-hidden="true">#</a> 增强运算符</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
a <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// a = a + 2;</span>
a <span class="token operator">/=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// a = a / 1;</span>
a <span class="token operator">%=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// a = a % 10;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- slide -->
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">double</span> a<span class="token punctuation">;</span> 

<span class="token comment">// a = 2; </span>
<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    b <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    b <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- slide .left -->
<h3 id="compound-relation-expression" tabindex="-1"><a class="header-anchor" href="#compound-relation-expression" aria-hidden="true">#</a> compound relation expression</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">></span> <span class="token number">90</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"A"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">></span> <span class="token number">80</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">&lt;=</span> <span class="token number">90</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"B"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">></span> <span class="token number">70</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">&lt;=</span> <span class="token number">80</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"C"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">></span> <span class="token number">60</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">&lt;=</span> <span class="token number">70</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"D"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- slide .left -->
<h3 id="else-if" tabindex="-1"><a class="header-anchor" href="#else-if" aria-hidden="true">#</a> else if</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">></span> <span class="token number">90</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"A"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">></span> <span class="token number">80</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">&lt;=</span> <span class="token number">90</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"B"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">></span> <span class="token number">70</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">&lt;=</span> <span class="token number">80</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"C"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">></span> <span class="token number">60</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">&lt;=</span> <span class="token number">70</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"D"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- slide .left -->
<h3 id="else-if-1" tabindex="-1"><a class="header-anchor" href="#else-if-1" aria-hidden="true">#</a> else if</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">></span> <span class="token number">90</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"A"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">></span> <span class="token number">80</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"B"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">></span> <span class="token number">70</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"C"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">></span> <span class="token number">60</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"D"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- slide .left -->
<h3 id="else-if-else" tabindex="-1"><a class="header-anchor" href="#else-if-else" aria-hidden="true">#</a> else if else</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">></span> <span class="token number">90</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"A"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">></span> <span class="token number">80</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"B"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">></span> <span class="token number">70</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"C"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">else</span>
<span class="token punctuation">{</span>
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"F"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- slide .left -->
<h3 id="else-if-else-1" tabindex="-1"><a class="header-anchor" href="#else-if-else-1" aria-hidden="true">#</a> else if else</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">></span> <span class="token number">80</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"B"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// output b</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">></span> <span class="token number">90</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"A"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">></span> <span class="token number">70</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"C"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">else</span>
<span class="token punctuation">{</span>
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"F"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- slide .left-->
<p>if without brace</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">></span> <span class="token number">3</span><span class="token punctuation">)</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a statement</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"hi"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// omit result of a > 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>if condition is true, excute a statment or a  code block</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">21</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">></span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>   <span class="token comment">// code block as a statement</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"hi"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- slide -->
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> max<span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">></span> b <span class="token operator">&amp;&amp;</span> b <span class="token operator">></span> c<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    max <span class="token operator">=</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">></span> a <span class="token operator">&amp;&amp;</span> b <span class="token operator">></span> c<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    max <span class="token operator">=</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span>
<span class="token punctuation">{</span>
    max <span class="token operator">=</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ss
hello
world</p>
</div></template>


