google.load("visualization", "1.1", {packages:["wordtree"]});

function drawChart() {

	var d =
	[
		['Phrases'],
		['cats are better than dogs'],
		['cats eat kibble'],
		['cats are better than hamsters'],
		['cats are awesome'],
		['cats are people too'],
		['cats eat mice'],
		['cats meowing'],
		['cats in the cradle'],
		['cats eat mice'],
		['cats in the cradle lyrics'],
		['cats eat kibble'],
		['cats for adoption'],
		['cats are family'],
		['cats eat mice'],
		['cats are better than kittens'],
		['cats are evil'],
		['cats are weird'],
		['cats eat mice'],
	];

	var options = {
	  wordtree: {
		format: 'implicit',
		word: 'cats'
	  }
	};

	chart.draw(data, options);
}