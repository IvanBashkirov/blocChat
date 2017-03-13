(function() {
  function LogInModalCtrl(User, $scope, $uibModalInstance) {

    this.signInAnonymously = () => {
      User.signInAnonymously();
      $uibModalInstance.close();
    }

    this.logInWithEmailAndPassword = () => {
      User.logInWithEmailAndPassword($scope.logInEmail, $scope.logInPassword);
      $uibModalInstance.close();
    }

    this.cancel = () => {
      $uibModalInstance.close();
    };

  }
  angular
    .module('blocChat')
    .controller('LogInModalCtrl', ['User', '$scope', '$uibModalInstance', LogInModalCtrl])
})();
