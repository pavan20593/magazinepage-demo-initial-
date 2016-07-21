


/*angular.module('app', ['ui.bootstrap']);
function CarouselDemoCtrl($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'http://lorempixel.com/400/200/'
    },
    {
      image: 'http://lorempixel.com/400/200/food';
      caption:
      'hello'
    },
    {
      image: 'http://lorempixel.com/400/200/sports'
    },
    {
      image: 'http://lorempixel.com/400/200/people'
    }
  ];
} */


angular.module('myapp', ['ngAnimate', 'ui.bootstrap']);
angular.module('myapp').controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    
    slides.push({
      image: ['http://www.wallpapereast.com/static/images/HD-Wallpapers1_QlwttNW.jpeg','http://lorempixel.com/','http://lorempixel.com/','http://lorempixel.com/'],
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  } 
});