(function() {
  function ModalCtrl(Room) {
    this.addRoom = Room.addRoom;
}
  angular
    .module('blocChat')
    .controller('ModalCtrl', ['Room', ModalCtrl])
})();