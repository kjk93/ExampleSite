angular.module('common.directives.ad', [])
	.directive('ad', ad);

	function ad(){
		var directive = {
			Restrict: 'E',
			templateUrl: '/app/common/views/ad.tpl.html',
			scope: {},
			bindToController: {
				adSrc: '@'
			},
			controller: 'AdCtrl',
			controllerAs: 'ad'
		};

		return directive;
	}