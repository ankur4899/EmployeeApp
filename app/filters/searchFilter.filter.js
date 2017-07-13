angular.module('empApp')
.filter('searchFilter', function () {  
   return function(inputs,filterValues) {
     
       if(filterValues=="")
       {
           return inputs;
       }
      var output = [];
      angular.forEach(inputs, function (input) {
        if ((filterValues.toUpperCase()).indexOf((input.name).toUpperCase()) !== -1)
        {
           output.push(input);
        }
        else if((filterValues.toUpperCase()).indexOf((input.address.city).toUpperCase()) !== -1)
        {
             output.push(input);
        }   
       });
       return output;
   };
});