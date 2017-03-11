(function () {

  function LandingCtrl(Message, Room, $uibModal, $scope) {
    this.messages = null;
    this.currentRoomID = null;
    this.rooms = Room.all;

    this.doorHover = function(e) {
      e.target.setAttribute('src', 'assets/images/openDoor.png');
      e.target.style.transform = 'scale(1.1)'
    }

    this.doorHoverOff = function(e) {
      e.target.setAttribute('src', 'assets/images/closedDoor.png');
      e.target.style.transform = 'scale(1)'
    }


    this.processAddRoomRequest = function () {
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl',
        controllerAs: 'modal'
      });
    }

    this.pickARoom = ((room) => {
      if (room.$id === this.currentRoomID) {
        this.currentRoomID = null;
      } else {
        this.currentRoomID = room.$id;
        this.messages = Message.getByRoomId(room.$id);
      }
    });

    this.submit = (() => {
      if (!this.currentRoomID) return;
      Message.submitMessage($scope.text, this.currentRoomID);
      $scope.text = null;
    });
  }

  angular
    .module('blocChat')
    .controller('LandingCtrl', ['Message', 'Room', '$uibModal', '$scope', LandingCtrl]);
})();
