(function(){ 
	/*Code of the form (function() {  code here  })() is known as an "Immediately Invoked
	 Function Expression". It is frequently used to set up a closure, so you can define 
	 variables without polluting the global scope*/
 	var example4App = angular.module('example4App', []); 
 	//declare the module
	example4App.controller('example4Controller', function($scope){
		//give the module a controller
		$scope.class = [
			//give that controllers scope value a class to iterate over in the html
			{name: "Shaheen", schoolingYear: "3"},
			{name: "Alex", schoolingYear: "3"},
			{name: "James", schoolingYear: "2"},
			{name: "Porya", schoolingYear: "-1"}
		]
	});
})();