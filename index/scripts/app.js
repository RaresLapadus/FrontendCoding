/**
 * Created by rares on 5/11/2015.
 */
var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];
function showList() {
    var bt1 = document.createElement('Vizualizare');
    var bt2 = document.createElement('Stergere');
    bt1.type = "button";
    bt2.type = "button";
    var myTable = '<table border="1" class="table table-condensed"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th>Vizualizare</th><th>Stergere</th></tr>';
    for(var i in employeesList) {
        myTable +=
            '<tr><td>'+employeesList[i].firstName+'</td><td>'+
                employeesList[i].lastName+'</td><td>'+employeesList[i].phone+'</td><td>'+
                employeesList[i].salary+'</td><td><button onclick=view('+i+')>View</button></td> ' +
                '<td><button onclick=deleteRow('+i+')>Delete</button></td></tr>';
    }
    myTable += '<tr><td>'+ last() +'</td><td>'+ +'</td><td>'+ +'</td><td>' +average()+ '</td></tr>';
    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone,salary));
    showList();
    document.getElementById("firstName").value="";
    document.getElementById("lastName").value="";
    document.getElementById("phone").value="";
    document.getElementById("salary").value="";
}

function sum() {
    var sum = 0;
    for (var i in employeesList) {

        sum = sum + parseFloat(employeesList[i].salary);
    }
    var container = document.getElementById('sum');
    container.innerHTML = "<span>"+sum+"</span>";
}

function Delete() {
    employeesList.pop();
    showList();
}

function view(i){
    alert("Employee: "+employeesList[i].firstName+" "+ employeesList[i].lastName+" "+employeesList[i].salary+ " "+employeesList[i].phone+ " " );

}

function deleteRow(i){
    employeesList.splice(i,1);
    showList()
}

function average(){
    var average = 0;
    var c= 0;
    var sum = 0;
    for (var i in employeesList) {
       sum = sum + parseFloat(employeesList[i].salary);
        c=c+1;
    }
   return average = sum/c;
}

function last(){

/*
    var frequency = {};
    var max = 0;
    var result = "asd";
   for(var v in employeesList){
       frequency[employeesList[v]]=(frequency[employeesList[v]] || 0)+1;
       if(frequency[employeesList[v]] > max) {
           max = frequency[employeesList[v]];
           result = employeesList[v];
    }
*/
    function GetMaxFrequency () {
        var frequency = [];  // array of frequency.
        var result;   // holds the max frequency element.

        for(var v in employeesList) {
            var target = employeesList[v];
            var numOccurences = $.grep(employeesList, function (elem) {
                return elem === target;
            }).length;
            frequency.push(numOccurences);

        }
        maxValue = Math.max.apply(this, frequency);
        result = store[$.inArray(maxValue,frequency)];
        return result;
    }
}




