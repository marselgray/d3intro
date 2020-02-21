d3.csv('data.csv').then(function(data){
	console.log(data);
});


var dataset = [10, 20, 30, 40, 50];

var el = d3.select('body')
	.selectAll('p')
	.data(dataset)
	.enter()
	.append('p')
	.text(function(d){
		return `this paragraph is binded to the number ` + d;
	})

	// .append('p')
	/* these are consider 
	transformation methods */
	.attr('class', function(d){
		if ( d > 25){
			return 'foo';
		} else{
			return null;
		}
	})
	// .text('Hello world')
	.classed('bar', function(d){
		return d < 25; // 10 < 25 === true
	})
	.style('color', function(d){
		if ( d > 25){
			return 'red';
		} else{
			return 'blue';
		}
	});

console.log(el);