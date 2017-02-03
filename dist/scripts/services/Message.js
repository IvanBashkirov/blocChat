(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child('messages');
    var messages = $firebaseArray(ref);    
    
    return {
      getByRoomId: function(roomUID) {
        return $firebaseArray(ref.orderByChild('roomUID').equalTo(roomUID));
      },
      submitMessage: function(text, roomUID) {
        if (text && roomUID) {
          messages.$loaded().then(()=>messages.$add({
            content: text,
            roomUID,
            sentAt: new Date().toLocaleTimeString(),
            userName: "Anonymous"
          }));
        }
      }
    }
  }
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();