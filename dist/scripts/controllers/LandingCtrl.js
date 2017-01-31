(function() {
  
  function LandingCtrl(Room, $uibModal) {
     this.rooms = Room.all;
     this.processAddRoomRequest = function() {
       $uibModal.open({
         templateUrl: '/templates/modal.html'
       });
     console.log('hi');
    }
  }
  
  angular
    .module('blocChat')
    .controller('LandingCtrl', ['Room', '$uibModal', LandingCtrl]);
})();