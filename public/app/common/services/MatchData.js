angular.module('common.services.MatchData', [])
	.factory('MatchData', MatchData);

	function MatchData(){
		var service = {
			players: players
		};

		return service;

		function players(){
			var players = {
				user: {},
				opp: {}
			};

			players.user.name = users().user.name;
			players.user.scores = scores(players.user.name);
			players.user.team = team(players.user.name);

			players.opp.name = users().opp.name;
			players.opp.scores = scores(players.opp.name);
			players.opp.team = team(players.opp.name);

			return players;
		}

		function users(){
			return {
				user: {
					name: 'Andrew'
				},
				opp: {
					name: 'Ryan'
				}
			};
		}

		function scores(userName){
			if(userName === 'Andrew'){
				return {
					goals: 4,
					assists: 5, 
					interceptions: 10,
					tackles: 7,
					saves: 15, 
					blocks: 4, 
					passes: 15, 
					clearence: 2
				};
			}
			else{
				return {
					goals: 6,
					assists: 2, 
					interceptions: 15,
					tackles: 3,
					saves: 15, 
					blocks: 6, 
					passes: 10, 
					clearence: 5
				};
			}
		}

		function team(userName){
			if(userName === 'Andrew'){
				return {
					'Isola': {
						points: 12,
						starting: true
					},
					'Cesar': {
						points: 14,
						starting: true
					},
					'Wagen': {
						points: 16,
						starting: true
					},
					'Davy': {
						points: 9,
						starting: true
					},
					'Good': {
						points: 5,
						starting: true
					},
					'Diller': {
						points: 8,
						starting: true
					},
					'Grabbe': {
						points: 7,
						starting: true
					},
					'Vela-estrada': {
						points: 10,
						starting: true
					},
					'Oliviero': {
						points: 2,
						starting: true
					},
					'Minton': {
						points: 1,
						starting: true
					},
					'Pidone': {
						points: 1,
						starting: true
					},
				};
			}
			else{
				return {
					'Tygar': {
						points: 12,
						starting: true
					},
					'Jepsen': {
						points: 18,
						starting: true
					},
					'Chou': {
						points: 10,
						starting: true
					},
					'Maxson': {
						points: 20,
						starting: true
					},
					'Amatangelo': {
						points: 4,
						starting: true
					},
					'Beighlie': {
						points: 4,
						starting: true
					},
					'Jammalamadaka': {
						points: 5,
						starting: true
					},
					'Geribo': {
						points: 7,
						starting: true
					},
					'Wetzel': {
						points: 19,
						starting: true
					},
					'Goggin': {
						points: 1,
						starting: true
					},
					'Lightman': {
						points: 2,
						starting: true
					}
				};
			}
		}
	}