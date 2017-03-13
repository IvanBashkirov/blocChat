(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref();
    var rooms = $firebaseArray(ref.child('rooms'));

    var addRoom = function(roomName){
      console.log(roomName);
      if (!roomName || (roomName.length > 20)) {
        roomName = 'room' + (rooms.length + 1)
      }
      rooms.$loaded().then(()=>rooms.$add(roomName));
    };
    return {
      all: rooms,
      addRoom
    };
  }

  angular
    .module('blocChat')
    .factory('Room',['$firebaseArray', Room]);
})();
