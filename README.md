Inspired by [Curran Kelleher](https://github.com/curran/portfolio) repository with over 1500+ stars featuring 50 well made Angular.JS examples and lecture videos I thought I would develop my own repository consisting of what I would consider the basics of angular. 

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
 * Directives
  * A way to teach HTML new tricks. Some consider Angular.JS to allow us to "bend" and create new html attributes. An example of an HTML attribute is <a></a> for allowing us to bind links to images and more. 
  * The first directive you'll see in many Angular apps is: ng-app notice it at the top of example 1 pasted below. 
  ```html
 <html ng-app> <!-- let html know "HEY!" this is a angular app ok? Be ready.. -->
	<head> 
	    <meta charset="utf-8"> 
	    <title>Angular.JS - ShaheensWeb - Example #1</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"> <!-- import BS -->
	</head>
	<body>
		<div class="container"> <!-- some bootstrap styling --> 
	    	What's your favorite color:<input ng-model="favColor" type="text"/> <!-- Bind an input using input and ng-model -->
	    	<br/>  <!-- line break for styling purposes -->
	    	Your favorite color is: {{favColor}} <!-- log the user the input from the text field -->
	 </div>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.min.js"></script> <!-- import angular -->
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
