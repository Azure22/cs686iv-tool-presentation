//First of all, load the core google chart api package into your code.
//It is like importing the lib you want in python.
google.load("visualization", "1", { packages:["corechart"] });

//For we are going to draw a chart using google api, we have to draw it after the package was loaded complete.
//That's why we set a drawChart callback when we finish loading the visualization package.
google.setOnLoadCallback(drawChart);

//Thn we can specify what we plan to draw inside this drawChart function.
function drawChart() {
  
  //For the very basic idea, to complete a simple google chart, you need to combine only two parts:
  //First part is data, and second part is options.
  //This design makes google chart api easy to understand and also easy to use.
  
  //Let's start with the first part: data.
  //Google chart is using google's own data structure, so we need to convert our own data into google's DataTable.
  //Here is the sample data using array. Therefore, we use the arrayToDataTable() function to convert the data.
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540]
  ]);

  //And then let's move to the next part: options.
  //If you don't want to make your visualization too complicated, you may want to modify the less the better.
  var options = {
	//So here we add only two things:
	//We want to clearify what we are going to show: the performance of the company
    title: 'Company Performance',
	//Then, we want to specify what x axis is showing: the time.
	//And we want it red -- the text title, not the axis, not the labels on the axis.
    hAxis: {title: 'Year', titleTextStyle: {color: 'red'}}
	//Maybe now you get this format: it is a json object.
  };

  //Finally, what you still need to do to create your visualization on the html are:
  //First, you may choose a representation to show your data, so we use ColumnChart here.
  //Second, you may need somewhere to put your chart.
  //Therefore, we use HTML DOM method document.getElementById() to get the div and put our chart there.
  
  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
	
  //In the end, let combine all these together to show the visualization on the html!
  chart.draw(data, options);
}