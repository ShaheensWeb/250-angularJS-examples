(function(){ 
	/*Code of the form (function() {  code here  })() is known as an "Immediately Invoked
	 Function Expression". It is frequently used to set up a closure, so you can define 
	 variables without polluting the global scope*/
 	var example5App = angular.module('example5App', []);
 	example5App.controller('example5Controller', function($scope, $http){
 		var LoLAPIkey = '15b1f631-0414-4515-a175-927e7f5807b8'; //see developer.riotgames.com for ref
	  	//lets get the ranked solo 5x5 ladder board
	  	$http.get('https://na.api.pvp.net/api/lol/na/v2.5/league/challenger?type=RANKED_SOLO_5x5&api_key='+LoLAPIkey).success(function(data) {
	    	$scope.PlayersRanking = data.entries;
	    	//using LoL api to fetch ranked 5x5 solo players and bind it to a scope variable called PlayersRanking to display in the HTML
	  	});
	});
})();