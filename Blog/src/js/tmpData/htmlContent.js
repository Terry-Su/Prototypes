export default `
<h1>Introduction</h1>
<p>Do you prefer the usage of &quot;ES6 Promise&quot;? If you do, you will like the usage of &quot;Fetch&quot; too.<br>
Compared to &quot;Ajax&quot;, &quot;Fetch&quot; owns a competitive feature: promise, which synchronize asynchronous methods elegantly, the meaning and the usage of &quot;Fetch&quot;  can be understood easily as well.<br>
Here, I'd like to list the most common usage of &quot;Fetch&quot;.</p>
<h1>Flow</h1>
<p>The flow of fetching staff is simple:
image1</p>
<h1>Usage</h1>
<h2>Fetch once</h2>
<p>Suppose we would fetch the content of an remote html</p>
<pre><code class="language-js">fetch(<span class="hljs-string">'./data/test.html'</span>)
	.then(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">response</span>) </span>{
		<span class="hljs-keyword">return</span> response.text()    <span class="hljs-comment">// return a promise </span>
	})
	.then(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">body</span>) </span>{
		<span class="hljs-built_in">console</span>.log( body )    <span class="hljs-comment">// log: html content</span>
	})
</code></pre>
<h2>Fetch data right after the other data fetched(Chain)</h2>
<p>If we'd like to fetch data(json) right after fetching content(html)</p>
<pre><code class="language-js">fetch(<span class="hljs-string">'./data/test.html'</span>)
	.then(<span class="hljs-function"><span class="hljs-params">response</span> =&gt;</span> {
		<span class="hljs-keyword">return</span> response.text()
	})
	.then(<span class="hljs-function"><span class="hljs-params">body</span> =&gt;</span> {
		<span class="hljs-built_in">console</span>.log(body)
		<span class="hljs-keyword">return</span> fetch(<span class="hljs-string">'./data/test.json'</span>)  <span class="hljs-comment">// return a promise(fetch('/url') will return a promise ) </span>
	})
	.then(<span class="hljs-function"><span class="hljs-params">response</span> =&gt;</span> {
		<span class="hljs-keyword">return</span> response.json()  <span class="hljs-comment">// return a promise too</span>
	})
	.then(<span class="hljs-function"><span class="hljs-params">json</span> =&gt;</span> {
		<span class="hljs-built_in">console</span>.log(json)  <span class="hljs-comment">// log: json's data</span>
	})
</code></pre>
<h2>Complete all fetching action</h2>
<pre><code class="language-js"><span class="hljs-built_in">Promise</span>.all([
	<span class="hljs-built_in">Promise</span>.resolve(fetch(<span class="hljs-string">'./data/test.html'</span>)),
	<span class="hljs-built_in">Promise</span>.resolve(fetch(<span class="hljs-string">'./data/test.json'</span>))
]).then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {
	<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Two requests are both completed!'</span>)
})
</code></pre>
<h1>API</h1>
<p><a href="https://github.github.io/fetch/">Github Fetch Document</a><br>
<a href="https://fetch.spec.whatwg.org/">Offcial Manual</a></p>
<h1>Conclusion</h1>
<p>Fetch, well done!</p>

`