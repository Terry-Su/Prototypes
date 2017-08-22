export default `
<h1>Introduction</h1>
<p>MVVC is a light multi-page web developing framework.<br>
Github: <a href="https://github.com/Terry-Su/MVVC">https://github.com/Terry-Su/MVVC</a></p>
<h1>Background</h1>
<ol>
<li>In practical developing environment, react is too heavy to create an simple web page</li>
<li>An project always contains mutiple web pages, instead of an single page which react's good at</li>
<li>React and redux are the one of most popular and welcoming web developing mode</li>
</ol>
<h1>Concept</h1>
<h2><strong>M</strong>: Model</h2>
<p>Use fetch</p>
<h2><strong>VV</strong>: View and view model</h2>
<p>Use <a href="https://infernojs.org/">inferno</a>(a light react framwork) and redux</p>
<h2><strong>C</strong>: Controller</h2>
<p>Multiple pages can share or inherit props and methods by contollers</p>
<h2>Features</h2>
<h3>Light react</h3>
<p>Using <code>inferno</code> instead of react can reduce a large amount of  size of <code>bundle.js</code></p>
<h3>Supports multiple projects and pages</h3>
<p>We can choose one page or all pages in one project, or even all pages of all projects to develop</p>
<h3>Inferno + Redux</h3>
<p>A robust coing mode in web development</p>
<h1>Getting started</h1>
<p>First, just <code>git clone</code> the MVVC to local<br>
Then, install dev dependencies:<br>
<code>npm install</code><br>
Start and view the demo on <a href="http://localhost:3000/projectExample/pageExample">http://localhost:3000/projectExample/pageExample</a>:<br>
<code>npm start</code></p>
<h1>Contributing</h1>
<p>If you found somewhere in codes to be improved or fixed, or just make a suggestion, don't hesitate to send a pull request!</p>
<div id="detailCatalogData" style="display:none;">[{"name":"Introduction"},{"name":"Background"},{"name":"Concept","h2":["M: Model","VV: View and view model","C: Controller","Features"]},{"name":"Getting started"}]</div>
`