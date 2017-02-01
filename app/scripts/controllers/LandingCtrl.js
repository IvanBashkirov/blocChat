(function() {
  
  function LandingCtrl(Room, $uibModal) {
     this.rooms = Room.all;
     this.processAddRoomRequest = function() {
       $uibModal.open({
         templateUrl: '/templates/modal.html',
         controller: 'ModalCtrl',
         controllerAs: 'modal'
       });
     }
  }
  
  angular
    .module('blocChat')
    .controller('LandingCtrl', ['Room', '$uibModal', LandingCtrl]);
})();