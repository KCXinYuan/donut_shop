// Creating locations and variables-------------------------------

var stores = function places(name,nameTwo,min,max,avg) {
  this.name = name; // location names
  this.nameTwo = nameTwo; // camelCase versions of location names
  this.min = min; // minimum customers per hour
  this.max = max; // maximum customers per hour
  this.avg = avg; // average donuts bought by each customer
};


var downtown = new stores("Downtown","downtown",8,43,4.50);
var capitolHill = new stores("Capitol Hill","capitolHill",4,37,2.00);
var southLakeUnion = new stores("South Lake Union","southLakeUnion",9,23,6.33);
var wedgewood = new stores("Wedgewood","wedgewood",2,28,1.25);
var ballard = new stores("Ballard","ballard",8,58,3.75);


var locations = ["Downtown","Capitol Hill","South Lake Union","Wedgewood","Ballard"];

var locationsAlt = ["downtown","capitolHill","southLakeUnion","wedgewood","ballard"];

// Making the header----------------------------------------------
var hours = ["7:00am","8:00am","9:00am","10:00am","11:00am","12:00pm","1:00pm","2:00pm","3:00pm","4:00pm","5:00pm"]

var hoursOpen = document.getElementById('head');

var empty = document.createElement('th'); //empty box for axis
hoursOpen.appendChild(empty);

hours.forEach(function(x){
  var donutHead = document.createElement('th');
  hoursOpen.appendChild(donutHead);
  donutHead.textContent = x;
});

var total = document.createElement('th'); // Totals heading
hoursOpen.appendChild(total);
total.textContent = "Total";

// Daily sales----------------------------------------------------
this.donutsPerHour = [];

var storeLocations = document.getElementById('body');

this.sales = function(x){
  hours.forEach(function(){ // make random customer count and donuts bought
    var donutDailyCust = Math.floor(Math.random()*(x.max-x.min+1)+x.min);
    donutsPerHour.push(Math.ceil(x.avg*donutDailyCust));
  });

   var donutBody = document.createElement('tr'); // create row for location
  storeLocations.appendChild(donutBody);
  donutBody.textContent = x.name;
  donutBody.setAttribute('id',x.nameTwo);
  x = x.nameTwo;

  var donutRow = document.getElementById(x); // add counts for bought donuts on table
  donutsPerHour.forEach(function(x){
    var donutSales = document.createElement('td')
    donutRow.appendChild(donutSales);
  donutSales.textContent = x;
  });

  var total = donutsPerHour.reduce(function(a,b){ // total of donuts bought
    return a+b;
  });

  var donutTotals = document.createElement('td'); // putting totals into the table
  document.getElementById(x).appendChild(donutTotals);
  donutTotals.textContent = total;
  this.donutsPerHour = [];
};

sales(downtown);  // calling the function for each location.
sales(capitolHill);
sales(southLakeUnion);
sales(wedgewood);
sales(ballard);
