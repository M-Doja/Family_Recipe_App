// display all content

(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);
	function HomeController($state) {

		var vm = this;
		vm.title = 'Welcome to our App!';


	}
})();
