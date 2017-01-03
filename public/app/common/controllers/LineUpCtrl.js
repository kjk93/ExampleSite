angular.module('common.controllers.LineUpCtrl', [])
	.controller('LineUpCtrl', LineUpCtrl);

	function LineUpCtrl(){
		var vm = this;

		vm.headers = ['player', 'points'];
	}