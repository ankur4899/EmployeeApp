angular.module('empApp')
.controller('EmployeeListController',
             ['$scope','EmployeeService','$location','$stateParams','$state',function($scope,EmployeeService,$location,$stateParams,$state){
     
     var vm=this;
     
     vm.employeeList=[];
     $scope.searchValue="";

     var initEmpController=function(){
       
      vm.employeeList=EmployeeService.employeeList.data;
      
     }

    vm.addNewEmployee=function(){
          
          $location.path("/employees/add");
    }

    vm.gotoEditEmployee=function(employee){
       
      $state.go('employees/edit', {id : employee.id});

    }

     initEmpController();
     
}]);
