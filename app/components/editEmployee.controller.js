angular.module('empApp')
.controller('EditEmployeeController',
             ['$scope','EmployeeService','$location','$stateParams',function($scope,EmployeeService,$location,$stateParams){
     
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
     vm.empId=$stateParams.id;
     vm.employeeData="";
     vm.submitted=false;
     var initEditEmpController=function(){
       
        vm.employeeData=EmployeeService.findEmployeeById(vm.empId);
        vm.name= vm.employeeData.name;
        vm.phoneNumber=parseInt(vm.employeeData.phone);
        vm.city= vm.employeeData.address.city;
        vm.address1= vm.employeeData.address.address_line1;
        vm.address2= vm.employeeData.address.address_line2;
        vm.postalCode= vm.employeeData.address.postal_code;

        console.log("vm.employeeData", vm.employeeData);
     }
    

    vm.goBack=function(){
        $location.path("/employees");
    }

     vm.editEmployee=function(form){
      vm.submitted=true;
      var isValid=form.$valid;
      console.log("Form data",form);
      if(isValid)
      {
        vm.formData= {
            "id":vm.employeeData.id,
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
       
        EmployeeService.updateEmployee(vm.formData)
        vm.goBack();
     }
    }

     initEditEmpController();
  
   
}]);
