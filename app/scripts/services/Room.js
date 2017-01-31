(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child('rooms');
    var rooms = $firebaseArray(ref);

    var addRoom = function(){
      console.log(rooms);
      rooms.$loaded().then(()=>console.log(rooms.length));
      room: 'room';
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