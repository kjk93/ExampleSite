angular.module('common.services.NewsFeed', [])
	.factory('NewsFeed', NewsFeed);

	function NewsFeed(){
		var service = {
			getFeed: getFeed
		};

		return service;

		function getFeed(){
			/* jshint ignore:start */
			return [
				{
					title: 'Lorem ipsum',
					body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean felis ex, ultrices a massa vel, auctor sollicitudin elit. Suspendisse aliquet accumsan diam id tincidunt. Sed vel tempus tortor. Donec sed auctor urna. Vivamus vel lobortis tellus. Curabitur tempus orci at lacinia semper. Nulla ligula lectus, condimentum vel sem et, fringilla ultricies est. Pellentesque felis libero, pharetra efficitur vulputate nec, efficitur et leo. Proin elementum risus ut lorem placerat suscipit. Mauris ullamcorper sem sed augue maximus, ac commodo eros condimentum. Aenean hendrerit mi felis, at pretium nisl elementum non. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
				},
				{
					title: 'Nullam dui',
					body: 'Nullam dui felis, ultricies eu augue ac, vestibulum mattis urna. Integer id sem mauris. Nam dignissim molestie nibh in mollis. Curabitur efficitur vehicula erat sagittis venenatis. Duis aliquam ac velit quis condimentum. Duis ultrices, ex sit amet mollis tempus, velit dolor malesuada est, sit amet sagittis mi risus sed nibh. Suspendisse sollicitudin neque turpis, vel venenatis nulla sodales nec. Aenean varius neque eget dolor egestas, condimentum laoreet nibh pulvinar. Suspendisse dapibus condimentum elit, eu feugiat lacus tincidunt quis. Sed nec lobortis erat. Vivamus ultrices rutrum mattis. Cras volutpat massa mi, vitae pretium velit viverra at.'
				},
				{
					title: 'Cras a velit',
					body: 'Cras a velit et mi finibus bibendum et semper dui. Suspendisse ac nulla in mauris porttitor tincidunt at et eros. Curabitur vitae aliquam enim, sit amet venenatis lorem. Donec rutrum, leo nec auctor accumsan, arcu nisi auctor erat, non scelerisque ex neque a diam. Praesent vitae lobortis erat. Nullam vitae pulvinar sapien, non mattis est. Nullam venenatis ullamcorper egestas. Suspendisse tincidunt ligula libero, sollicitudin elementum ipsum tincidunt ac. Suspendisse rutrum erat non accumsan gravida. Aliquam mattis sed nisi ac commodo.'
				},
				{
					title: 'Vivamus urna',
					body: 'Vivamus urna nisl, varius sit amet consequat ut, eleifend eu enim. Curabitur et efficitur mi. Quisque mattis blandit viverra. Nunc quis nulla sit amet libero pulvinar viverra. Fusce viverra tempor neque ac efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean rutrum blandit mauris, eu dignissim ligula aliquam sit amet. Curabitur nulla justo, scelerisque et mauris ut, placerat imperdiet risus. Nullam feugiat lorem eu tempus luctus. Duis luctus ultrices purus, eget fermentum elit placerat vel. Phasellus vehicula quis tortor vel molestie. Aliquam vestibulum nisl non nulla ullamcorper, vitae molestie odio blandit.'
				},
				{
					title: 'Duis aliquam',
					body: 'Duis aliquam ante massa, ac faucibus orci cursus aliquam. Vivamus euismod dui eget finibus dapibus. Fusce eu lectus risus. Fusce velit ante, posuere ac posuere id, luctus non lacus. Nulla id nulla eget arcu finibus viverra. Aenean ac ligula tincidunt justo vehicula consectetur ut nec arcu. Proin condimentum nulla sed aliquet lacinia. Aenean dignissim a sem quis pulvinar. Phasellus sodales quis lorem at consectetur. Pellentesque ac diam quis nisl luctus efficitur. Sed bibendum suscipit accumsan. In et orci sollicitudin, iaculis turpis nec, sagittis justo. Vivamus risus nisi, iaculis id imperdiet ac, gravida non est.'
				}
			];
			/* jshint ignore:end */
		}
	}