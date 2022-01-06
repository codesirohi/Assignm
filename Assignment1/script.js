function submitData() {
  let id_ls, user_ls, age_ls;

  id_ls = document.getElementById("id").value;
  user_ls = document.getElementById("user").value;
  age_ls = document.getElementById("age").value;

  let userRecords = new Array();
  userRecords = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  userRecords.push({
      ID: id_ls,
      Name: user_ls,
      Age: age_ls,
    });
  

  localStorage.setItem("users", JSON.stringify(userRecords));
  document.getElementById("myForm").reset();
}


// 

// const page = window.open('sfsdf.html')


function buildTable(data){
var table = document.getElementById('myTable')

for (var i = 0; i < data.length; i++){
  var row = `<tr>
          <td>${data[i].name}</td>
          <td>${data[i].age}</td>
          <td>${data[i].birthdate}</td>
        </tr>`
  
    table.innerHTML += row


}
}