(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref();
    var rooms = $firebaseArray(ref.child('rooms'));

    var addRoom = function(){
      rooms.$loaded().then(()=>rooms.$add('room' + (rooms.length + 1)));
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