function fetchEmployees() {
  fetch('http://localhost:3000/api/v1/employee')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('dataTable')
      tableBody.innerHTML = ''
      const list = data.data
      list.forEach(item => {
        const row = document.createElement('tr')
        const idCell = document.createElement('td')
        idCell.textContent = item.id
        row.appendChild(idCell)

        const nameCell = document.createElement('td')
        nameCell.textContent = item.name
        row.appendChild(nameCell)

        const deleteCell = document.createElement('td')
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteCell.appendChild(deleteButton);

        row.appendChild(deleteCell)

        tableBody.appendChild(row)
      })
    })
    .catch(error => console.error(error))
}

// TODO
// add event listener to submit button
const SubBtn = document.getElementById("SubBtn")
SubBtn.addEventListener("click", createEmployee)
 
// TODO
// add event listener to delete button
document.getElementById('dataTable').addEventListener('click', deleteEmployee)
// TODO
function createEmployee(e) {
  // get data from input field
  // send data to BE
  // call fetchEmployees
  e.preventDefault()
  const name = document.getElementById("name");
  if (name.value == "") {
    alert("Name cannot be empty!")
    return
  }
  const id = document.getElementById("id");
  if (id.value == "") {
    alert("ID cannot be empty!")
    return
  }
  fetch("http://localhost:3000/api/v1/employee",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ "id": id.value, "name": name.value })
    }
  ).then(response => {
    if (response.status == "409") {
      alert("ID must be unique!")
      return
    }
  }).then(() => fetchEmployees())
}

// TODO
function deleteEmployee(event) {
  // get id
  // send id to BE
  // call fetchEmployees
  if (event.target.classList.contains('btn')) {
    const row = event.target.closest('tr')
    fetch(`http://localhost:3000/api/v1/employee/${row.children[0].innerHTML}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }).then(response => {
        if (response.status == "404") {
          alert("Delete failed!")
          return
        }
      }
      ).then(() => {
        fetchEmployees()
      })
  }
}
fetchEmployees()
