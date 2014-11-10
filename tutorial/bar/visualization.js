google.load("visualization", "1", {packages: ["corechart"]});

google.setOnLoadCallback(drawChart);

function drawChart() {

//Data is here:
var d = [
			['Year', 'Sales', 'Expenses'],
			['2004',  1000,      400],
			['2005',  1170,      460],
			['2006',  660,       1120],
			['2007',  1030,      540]
		]

  //Q1: Convert the array data into DataTable?
  var data = /*Add your code here.*/;

  var options = {
    //Q2: Change the title into 'Company Performance'.
	/*Add your code here.*/
	
	//Q3: Change the color of the axis title into red.
    hAxis: {title: 'Year' /*Add your code here.*/}
  };
  
  //Q4: Put your chart inside the html element 'chart_div'.
  var chart = new google.visualization.ColumnChart(/*Add your code here.*/);
  
  //Q5: Draw your chart into the html
  /*Add your code here.*/
}