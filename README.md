Inspired by [Curran Kelleher](https://github.com/curran/portfolio) repository with over 1500+ stars featuring 50 well made Angular.JS examples and lecture videos I thought I would develop my own repository consisting of what I would consider the basics of Angular.JS and cover it via examples and a well developed github repo.

## Single Page Applications (SPA)
 * Load the initial content upfront, and the different views(commonly referred to as mini-web pages) can be loaded on the fly(when required) and loaded into the web page.
 * Challenges with dealing SPA: 
  * DOM Manipulation, History, Module Loading, Routing, Caching, Object Modelling.
  * Data Binding, Ajax/Promises, View Loading. 
 * Angular provides us with features (one core library) to help us deal with all the issues listed above with SPA. This also helps us not have to use 30 different JS libraries to get one single web page to function correctly. 
  * Benefit: Don't have to deal with issues of plugins versions colliding and breaking in the future past development.
 * Some of the Angular.JS features:
  * Two way data binding, Built-in routing support, Testing supported, Built in jqLite(mini-me version of jQuery) (Note: Angular.JS and jQuery play really nice together), Factories, Dependency Injection, Validation, Templates, History, ViewModel, Services. 
  * Where can I get this tool? Download Angular full or minified here: [Angular.JS](http://angularjs.org)

## AngularJS Concepts
 * Directives, Data Binding, and Built in Angular.JS Methods 
  * A way to teach HTML new tricks. Some consider Angular.JS to allow us to "bend" i.e create new html attributes. An example of an HTML attribute is the body tag, or div tag, or any built in HTML attribute. Angular allows us to create our own unique attributes with properties we can define, and model. 
  * The first directive you'll see in many Angular apps is: ng-app notice it at the top of example 1 pasted below. 
  ```html
 <html ng-app> <!-- let html know "HEY!" this is a angular app ok? Be ready.. -->
	<head> 
	    <meta charset="utf-8"> 
	    <title>Angular.JS - ShaheensWeb - Example #1</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"> 
	</head>
	<body>
		<div class="container"> <!-- some bootstrap styling --> 
		    What's your favorite color:<input ng-model="favColor" type="text"/> 
    	    <!-- Bind an input using input and ng-model -->
		    <br/> 
		    <!-- line break for styling purposes -->
    		Your favorite color is: {{favColor}} 
    		<!-- log the user the input from the text field -->
 		</div>
  		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.min.js"></script> 
  		<!-- import angular -->
	</body>
</html>
 ```
 ## Directives Cont:
 	* ng-app: Notify the page that the code within this page is an angular application. Allowing it to prepare itself for whats coming (i.e loading the angular.JS script first, etc)
 	* ng-model="var": A way to bind a variable to a value. In the HTML code snippet above we are using ng-model to bind the value given from the text input to a "favColor" variable. This variable then gets returned in real time via data-binding to {{favColor}}. 
 	* ng-init="Class=['sean', 'james', 'alex', 'daihee']": A way to bind values and hard declare them. 
 	* ng-repeat="people in Class": The main method of iteration in AngularJS. This would allow us to go through the previously declared array of strings and log each name using {{people}}. 
```html
<!DOCTYPE html>
<html ng-app> 
	<head> 
    	<meta charset="utf-8"> 
    	<title>Angular.JS - ShaheensWeb - Example #2</title>
	    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"> 
	</head>
<body ng-init="class=['Sean Ghazazani', 'James Mcconnell', 'Daihee Kim', 'Alex Carlucci', 'Nick Corneau']">
<!-- declare a class object above accessible only within the body -->
	<div class="row" ng-repeat="people in class">  
  		<!-- iterate through it giving each one its own div and text field -->
  		<div class="col-md-4">
        	This person definetly attended class: <b>{{people}}</b>
    	</div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.min.js"></script> 
    <!-- import angular -->
</body>
</html>
 ```
 
## Goals of this repo:
  * Write atleast 250 basic angular.JS apps covering the fundementals, basics, and even some intermediate code snippets.
  * Cover basic keywords associated with Angular.JS (scope, controllers, imports, etc)
  * Cover the concept of MVC(model view controller) vs MVW(model view what ever)
  * More.. feel free to add
  * 

This repo commenced Oct 2015, all creation done by [Shaheen Ghazazani](http://shaheensweb.me) 

## Examples
 * [Example 1](https://github.com/ShaheensWeb/250-angularJS-examples/blob/master/example1/index-example1.html)
