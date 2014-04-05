angular.module("angularRevealSlides")
    .run(function($rootScope){
        $rootScope.left = Reveal.left;
        $rootScope.up = Reveal.up;
        $rootScope.down = Reveal.down;
        $rootScope.right = Reveal.right;
    });