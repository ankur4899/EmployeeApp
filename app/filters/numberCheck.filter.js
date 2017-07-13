angular.module('empApp')
.filter('NumberCheckFilter',function(){


  return function(input){

     if(!(isNaN(input))){

         return input;
     }
    else
    {
        return 'NA';
    }
  }

});