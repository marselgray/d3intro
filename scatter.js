var data = [
	[ 400, 200 ],
	[ 210,140 ],
	[ 722,300 ],
	[ 70,160 ],
	[ 250,50 ],
	[ 110,280 ],
	[ 699,225 ],
	[ 90, 220 ]
];

var chart_width  = 800;
var chart_height = 400;
var padding = 50;

// create SVG Element
var svg = d3.select('#chart')
	.append('svg')
	.attr('width', chart_width)
	.attr('height', chart_height);


// create scales
var x_scale = d3.scaleLinear()
	.domain([0, d3.max(data, function(d){
		return d[0]
	})])
	.range([padding, (chart_width - padding * 2)]);

var y_scale = d3.scaleLinear()
	.domain([0, d3.max(data, function(d){
		return d[1]
	})])
	.range([chart_height - padding, padding]);

var r_scale = d3.scaleLinear()
	.domain([0, d3.max(data, function(d){
		return d[1]
	})])
	.range([5, 30]);

// create circles
svg.selectAll('circle')
	.data(data)
	.enter()
	.append('circle')
	.attr('cx', function(d){
		return x_scale( d[0] )
	})
	.attr('cy', function(d){
		return y_scale( d[1] )
	})
	.attr('r', function(d){
		return d[1] / 10
	})
	.attr('fill', '#D1AB0E');


// create labels
svg.selectAll('text')
	.data(data)
	.enter()
	.append('text')
	.text(function(d){
		return d.join(',')
	})
	.attr('x', function(d){
		return x_scale( d[0] )
	})
	.attr('y', function(d){
		return y_scale( d[1] )
	})