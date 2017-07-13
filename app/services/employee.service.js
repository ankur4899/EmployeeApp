angular.module('empApp')
.service('EmployeeService',function(){

  this.employeeList={
      "data":[
          {
          "id":1,
          "name":"Jhon",
          "phone":"9999999999",
          "address":
          {
              "city":"Pune",
              "address_line1":"ABC road",
              "address_line2":"XYZ building",
              "postal_code":"12455"

          }
      },
      {
          "id":2,
          "name":"Jacob",
          "phone":"AZ99A99PQ9",
          "address":
          {
              "city":"Pune",
              "address_line1":"PQR Road",
              "address_line2":"ABC Building",
              "postal_code":"13455"

          }
      },
      {
          "id":3,
          "name":"Ari",
          "phone":"145458522",
          "address":
          {
              "city":"Mumbai",
              "address_line1":"ABC Road",
              "address_line2":"XYZ Building",
              "postal_code":"12455"

          }
      },
      
      ]
  };
  

  this.addEmployee=function(employee){

      this.employeeList.data.push(employee);

  }
  
 this.findEmployeeById=function(empId){
     var data="";
    
     angular.forEach(this.employeeList.data,function(item){
               
         if(item.id===parseInt(empId))
         {   
             data= item;
         }
     });

     return data;
  }
  
  this.updateEmployee=function(data){
      angular.forEach(this.employeeList.data,function(item){
               
         if(item.id===parseInt(data.id))
         {   
             item.name=data.name;
             item.phone=data.phone;
             item.address.city=data.address.city
             item.address.address_line1=data.address.address_line1;
             item.address.address_line2=data.address.address_line2;
             item.address.postal_code=data.address.postal_code;
         }
     });
  }

})