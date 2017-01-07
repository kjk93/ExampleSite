angular.module('common.directives.scrollbar', [])
	.directive('scrollbar', scrollbar);

	scrollbar.$inject=['$document', '$interval'];

	function scrollbar($document, $interval) {
		var directive = {
			Restrict: 'A',
			scope: {
				scrollbar: '=?'
			},
			link: link
		};

		return directive;

		function link(scope, elem){
			var parent = elem.parent();
			var sibs = angular.element(elem).siblings();
			var delY = 0;
			var top = 0;
			var changeTop = 0;
			var scrollableHeight = 0;
			var maxHeight = 0;
			var origTop = 0;

			parent.addClass('scrollbarParent');

			elem.addClass('scrollbarElem');

			$document.ready(function(){
				sibs
				.addClass('scrollbarSib')
				.css({
					'width': parent.css('width'),
					'background-color': 'white'
				});

				elem.css('top', scope.scrollbar.topPadding || 0);

				origTop = elem.position().top;
			});

			elem.on('wheel', function(event){
				event.preventDefault();
				delY = event.originalEvent.deltaY;
				top = elem.position().top;
				changeTop = top + delY;
				scrollableHeight = elem.outerHeight(true);
				maxHeight = scrollableHeight - parent.height();

				if(changeTop < -maxHeight){
					changeTop = -maxHeight;
				}
				else if(changeTop > origTop){
					changeTop = origTop;
				}

				elem.css('top', changeTop + 'px');


			});
		}
	}