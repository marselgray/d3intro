var data = [6,20,21,14,2,30,7,16,25,5,11,28,10,26,9];


// Create SVG Element
var chart_width     =   800;
var chart_height    =   400;
var bar_padding     =   5;
var svg             =   d3.select( '#chart' )
	.append( 'svg' )
	.attr( 'width', chart_width )
	.attr( 'height', chart_height );


// create scales
// numbers retuned based on chart
// 800 / numbers in the array (15)
var x_scale = d3.scaleBand()
	.domain( d3.range(data.length) )
	.rangeRound([0, chart_width])
	.paddingInner(0.05);

var y_scale = d3.scaleLinear()
	.domain([0, d3.max(data)])
	.range([0, chart_height]);



// Bind Data and create bars
svg.selectAll( 'rect' )
	.data( data )
	.enter()
	.append( 'rect' )
	.attr( 'x', function( d, i ){
		return x_scale(i);
	})
	.attr( 'y', function(d ){
		return chart_height - y_scale(d)
	})
	.attr( 'width', x_scale.bandwidth() )
	.attr( 'height', function( d ){
		return y_scale(d)
	})
	.attr( 'fill', '#7ED26D' );


// Create Labels
svg.selectAll( 'text' )
	.data(data)
	.enter()
	.append( 'text' )
	.text(function( d ){
		return d;
	})
	.attr( 'x', function( d, i ){
		return x_scale(i) + x_scale.bandwidth() / 2;
	})
	.attr( 'y', function(d ){
		return chart_height - y_scale(d) + 25;
	})
	.attr( 'font-size', 14 )
	.attr( 'fill', '#fff' )
	.attr( 'text-anchor', 'middle' );


// Events
d3.select('.update').on('click', function(){
	// data.reverse();

	data[0] = 50;
	y_scale.domain([0, d3.max(data)]);

	svg.selectAll('rect')
		.data(data)
		.transition()
		.delay(function(d, i){
			return i / data.length * 1000;
		})
		.duration(2000)
		.ease(d3.easeElasticOut)
		.attr( 'y', function(d ){
			return chart_height - y_scale(d)
		})
		.attr( 'height', function( d ){
			return y_scale(d)
		})

	svg.selectAll( 'text' )
		.data(data)
		.transition()
		.delay(function(d, i){
			return i / data.length * 1000;
		})
		.duration(2000)
		.ease(d3.easeElasticOut)
		.text(function( d ){
			return d;
		})
		.attr( 'y', function(d ){
			return chart_height - y_scale(d) + 25;
		})
})



// add data
d3.select('.add').on('click', function(){
	// add new data
	var new_num = Math.floor(Math.random() * d3.max(data));
	data.push(new_num);

	// update scales
	x_scale.domain(d3.range(data.length));
	y_scale.domain([0, d3.max(data, function(d){
		return d;
	})]);

	// select bars
	var bars = svg.selectAll('rect').data(data);

	// add new bar
	bars.enter()
		.append('rect')
		.attr('x', function(d, i){
			return x_scale(i)
		})
		.attr('y', chart_height)
		.attr('width', x_scale.bandwidth())
		.attr('height', 0)
		.attr('fill', '#7ED26D')
		.merge(bars)
		.transition(1000)
		.attr( 'x', function( d, i ){
			return x_scale(i);
		})
		.attr( 'y', function(d ){
			return chart_height - y_scale(d)
		})
		.attr( 'width', x_scale.bandwidth() )
		.attr( 'height', function( d ){
			return y_scale(d)
		});

})