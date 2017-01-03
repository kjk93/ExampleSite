angular.module('common.directives.lineUp', [])
	.directive('lineUp', lineUp);

	function lineUp(){
		var directive = {
			Restrict: 'E',
			templateUrl: 'app/common/views/lineUp.tpl.html',
			scope: {},
			bindToController: {
				team: '='
			},
			controller: 'LineUpCtrl',
			controllerAs: 'lineUp',
			link: link
		};

		return directive;

		function link(scope, elem, attr, ctrl) {
			ctrl.playerNames = Object.keys(ctrl.team);
		}
	}