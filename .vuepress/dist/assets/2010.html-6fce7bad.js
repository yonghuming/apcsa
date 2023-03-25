import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const p={},t=e(`<h1 id="_2010" tabindex="-1"><a class="header-anchor" href="#_2010" aria-hidden="true">#</a> 2010</h1><h2 id="_1" tabindex="-1"><a class="header-anchor" href="#_1" aria-hidden="true">#</a> 1</h2><h3 id="_1-a" tabindex="-1"><a class="header-anchor" href="#_1-a" aria-hidden="true">#</a> 1.a</h3><h3 id="_1-b" tabindex="-1"><a class="header-anchor" href="#_1-b" aria-hidden="true">#</a> 1.b</h3><h2 id="_2-apline" tabindex="-1"><a class="header-anchor" href="#_2-apline" aria-hidden="true">#</a> 2 APLine</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">APLine</span>
<span class="token punctuation">{</span>
     <span class="token keyword">private</span> <span class="token keyword">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">;</span>
     <span class="token keyword">public</span> <span class="token class-name">APLine</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">,</span> <span class="token keyword">int</span> c<span class="token punctuation">)</span>
     <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> a<span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>b <span class="token operator">=</span> b<span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>c <span class="token operator">=</span> c<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
     <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">getSlope</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
     <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">)</span> <span class="token operator">-</span>a<span class="token operator">/</span>b<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
     <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isOnLine</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span>
     <span class="token punctuation">{</span>
          <span class="token keyword">return</span> a <span class="token operator">*</span> x <span class="token operator">+</span> b <span class="token operator">*</span> y <span class="token operator">+</span> c <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

     <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token class-name">APLine</span> line1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">APLine</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">17</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">double</span> slope1 <span class="token operator">=</span> line1<span class="token punctuation">.</span><span class="token function">getSlope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// slope1 is assigned -1.25</span>
          <span class="token keyword">boolean</span> onLine1 <span class="token operator">=</span> line1<span class="token punctuation">.</span><span class="token function">isOnLine</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true because 5(5) + 4(-2) + (-17) = 0</span>
          <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;slope &quot;</span> <span class="token operator">+</span> slope1 <span class="token operator">+</span> <span class="token string">&quot; online: &quot;</span> <span class="token operator">+</span> onLine1<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token class-name">APLine</span> line2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">APLine</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">double</span> slope2 <span class="token operator">=</span> line2<span class="token punctuation">.</span><span class="token function">getSlope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// slope2 is assigned 0.625</span>
          <span class="token keyword">boolean</span> onLine2 <span class="token operator">=</span> line2<span class="token punctuation">.</span><span class="token function">isOnLine</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false because -25(5) + 40(-2) + 30 ≠ 0</span>

          <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;slope &quot;</span> <span class="token operator">+</span> slope2 <span class="token operator">+</span> <span class="token string">&quot; online: &quot;</span> <span class="token operator">+</span> onLine2<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3" tabindex="-1"><a class="header-anchor" href="#_3" aria-hidden="true">#</a> 3</h2><h3 id="_3-a" tabindex="-1"><a class="header-anchor" href="#_3-a" aria-hidden="true">#</a> 3.a</h3><h3 id="_3-b" tabindex="-1"><a class="header-anchor" href="#_3-b" aria-hidden="true">#</a> 3.b</h3><h2 id="_4" tabindex="-1"><a class="header-anchor" href="#_4" aria-hidden="true">#</a> 4</h2><h3 id="_4-a" tabindex="-1"><a class="header-anchor" href="#_4-a" aria-hidden="true">#</a> 4.a</h3><h3 id="_4-b" tabindex="-1"><a class="header-anchor" href="#_4-b" aria-hidden="true">#</a> 4.b</h3>`,12),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","2010.html.vue"]]);export{r as default};