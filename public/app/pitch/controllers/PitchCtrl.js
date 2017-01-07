angular.module('pitch.controllers.PitchCtrl', [])
	.controller('PitchCtrl', PitchCtrl);

	PitchCtrl.$inject = ['PitchData', 'MatchData', '$interval'];

	function PitchCtrl(PitchData, MatchData, $interval){
		var vm = this;
		var players = MatchData.players();

		vm.formations = PitchData.formations();
		vm.formationTypes = Object.keys(vm.formations);
		vm.activeFormationType = 'Offensive';
		vm.matchHeaders = ['user', 'attributes', 'opp'];
		vm.user = {};
		vm.opp = {};

		//Create user objects

		vm.user.name = players.user.name;
		vm.user.scores = players.user.scores;
		vm.user.team = players.user.team;

		vm.opp.name = players.opp.name;
		vm.opp.scores = players.opp.scores;
		vm.opp.team = players.opp.team;

		vm.attributes = Object.keys(vm.user.scores);

		vm.setActiveFormationType = function(type){
			vm.activeFormationType = type;
		};
		
		/*Create formation Types variable
		for(let i of Object.keys(vm.formations)){
			let obj = {};

			obj.type = i;
			obj.spelling = i.split('');

			vm.formationTypes.push(obj);
		}

		console.log(vm.formationTypes);*/
	}