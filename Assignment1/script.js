//store data to local storage
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

//if table is empty diable search
function hide(data) {
  if (data.length == 0) {
  }
}

//build table function

function buildTable(data) {
  var table = document.getElementById("myTable");
  table.innerHTML = "";
  for (var i = 0; i < data.length; i++) {
    var row = `
    <tr>
        <td>${data[i].ID}</td>
        <td>${data[i].Name}</td>
        <td>${data[i].Age}</td>
        <td>
          <span>
            <button class="btn1" data-testid="${data[i].ID}">Edit</button>
            <button class="btn1 remove" data-testid="${data[i].ID}">Remove</button>
          </span>
        </td>

    </tr>`;

    table.innerHTML += row;
  }
}
///search function
function searchTable(value, data) {
  var filteredData = [];

  for (var i = 0; i < data.length; i++) {
    value = value.toLowerCase();
    var name = data[i].ID.toLowerCase();
    if (name.includes(value)) {
      filteredData.push(data[i]);
    }
  }

  return filteredData;
}



//edit the list
function editItem(td) {
  var testid = $(this).val("testid");
}

//delete an item from the list
function deleteItem(key, dataArray) {
  window.alert("Delete Employee");

  // console.log(key)

  for (var i = 0; i < dataArray.length; i++){
  
    if (dataArray[i].ID === key){
      
      //using the splice method because delete method won't reindex 
      //the elements in the array
      dataArray.splice(i,1);
      //updating the deleted element in local storage
      localStorage.setItem("users", JSON.stringify(dataArray));
      //reloading the page to refresh the local storage
      location.reload()
      return dataArray;
      
    }
  }
  
  
}
