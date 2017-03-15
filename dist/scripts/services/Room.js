(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref();
    var rooms = $firebaseArray(ref.child('rooms'));

    var addRoom = function(roomName) {
      console.log(roomName);
      if (!roomName || (roomName.length > 21) || (roomName.length < 3)) {
        alert("The room name must be between 4 and 20 characters long")
      } else {
        rooms.$loaded().then(() => rooms.$add(roomName));
      }
    };
    return {
      all: rooms,
      addRoom
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
