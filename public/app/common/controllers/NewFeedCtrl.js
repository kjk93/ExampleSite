angular.module('common.controllers.NewsFeedCtrl', [])
	.controller('NewsFeedCtrl', NewsFeedCtrl);

	NewsFeedCtrl.$inject=['NewsFeed'];

	function NewsFeedCtrl(NewsFeed){
		var vm = this;

		vm.feed = NewsFeed.getFeed();
	}