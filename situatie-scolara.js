console.log("scriptul a fost incarcat");

function addData() {
  // Get input values
  let nume = document.getElementById("nameInput").value;
  let prenume = document.getElementById("NicknameInput").value;
  let nota = document.getElementById("numberInput").value;

  // Get the table and insert a new row at the end
  let table = document.getElementById("outputTable");
  let newRow = table.insertRow(table.rows.length);

  // Insert data into cells of the new row
  newRow.insertCell(0).innerHTML = nume;
  newRow.insertCell(1).innerHTML = prenume;
  newRow.insertCell(2).innerHTML = nota;

  // Clear input fields
  clearInputs();
}
