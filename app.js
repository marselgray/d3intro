var el = d3.select('body')
	.append('p')
	/* these are consider 
	transformation methods */
	.attr('class', 'foo')
	.text('Hello world')
	.classed('foobar', true)
	.style('color', 'blue');

console.log(el);