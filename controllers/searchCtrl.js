
(function(){
	var app=angular.module("app");
    app.controller("searchCtrl", searchCtrl);
   
    function searchCtrl($scope, $http){
    	var API_KEY="?api_key=f24727bdb915ca05f7718876104b211d";
    	var URL="http://api.themoviedb.org/3/";
    	var SEARCH="search/person";
    	var MOVIES="discover/movie";
    	var PERSON="person";
    	var QUERY="&query=";
    	$scope.SITE_PATH="http://image.tmdb.org/t/p/w500";
    	$scope.title='search ctrl';
    	$scope.moviesLoaded=false;
    	$scope.getActors=function(){
    		var promise= $http.get(URL+SEARCH+API_KEY+QUERY+$scope.searchActors);
    		promise.then(successCallback,failureCallback);
    		
    		function successCallback(result){
    			console.log("successCallback",result.data.results);
    			$scope.actors=result.data.results;
    		}
    		function failureCallback(result){
    			console.log("failureCallback",result);
    		}
    	};
    	$scope.getMovie=function(){
    		var promise= $http.get(URL+MOVIES+API_KEY+QUERY+$scope.searchMovie);
    		promise.then(successCallback,failureCallback);
    		
    		function successCallback(result){
    			console.log("successCallback",result.data.results);
    			$scope.actors=result.data.results;
    		}
    		function failureCallback(result){
    			console.log("failureCallback",result);
    		}
    	};
    	$scope.getMoviesById=function(id){
    		var promise= $http.get(URL+PERSON+"/"+id+"/"+"movie_credits"+API_KEY);
    		promise.then(successCallback,failureCallback);
    		
    		function successCallback(result){
    			console.log("successCallback",result.data.cast);
    			$scope.casts=result.data.cast;
    			$scope.moviesLoaded=true;
    		}
    		function failureCallback(result){
    			console.log("failureCallback",result);
    		}
    	};
    	
    }
})();
