(function() {
  function User($firebaseAuth) {

    const auth = $firebaseAuth();

    function getUserName() {
      if (!auth.$getAuth()) return null;
      return auth.$getAuth().displayName ||
      auth.$getAuth().email ||
      'Anonymous №' + auth.$getAuth().uid;
    }

     signInAnonymously = () => {
      auth.$signInAnonymously().catch((error) => alert(error.message));
    }

    logInWithEmailAndPassword = (email, password) => {
      auth.$signInWithEmailAndPassword(email, password)
        .catch((error) => alert(error.message));
    }

    signUpWithEmailAndPassword = (email, password, displayName) => {
      auth.$createUserWithEmailAndPassword(email, password)
        .catch((error) => alert(error.message))
        .then((user) => user.updateProfile({
          displayName
        }));
    }

    signOut = () => auth.$signOut();

    return {
      userName: getUserName,
      signInAnonymously,
      logInWithEmailAndPassword,
      signUpWithEmailAndPassword,
      signOut,
      auth
    }

  }

  angular
    .module('blocChat')
    .factory('User', ['$firebaseAuth', User]);
})();
