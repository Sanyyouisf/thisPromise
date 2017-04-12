//when use jquery we should add this 
$(document).ready(function(){
	$("#my-button").click(function(e){
		console.log("event",e);
		console.log("event.target",event.target);
		console.log("this",$(this));//event.target as jquery object 
		console.log("this",this); //event.target
	});

});

// this.a = 37 ;
// console.log(window.a);//37

//Example1
// var fubar = "42";
// function baz(){
// 	console.log("baz");
// 	bar();
// }

// function bar(){
// 	console.log("bar");
// 	foo()

// }
// function foo(){
// 	console.log("foo");
// 	var fubar = "13";
// 	console.log("this",this);// window
// 	console.log("fubar",this.fubar); //42 as fubar is a global variable .

// }

// baz ();

//Example2
// var a = 3;

// function foo (){
// 	console.log("this",this);// (obj) start from monkey and go to the nearest object 
// 	console.log("a",this.a); //2

// }
// var obj = {
// 	a:2,
// 	monkey:foo  //monkey is the key and foo is the value
// };

// obj.monkey();//execute the foo function
// foo(); // window

//Example3
// function foo (){
// 	console.log("this",this);// object2 (start from foo and go to the closest object which is obj2) 
// 	console.log("a",this.a); //32

// }
// var obj2 = {
// 	a:32,
// 	foo:foo  //monkey is the key and foo is the value
// };
// var obj1 ={
// 	a:2,
// 	obj2 : obj2
// }

// obj1.obj2.foo();

//Example4
// function foo (){
// 	console.log("this",this);//  
// 	console.log("a",this.a); //

// }
// var obj = {
// 	a:32,
// 	foo:foo  //
// };

// var bar = obj.foo;

// var a = "global worming"

// obj.foo();//obj , 2 

// bar ();// window , "global worming"


//Example5
// function foo (){
// 	console.log("this",this);//  window 
// 	console.log("a",this.a); //global
// }

// function doFoo(){
// 	return fn();
// };

// var obj = {
// 	a:32,
// 	foo:foo  //
// };

// var a = "global";
//  doFoo(obj.foo);

















