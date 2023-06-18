function createTable() {
  //Write your code here
   let numberOfRow = prompt("Input number of rows");
   let numberOfColumn = prompt("Input number of columns");

   let table = document.getElementById("myTable");

   let tableString ="";

    for(let i=0;i<numberOfRow;i++){
        let tr = document.createElement("tr");
        for(let j=0;j<numberOfColumn;j++){
            let td = document.createElement('td');
            td.innerText=`Row-${i} Column-${j}`
            tr.appendChild(td);
        }
        table.appendChild(tr);

    }
   
}
