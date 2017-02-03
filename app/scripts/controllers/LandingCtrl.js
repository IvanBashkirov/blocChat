(function() {
  
  function LandingCtrl(Message, Room, $uibModal, $scope) {
     this.rooms = Room.all;
     this.messages = null;
     this.processAddRoomRequest = function() {
       $uibModal.open({
         templateUrl: '/templates/modal.html',
         controller: 'ModalCtrl',
         controllerAs: 'modal'
       });
     }
     this.currentRoomID = null;
     this.pickARoom = ((room) => {
       this.currentRoomID = room.$id; 
       this.messages = Message.getByRoomId(room.$id);
     });
     this.submit=(() => {
       Message.submitMessage($scope.text, this.currentRoomID);
     })
  }
  
  angular
    .module('blocChat')
    .controller('LandingCtrl', ['Message', 'Room', '$uibModal', '$scope', LandingCtrl]);
})();