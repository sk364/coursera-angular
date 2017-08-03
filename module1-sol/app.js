

(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.postLunchCheckMessage = '';
    $scope.lunchItems = '';
    $scope.msgColor = 'red';

    $scope.checkIfTooMuch = function() {
      var lunchItemsString = $scope.lunchItems,
          message = '';

      if (!lunchItemsString) {
        message = 'Please enter data first!';
      } else {
        var lunchItemsList = lunchItemsString.split(','),
            itemCount = 0;

        for (var i=0; i < lunchItemsList.length; i++) {
          if (lunchItemsList[i].trim()) {
            itemCount++;
          }
        }

        if (itemCount <= 3) {
          message = 'Enjoy!';
        } else {
          message = 'Too Much!';
        }

        $scope.msgColor = 'green';
      }

      $scope.postLunchCheckMessage = message;
    }
  }

})();
