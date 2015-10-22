angular.module('CelebritiesApp')
.factory('Items', function ItemsFactory($http){
    
  return{
      getAll: function(){
       return $http({method:'GET', url:'data/items.json'});
      }, 
      getOne: function(id){
      return $http({method:'GET', url:'data/items.json'});
      }
    }
});