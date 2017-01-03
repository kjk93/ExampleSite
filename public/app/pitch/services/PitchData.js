angular.module('pitch.services.PitchData', [])
	.factory('PitchData', PitchData);

	function PitchData(){
		var service = {
			formations: formations
		};

		return service;

		function formations(){
			return {
				'Offensive': [
					'4-3-3',
					'4-2-3-1',
					'4-2-1-3',
					'3-4-3',
					'3-3-1-3'
				],
				'Neutral': [
					'4-4-2',
					'4-5-1',
					'4-3-2-1',
					'3-4-2-1',
					'3-6-1',
					'1-4-3-2',
					'3-5-2'
				],
				'Defensive': [
					'4-4-1-1',
					'4-1-2-1-2',
					'5-3-2',
					'4-6-0'
				],
				'Custom': [
					'Create'
				]
			};
		}
	}