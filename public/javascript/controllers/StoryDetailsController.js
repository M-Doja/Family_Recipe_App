// tracking and displaying ind story
//  add comments   / fam pswd to join

(function() {
	'use strict';
	angular.module('app')
	.controller('StoryDetailsController', StoryDetailsController);
	function StoryDetailsController(HomeFactory, $stateParams, $state) {

		var vm = this;
		vm.title = 'Welcome to our App!';


	}
})();
