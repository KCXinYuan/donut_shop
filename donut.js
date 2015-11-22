// Creating locations and variables-------------------------------

var stores = function places(name,nameTwo,min,max,avg) {
  this.name = name; // location names
  this.nameTwo = nameTwo; // camelCase versions of location names
  this.min = min; // minimum customers per hour
  this.max = max; // maximum customers per hour
  this.avg = avg; // average donuts bought by each customer
};

this.donutsPerHour = [];
this.allLocations = []


var downtown = new stores("Downtown","downtown",8,43,4.50);
var capitolHill = new stores("Capitol Hill","capitolHill",4,37,2.00);
var southLakeUnion = new stores("South Lake Union","southLakeUnion",9,23,6.33);
var wedgewood = new stores("Wedgewood","wedgewood",2,28,1.25);
var ballard = new stores("Ballard","ballard",8,58,3.75);

allLocations.push(downtown);
allLocations.push(capitolHill);
allLocations.push(southLakeUnion);
allLocations.push(wedgewood);
allLocations.push(ballard);
//console.log(donutsPerHour);
//console.log(allLocations);

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

var storeLocations = document.getElementById('body');

this.sales = function(x) {
  hours.forEach(function() { // make random customer count and donuts bought
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

allLocations.forEach(function(x){
  sales(x);
});

/*sales(downtown);  // calling the function for each location.
sales(capitolHill);
sales(southLakeUnion);
sales(wedgewood);
sales(ballard);
*/
// Form submission-----------------------------------------
var donutForm = document.getElementById('donut-form');

var handleNewStores = function(event) { // Function that makes a new store or updates an existing one
  event.preventDefault();

  if(!event.target.where.value || !event.target.min.value || !event.target.max.value || !event.target.avg.value) {
    return alert('Make sure to fill all fields!');
  };

  var where = event.target.where.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var avg = event.target.avg.value;

  var newShop = true;

  allLocations.forEach(function(x){
    if(x.name === where) {
      x.min = min;
      x.max = max;
      x.avg = avg;
      document.getElementById('body').innerHTML = '';
      allLocations.forEach(function(x) {
        sales(x);
      });
      newShop = false;
    }

    console.log(allLocations);
  });

  if (newShop === true) {
    var newStoreSubmit = new stores(where, where, min, max, avg);
    allLocations.push(newStoreSubmit);
    console.log(allLocations);
    sales(newStoreSubmit);
  }
}




// Event Listener-----------------------------------------------

// Event Listener for creating new stores
donutForm.addEventListener('submit', handleNewStores);
