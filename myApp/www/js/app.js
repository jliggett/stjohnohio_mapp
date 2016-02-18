// Ionic App

angular.module('ionicApp', ['ionic']) 

.controller('MyCtrl', function($scope) {
  $scope.groups = [];
  var myStringArray = ["Events","Podcasts","Give","Contact Us"]
  var myColors = ["#497094","#367ccf","#3d2415","#eaeae4"]
  var arrayLength = myStringArray.length;
  for (var i=0; i<arrayLength; i++) {
    $scope.groups[i] = {
      name: myStringArray[i],
      color: myColors[i],
      items: []
    };
    for (var j=0; j<3; j++) {
      $scope.groups[i].items.push(i + '-' + j);
    }
  }
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
  
});