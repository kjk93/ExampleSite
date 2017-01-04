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
					'Jim Isola': {
						points: 12,
						starting: true
					},
					'Mike Cesar': {
						points: 14,
						starting: true
					},
					'Nick Wagen': {
						points: 16,
						starting: true
					},
					'John Davy': {
						points: 9,
						starting: true
					},
					'Luke Good': {
						points: 5,
						starting: true
					},
					'James Diller': {
						points: 8,
						starting: true
					},
					'Neil Grabbe': {
						points: 7,
						starting: true
					},
					'Kevin Vela-estrada': {
						points: 10,
						starting: true
					},
					'Milton Oliviero': {
						points: 2,
						starting: true
					},
					'Oliver Minton': {
						points: 1,
						starting: true
					},
					'Desmond Pidone': {
						points: 1,
						starting: true
					},
					'Damien Pratt': {
						points: 0,
						starting: false
					},
					'Laurel Campos': {
						points: 0,
						starting: false
					},
					'Abbey Duran': {
						points: 0,
						starting: false
					},
					'Mireya Frank': {
						points: 0,
						starting: false
					},
				  'Jerome Hart': {
						points: 0,
						starting: false
					},
				  'Ruben Oliver': {
						points: 0,
						starting: false
					},
				  'Cash Sellers': {
						points: 0,
						starting: false
					} 
				};
			}
			else{
				return {
					'Carl Tygar': {
						points: 12,
						starting: true
					},
					'Sam Jepsen': {
						points: 18,
						starting: true
					},
					'Hank Chou': {
						points: 10,
						starting: true
					},
					'Lou Maxson': {
						points: 20,
						starting: true
					},
					'Matt Amatangelo': {
						points: 4,
						starting: true
					},
					'Hal Beighlie': {
						points: 4,
						starting: true
					},
					'Bob Jammalamadaka': {
						points: 5,
						starting: true
					},
					'George Geribo': {
						points: 7,
						starting: true
					},
					'Will Wetzel': {
						points: 19,
						starting: true
					},
					'Grant Goggin': {
						points: 1,
						starting: true
					},
					'Blake Lightman': {
						points: 2,
						starting: true
					}
				};
			}
		}
	}