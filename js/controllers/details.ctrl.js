angular.module('CelebritiesApp')

.controller('DetailsCtrl', function($scope, $routeParams, Items){
    $scope.itemID = $routeParams.itemID;
   
    //$http({method:'GET', url:'data/items.json'})
    Items.getOne($routeParams.itemID)
    .then(function(response){
        //success
        
      var allItems = response.data.items;
        allItems.forEach(function( i ){
            
            if ( i.id == $routeParams.itemID){
                $scope.item = i;
            }
        });
        
    }, function(response){
        //error
        
    });
    
});