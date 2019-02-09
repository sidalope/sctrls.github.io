
// var path = new Path.Circle({
// 	center: view.center,
// 	radius: 30,
// 	strokeColor: 'black'
// });

var lists = [];

var connector = new Path();
connector.strokeCOlor = "black";
connector.add(new Point(0,0));

var box = new Rectangle(new Point(200,200), new Point(350,250));
var list = new Path.Rectangle(box, new Size(20,20));
list.fillColor = "green";
lists.push(list);

box = new Rectangle(new Point(400,400), new Point(550,350));
list = new Path.Rectangle(box, new Size(20,20));
list.fillColor = "blue";
lists.push(list);



var colWidth = (view.size.width / (lists.length+1));

for(var i=0 ; i<lists.length ; i++){
    
    lists[i].position = new Point(colWidth, 50);
    connector.add(new point());
}

console.log(lists);
console.log(view.size.width);
console.log((view.size.width / lists.length));
console.log((colWidth));


function onResize(event) {
	// Whenever the window is resized, recenter the path:
	// path.position = view.center;
}





// var myPoint = new Point(10, 20); 
// var myPath = new Path();

// myPath.add(myPoint);

// console.log(myPoint);


// var testRec = new Rectangle(10, 20, 200, 200);


// // var myPath = new Path();
// // myPath.strokeColor = 'black';
// // myPath.add(new Point(0, 0));
// // myPath.add(new Point(100, 50));


// // var decagon = new Path.RegularPolygon(new Point(200, 70), 7, 50);
// // decagon.fillColor = '#e9e9ff';
// // decagon.selected = true;


// console.log(view.size);
