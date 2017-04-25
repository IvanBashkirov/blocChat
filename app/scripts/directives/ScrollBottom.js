angular
  .module('blocChat')
  .directive("scrollBottom", ['$timeout', function($timeout){
    return {
        link: function(scope, element, attr){
            var $id= $("#" + attr.scrollBottom);
            $(element).on("click", function(){
             $timeout(function () {
                $id.scrollTop($id[0].scrollHeight+60);
                });
            });
        }
    }
}]);
