(function () {

  function LandingCtrl(Message, Room, $location, $anchorScroll, $firebaseAuth, $uibModal, $scope) {
    this.messages = null;
    this.userName = null;
    this.currentRoomID = null;
    
    this.doorHover = function(e) {
      e.target.setAttribute('src', 'assets/images/openDoor.png');
      e.target.style.transform = 'scale(1.1)'
    }
    
    this.doorHoverOff = function(e) {
      e.target.setAttribute('src', 'assets/images/closedDoor.png');
      e.target.style.transform = 'scale(1)'
    }
    this.rooms = Room.all;
    const auth = $firebaseAuth();
    
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
        return;
      }
      this.currentRoom = room;
      this.currentRoomID = room.$id;
      this.messages = Message.getByRoomId(room.$id);
    });
    
    function getCurrUserName(){
      if (!auth.$getAuth()) return null;
      return auth.$getAuth().displayName || 'Anonymous №'+ auth.$getAuth().uid;
    }
    
    this.submit = (() => {
      if (!this.currentRoom) return;
      Message.submitMessage($scope.text, this.currentRoomID, getCurrUserName());
      $scope.text = null;
    });
    
    this.signInAnonymously = () => {
      this.userName = null;
      auth.$signInAnonymously().catch((error) => alert(error.message));
    }
    
    this.signInWithEmailAndPassword = () => {
      auth.$signInWithEmailAndPassword($scope.email, $scope.emailPassword)
        .catch((error) => alert(error.message));
    }
    this.createUserWithEmailAndPassword = () => {
      auth.$createUserWithEmailAndPassword($scope.createEmail, $scope.createEmailPassword)
        .catch((error) => alert(error.message))
        .then((user) => user.updateProfile({displayName : $scope.displayName}));
    }
    this.signOut = () => auth.$signOut();
    
  }

  angular
    .module('blocChat')
    .controller('LandingCtrl', ['Message', 'Room', '$location', '$anchorScroll', '$firebaseAuth', '$uibModal', '$scope', LandingCtrl]);
})();
