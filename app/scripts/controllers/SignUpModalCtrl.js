(function() {
  function SignUpModalCtrl(User, $scope, $uibModalInstance) {

    this.signUpWithEmailAndPassword = () => {
      User.signUpWithEmailAndPassword($scope.signUpEmail, $scope.signUpPassword, $scope.signUpDisplayName);
      $uibModalInstance.close();
    }


    this.cancel = () => {
      $uibModalInstance.close();
    };

  }
  angular
    .module('blocChat')
    .controller('SignUpModalCtrl', ['User', '$scope', '$uibModalInstance', SignUpModalCtrl])
})();
