Inspired by [Curran Kelleher](https://github.com/curran/portfolio) repository with over 1500+ stars featuring 50 well made Angular.JS examples and lecture videos I thought I would develop my own repository consisting of what I would consider the basics of Angular.JS and cover it via examples and a well developed github repo.

## Important Links
  * [Angular.JS Api Reference](https://docs.angularjs.org/api)

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
  * Filters: A way to filter inputs given via ng-repeat. "people in class | filter: userInput | orderBy: name". Filter takes into consideration what the user may be typing, orderBy deals with the order the object gets returned in. There are many examples of different built in filters, you can even build your own filters. 
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
## MVC Framework 
  * MVC is a framework thats top priority is seperating the presentation logic(the front end), from the business/data logic(the back end). So from this perspective its biggest advantage is that two people could be working simultaneously one on the back end, one on the front end without ever clashing with each other. MVC is extremely popular among web applications and divides a given application into three interconnected parts(as you might have guessed) the Model, the View, the Controller. 
  	* <b>The controller</b>: sends commands to the model to update the models state. It can also send commands to its associated view to change the views presentation. <br/>
  	* <b>The model</b>: stores data that is retrieved according to commands invoked from the controller that become displayed in the view. <br/>
  	* <b>The view</b>: generates the output and presentation to the user based on changes from the model. 
	* Here is a image representation of the MVC framework: <br/> 
![MVC Image](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/MVC-Process.svg/500px-MVC-Process.svg.png)

## Why should I use AngularJS over MVC:
  * MVW (known as model, view, whatever) is what many people consider AngularJS to be. Angular has this thing called a "scope" and it acts a "ViewModel" in the sense that it is the glue between the controller, and the view. We access the scope object by creating a controller and injecting "$scope" via dependency injection. Note you will be seeing lots of ($varNames) that are built in Angular.JS tools like $routeProvider, $locals, $scope, and etc. 
 
## Declaring Modules in Angular, and abusing how modular of a language AngularJS really is.
 * Modules are an amazing way to organize your code. In general the examples 1-3 show a style of angular using a single .html file with everything built into that one page. This is not the appropriate style of scaling your coding. You should have a parent directory containing a single index.html with organized js/css/view/controllers/services/ etc. 
 * Using the strength of the AngularJS modules we have access to all of the following functionality:
![Module Image](http://i.imgur.com/lYpNFOG.png)
 * Using the above Framework from Dan Wahlins 60 minute youtube [lecture](https://www.youtube.com/watch?v=i9MHigUZKEM) on Angular(slightly old now) you can see clearly that organizing your code like this will allow you to scale and build modular web applications abusing the strengths of AngularJS. 
```javascript
var helloWorldApp = angular.module('demoApp', []) 
```
## The Empty Array in Module Declaration
  * When declaring a module such as angular.module('moduleName', [ ]) this array shown (aka the second parameter) is known as dependency injection. This is because your module may require other modules to get data (very popular in large scale applications). An example of this would be angular.module('catModule', ['catFeedingScheduleModule']); In this case we are using dependency injection to feed catModule the catFeedingScheduleModule. 
  * Dependency injection is a way to 
  
## Goals of this repo:
  * Write atleast 250 basic angular.JS apps covering the fundementals, basics, and even some intermediate code snippets.
  * Cover basic keywords associated with Angular.JS (scope, controllers, imports, etc)
  * Cover the concept of MVC(model view controller) vs MVW(model view what ever)
  * More.. feel free to add
  * 

This repo commenced mid Oct 2015, all creation done by [Shaheen Ghazazani](http://shaheensweb.me) 

## Examples
 * [Example 1](https://github.com/ShaheensWeb/250-angularJS-examples/blob/master/example1/index-example1.html)
 	* Covers basics of ng-app, ng-model, and data-binding.
 * [Example 2](https://github.com/ShaheensWeb/250-angularJS-examples/blob/master/example2/index-example2.html)
	* Covers basics of ng-init, ng-repeat. 
 * [Example 3](https://github.com/ShaheensWeb/250-angularJS-examples/blob/master/example3/index-example3.html)
 	* Covers ng-init, ng-repeat, and filtering via user input.
 * [Example 4]()
 * [Example 5]()
 * [Example 6]()
 * [Example 7]()
 * [Example 8]()
