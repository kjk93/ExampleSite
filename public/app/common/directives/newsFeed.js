angular.module('common.directives.newsFeed', [])
	.directive('newsFeed', newsFeed);

	function newsFeed(){
		var directive = {
			Restrict: 'E',
			templateUrl: '/app/common/views/newsFeed.tpl.html',
			scope: {},
			bindToController: {
				height: '='
			},
			controller: 'NewsFeedCtrl',
			controllerAs: 'news'
		};

		return directive;
	}