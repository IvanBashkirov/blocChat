(function() {
  function Message(User, $firebaseArray) {
    var ref = firebase.database().ref().child('messages');
    var messages = $firebaseArray(ref);
    userName = User.userName;

    return {
      getByRoomId: function(roomUID) {
        return $firebaseArray(ref.orderByChild('roomUID').equalTo(roomUID));
      },
      submitMessage: function(text, roomUID) {
        if (!userName() || userName() === undefined) {
          alert('Please sign in first!');
        }
        else if (text && roomUID) {
          messages.$loaded().then(()=>messages.$add({
            content: text,
            roomUID,
            sentAt: new Date().toLocaleTimeString(),
            userName: userName()
          }));
        }
      }
    }
  }
  angular
    .module('blocChat')
    .factory('Message', ['User', '$firebaseArray', Message]);
})();
