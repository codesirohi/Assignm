//store data to local storage
function submitData() {
  let id_ls, user_ls, age_ls;

  // id_ls = document.getElementById("id").value;
  user_ls = document.getElementById("user").value;
  age_ls = document.getElementById("age").value;

  let userRecords = new Array();
  userRecords = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  id_ls = userRecords.length + 1;
  id_ls = id_ls.toString();

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

//build table functionvar retrievedData = localStorage.getItem("users");
// var arrayParameter = JSON.parse(retrievedData);

function buildTable(data) {
  var table = document.getElementById("myTable");
  table.innerHTML = "";

  

  // var data = pagination(state.queryset, state.page, state.row)

  for (var i = 0; i < data.length; i++) {
    var row = `
    <tr>
        
        <td style="display:none">${data[i].ID}</td>
        <td>${data[i].Name}</td>
        <td>${data[i].Age}</td>
        <td>
          <span>
            <button class="btn1 edit" onclick=onedit("${data[i].ID}")>Edit</button>
            <button class="btn1 remove" data-testid="${data[i].ID}">Remove</button>
          </span>
        </td>

    </tr>`;

    table.innerHTML += row;
  }
}

function onedit(id) {
  let url = "add_new.html?id=" + id;

  setTimeout(function () {
    window.location = url;
  }, 200);

  // console.log(id);

  
  // // // console.log(userRec)
  }

///search function
function searchTable(value, data) {
  var filteredData = [];
  value = value.toString();

  for (var i = 0; i < data.length; i++) {
    value = value.toLowerCase();
    var name = data[i].Name.toLowerCase();
    if (name.includes(value)) {
      filteredData.push(data[i]);
    }
  }

  return filteredData;
}

function updateData(){

  let tempId = document.getElementById("id").value;
  let tempUser = document.getElementById("user").value;
  let tempAge = document.getElementById("age").value;
  let userRecTemp = JSON.parse(localStorage.getItem("users"));

  for (var i = 0; i < userRecTemp.length; i++) {
  if (userRecTemp[i].ID == tempId) {
    
    console.log(typeof(tempId),typeof(tempUser), typeof(tempAge))
    userRecTemp.splice(i, 1,{ID: tempId, Name: tempUser, Age: tempAge});

    // userRecTemp[i].ID = tempId;
    // userRecTemp[i].Name = tempUser;
    // userRecTemp[i].Age = tempAge;

    localStorage.setItem("users", JSON.stringify(userRecTemp));
    document.getElementById("myForm").reset();
  }
}

}

//delete an item from the list
function deleteItem(key, dataArray) {
  // window.alert("Delete Employee");

  // console.log(key)
  key = key.toString();

  for (var i = 0; i < dataArray.length; i++) {
    if (dataArray[i].ID === key) {
      //using the splice method because delete method won't reindex
      //the elements in the array
      dataArray.splice(i, 1);
      //updating the deleted element in local storage
      localStorage.setItem("users", JSON.stringify(dataArray));
      //reloading the page to refresh the local storage
      location.reload();
      return dataArray;
    }
  }
}




let queryset= [];
let page = 1;
const row = 8;
let pages = 1;


function pagination(queryset, page, row) {
  var trimStart = (page - 1) * row;
  var trimEnd = trimStart + row;
  var trimmedData = queryset.slice(trimStart, trimEnd);
  var pagesNo = Math.ceil(queryset.length / row);
  pages= pagesNo;
  
  return trimmedData;    
	
}

