(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child('messages');
    var messages = $firebaseArray(ref);    
    
    return {
      getByRoomId: function(roomUID) {
        return $firebaseArray(ref.orderByChild('roomUID').equalTo(roomUID));
      }
    }
  }
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();