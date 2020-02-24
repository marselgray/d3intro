var data = [];

for(let i = 0; i < 25; i++){
	// let num = Math.floor( Math.random() * 50 );
	let num = d3.randomUniform(1, 50);
	data.push(num);
}

console.log(data);



d3.select('#chart')
	.selectAll('div')
	.data(data)
	.enter()
	.append('div')
	.attr('class', 'bar')
	.style('height', function(d){
		let height = d * 3;
		return height + `px`;
	});