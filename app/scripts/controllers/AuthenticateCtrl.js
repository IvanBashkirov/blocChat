(function() {
  function AuthenticateCtrl(User, $uibModal) {

    this.logInButton = () => {
      $uibModal.open({
        templateUrl: '/templates/logInModal.html',
        controller: 'LogInModalCtrl',
        controllerAs: 'logInModal',
        windowTopClass: 'my-login-modal-width'
      });
    }

    this.signUpButton = () => {
      $uibModal.open({
        templateUrl: '/templates/signUpModal.html',
        controller: 'SignUpModalCtrl',
        controllerAs: 'signUpModal'
      });
    }

    auth = User.auth;
    this.userName = User.userName;
    this.isAuth = auth.$getAuth;

    auth.$onAuthStateChanged(function(user) {
      this.userName();
    })

    this.signOut = () => {
      User.signOut();
    }
  }
  angular
    .module('blocChat')
    .controller('AuthenticateCtrl', ['User', '$uibModal', AuthenticateCtrl])
})();
