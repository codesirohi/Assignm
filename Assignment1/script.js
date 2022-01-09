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

// function del(data) {
//   window.alert("Are you sure?");
//   // var json = data;
//   // var key = "foo";
//   // delete json[key]; // Removes the element from the dictionary.
// }

//edit the list
function editItem() {
  var testid = $(this).val("testid");
}

//delete an item from the list
// function deleteItem(key, data1) {
//   window.alert("Are you sure you want to delete Employee data.");

//   for (var i = 0; i < data1.length; i++) {
//     console.log(data1[i])
//     // if (key == data1[i].ID) {
      
//     //    delete data1[i];
//     // }
//   }

//   return data1;
// }
