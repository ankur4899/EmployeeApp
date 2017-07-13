angular.module('empApp', [
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/employees');

        // States
        $stateProvider
          .state('employees', {
              url: "/employees",
              templateUrl: 'components/employee.html',
              controller:'EmployeeListController',
              controllerAs:'vm'
          })
          .state('employees/add', {
              url: "/employees/add",
              templateUrl: 'components/addEmployee.html',
              controller:'AddEmployeeController',
              controllerAs:'vm'
          })
          .state('employees/edit', {
              url: "/employees/:id/edit",
              templateUrl: 'components/editEmployee.html',
              controller:'EditEmployeeController',
              controllerAs:'vm',
             
          })
}])