angular.module('FutbolFrenzy',[

	//Libraries
	'ngRoute',

	//Common
	'app.common',

	//Modules
	'app.header',
	'app.pitch'
])

.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/pitch', {
			templateUrl: 'app/pitch/views/pitch.tpl.html',
			controller: 'PitchCtrl',
			controllerAs: 'pitch'
		})
		.otherwise({
			redirectTo: '/pitch'
		});
}]);