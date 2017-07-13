angular.module('empApp')
.controller('AddEmployeeController',
             ['$scope','EmployeeService','$location',function($scope,EmployeeService,$location){
     
     var vm=this;
     
     vm.employeeList=[];
     $scope.searchValue="";
     vm.submitted=false;
     vm.name="";
     vm.phoneNumber="";
     vm.city="";
     vm.address1="";
     vm.address2="";
     vm.postalCode="";

     var initAddEmpController=function(){
       
       EmployeeService.employeeList.length+1;
      
     }
    

    vm.goBack=function(){
        $location.path("/employees");
    }

     vm.addEmployee=function(form){
      vm.submitted=true;
      var isValid=form.$valid;
     
      if(isValid)
      {
        vm.formData= {
            "id": EmployeeService.employeeList.data.length+1,
            "name": vm.name,
            "phone":vm.phoneNumber,
            "address":
            {
                "city":vm.city,
                "address_line1":vm.address1,
                "address_line2":vm.address2,
                "postal_code":vm.postalCode

            }
        }
        EmployeeService.addEmployee(vm.formData);
        vm.goBack();
     }
    }

     initAddEmpController();
  
   
}]);
