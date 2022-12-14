function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("output");
  table.setAttribute("class", "styled-table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function set_output(text) {
  output = document.getElementById("output")

  if (!output) {
    output = document.createElement("span")
    output.setAttribute("id", "output")
    document.body.appendChild(output)
  }

  output.innerText = text
}

function set_tabelka(text, data) {
  if (data.slice(1,3) == '""') {
    return;
  }
  table = document.getElementById("output")

  if (table) {
    table.remove();
  }
  table = document.createElement("table"),
  main = document.getElementById("main")
  row = table.insertRow();
  table.setAttribute("id", "output");
  table.setAttribute("class", "styled-table");
  main.appendChild(table);

  var perrow = 1;
  d_new = data.replace(/"/g, '').slice(1, -2).split(",")
  console.log(d_new)
  d_new.forEach((value, i) => {
    vals = value.split(":");
    cell = row.insertCell();
    cell.innerHTML = vals[0];
    cell = row.insertCell();
    id = "PasswordCell_" + i
    cell.innerHTML = `<input type="password" value=${vals[1]} id=${id} readonly="readonly">`
    cell3 = row.insertCell();
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.onclick = function () {
      var x = document.getElementById("PasswordCell_" + i);
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    }
    cell3.appendChild(checkbox)
    var next = i + 1;
    if (next % perrow == 0 && next != data.length) { row = table.insertRow(); }
  });
}

function clear_output() {
  set_output("")
}

