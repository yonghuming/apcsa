import{_ as n,p as s,q as a,a1 as p}from"./framework-5866ffd3.js";const t={},e=p(`<h1 id="_2020" tabindex="-1"><a class="header-anchor" href="#_2020" aria-hidden="true">#</a> 2020</h1><h2 id="_1-hailsoten" tabindex="-1"><a class="header-anchor" href="#_1-hailsoten" aria-hidden="true">#</a> 1 Hailsoten</h2><h3 id="_1-a" tabindex="-1"><a class="header-anchor" href="#_1-a" aria-hidden="true">#</a> 1.a</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">hailstoneLength</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">!=</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            n <span class="token operator">=</span> n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            n <span class="token operator">=</span> <span class="token number">3</span> <span class="token operator">*</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        len <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> len<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-b" tabindex="-1"><a class="header-anchor" href="#_1-b" aria-hidden="true">#</a> 1.b</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isLongSeq</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">hailstoneLength</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">&gt;</span> n<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-c" tabindex="-1"><a class="header-anchor" href="#_1-c" aria-hidden="true">#</a> 1.c</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">progLong</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isLongSeq</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">)</span> count <span class="token operator">/</span> n<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="完整代码" tabindex="-1"><a class="header-anchor" href="#完整代码" aria-hidden="true">#</a> 完整代码</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Hailstone</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">hailstoneLength</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">!=</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                n <span class="token operator">=</span> n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span>
            <span class="token punctuation">{</span>
                n <span class="token operator">=</span> <span class="token number">3</span> <span class="token operator">*</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            len <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> len<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isLongSeq</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">hailstoneLength</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">&gt;</span> n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">progLong</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isLongSeq</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">)</span> count <span class="token operator">/</span> n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FRQ202001Hailstone</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Hailstone</span><span class="token punctuation">.</span><span class="token function">progLong</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>output</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-gamespinner" tabindex="-1"><a class="header-anchor" href="#_2-gamespinner" aria-hidden="true">#</a> 2 GameSpinner</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">GameSpinner</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> sector<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> run<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> num<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> lastNum<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">GameSpinner</span><span class="token punctuation">(</span><span class="token keyword">int</span> sector<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sector <span class="token operator">=</span> sector<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">currentRun</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> run<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">spin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        lastNum <span class="token operator">=</span> num<span class="token punctuation">;</span>
        num <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> sector<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">==</span> lastNum<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            run <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            run <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="完整代码-1" tabindex="-1"><a class="header-anchor" href="#完整代码-1" aria-hidden="true">#</a> 完整代码</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">GameSpinner</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> sector<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> run<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> num<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> lastNum<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">GameSpinner</span><span class="token punctuation">(</span><span class="token keyword">int</span> sector<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sector <span class="token operator">=</span> sector<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">currentRun</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> run<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">spin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        lastNum <span class="token operator">=</span> num<span class="token punctuation">;</span>
        num <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> sector<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">==</span> lastNum<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            run <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            run <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FRQ202002GameSpinnerWhile</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">GameSpinner</span> spinner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GameSpinner</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">12</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;run:  &quot;</span> <span class="token operator">+</span> spinner<span class="token punctuation">.</span><span class="token function">currentRun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            spinner<span class="token punctuation">.</span><span class="token function">spin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;num: &quot;</span> <span class="token operator">+</span> spinner<span class="token punctuation">.</span><span class="token function">getNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3" tabindex="-1"><a class="header-anchor" href="#_3" aria-hidden="true">#</a> 3</h2><h3 id="_3-a" tabindex="-1"><a class="header-anchor" href="#_3-a" aria-hidden="true">#</a> 3.a</h3><h3 id="_3-b" tabindex="-1"><a class="header-anchor" href="#_3-b" aria-hidden="true">#</a> 3.b</h3><h2 id="_4" tabindex="-1"><a class="header-anchor" href="#_4" aria-hidden="true">#</a> 4</h2><h3 id="_4-a-theater" tabindex="-1"><a class="header-anchor" href="#_4-a-theater" aria-hidden="true">#</a> 4.a Theater</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Theater</span><span class="token punctuation">(</span><span class="token keyword">int</span> seatsPerRow<span class="token punctuation">,</span> <span class="token keyword">int</span> tier1Rows<span class="token punctuation">,</span> <span class="token keyword">int</span> tier2Rows<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    theaterSeats <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Seat</span><span class="token punctuation">[</span>tier1Rows <span class="token operator">+</span> tier2Rows<span class="token punctuation">]</span><span class="token punctuation">[</span>seatsPerRow<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> row <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> row <span class="token operator">&lt;</span> theaterSeats<span class="token punctuation">.</span>length<span class="token punctuation">;</span> row<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> col <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> col <span class="token operator">&lt;</span> seatsPerRow<span class="token punctuation">;</span> col<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">&lt;</span> tier1Rows<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                theaterSeats<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Seat</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span>
            <span class="token punctuation">{</span>
                theaterSeats<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Seat</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-b" tabindex="-1"><a class="header-anchor" href="#_4-b" aria-hidden="true">#</a> 4.b</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">reassignSeat</span><span class="token punctuation">(</span><span class="token keyword">int</span> fromRow<span class="token punctuation">,</span> <span class="token keyword">int</span> toRow<span class="token punctuation">,</span> <span class="token keyword">int</span> fromCol<span class="token punctuation">,</span> <span class="token keyword">int</span> toCol<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">Seat</span> toSeat <span class="token operator">=</span> theaterSeats<span class="token punctuation">[</span>toRow<span class="token punctuation">]</span><span class="token punctuation">[</span>fromCol<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>toSeat<span class="token punctuation">.</span><span class="token function">isAvailable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">Seat</span> fromSeat <span class="token operator">=</span> theaterSeats<span class="token punctuation">[</span>fromCol<span class="token punctuation">]</span><span class="token punctuation">[</span>toCol<span class="token punctuation">]</span><span class="token punctuation">;</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span>fromSeat<span class="token punctuation">.</span><span class="token function">getTier</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> toSeat<span class="token punctuation">.</span><span class="token function">getTier</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    fromSeat<span class="token punctuation">.</span><span class="token function">setAvailablility</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    toSeat<span class="token punctuation">.</span><span class="token function">setAvailablility</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="完整代码-2" tabindex="-1"><a class="header-anchor" href="#完整代码-2" aria-hidden="true">#</a> 完整代码</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Seat</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> available<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> tier<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Seat</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> available<span class="token punctuation">,</span> <span class="token keyword">int</span> tier<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>available <span class="token operator">=</span> available<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tier <span class="token operator">=</span> tier<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isAvailable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> available<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getTier</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> tier<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAvailablility</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> available<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>available <span class="token operator">=</span> available<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Theater</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Seat</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> theaterSeats<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Theater</span><span class="token punctuation">(</span><span class="token keyword">int</span> seatsPerRow<span class="token punctuation">,</span> <span class="token keyword">int</span> tier1Rows<span class="token punctuation">,</span> <span class="token keyword">int</span> tier2Rows<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        theaterSeats <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Seat</span><span class="token punctuation">[</span>tier1Rows <span class="token operator">+</span> tier2Rows<span class="token punctuation">]</span><span class="token punctuation">[</span>seatsPerRow<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> row <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> row <span class="token operator">&lt;</span> theaterSeats<span class="token punctuation">.</span>length<span class="token punctuation">;</span> row<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> col <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> col <span class="token operator">&lt;</span> seatsPerRow<span class="token punctuation">;</span> col<span class="token operator">++</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">&lt;</span> tier1Rows<span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    theaterSeats<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Seat</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">else</span>
                <span class="token punctuation">{</span>
                    theaterSeats<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Seat</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">reassignSeat</span><span class="token punctuation">(</span><span class="token keyword">int</span> fromRow<span class="token punctuation">,</span> <span class="token keyword">int</span> toRow<span class="token punctuation">,</span> <span class="token keyword">int</span> fromCol<span class="token punctuation">,</span> <span class="token keyword">int</span> toCol<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">Seat</span> toSeat <span class="token operator">=</span> theaterSeats<span class="token punctuation">[</span>toRow<span class="token punctuation">]</span><span class="token punctuation">[</span>fromCol<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>toSeat<span class="token punctuation">.</span><span class="token function">isAvailable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Seat</span> fromSeat <span class="token operator">=</span> theaterSeats<span class="token punctuation">[</span>fromCol<span class="token punctuation">]</span><span class="token punctuation">[</span>toCol<span class="token punctuation">]</span><span class="token punctuation">;</span>
        
        <span class="token keyword">if</span> <span class="token punctuation">(</span>fromSeat<span class="token punctuation">.</span><span class="token function">getTier</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> toSeat<span class="token punctuation">.</span><span class="token function">getTier</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        fromSeat<span class="token punctuation">.</span><span class="token function">setAvailablility</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        toSeat<span class="token punctuation">.</span><span class="token function">setAvailablility</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FRQ202004TheaterSeats2DArray</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","2020.html.vue"]]);export{k as default};
