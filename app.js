var dataset = [10, 20, 30, 40, 50];

var el = d3.select('body')
	.selectAll('p')
	.data(dataset)
	.enter()
	.append('p')
	.text('hello world');

	// .append('p')
	/* these are consider 
	transformation methods */
	// .attr('class', 'foo')
	// .text('Hello world')
	// .classed('foobar', true)
	// .style('color', 'blue');

console.log(el);