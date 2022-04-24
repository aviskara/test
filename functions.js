async function loadIntoTable(url, table) {
  const amazonRow = table.querySelector('[name="amazon row"]');
  const status = amazonRow.querySelector('[name="status"]')
  fetch(url)
    .then(response => response.json())
    .then(data => {
  
  const { availability } = data;

  //clear table
  status.innerHTML = "";
  
  const stockDiv = document.createElement("div");
  const stockText = document.createElement("p");
  
  stockText.textContent = availability;

  if (availability == "In Stock") {
    stockDiv.className = "InStock";
  }
  else {
    stockDiv.className = "OutOfStock";
  }

  //populate data table
  stockDiv.appendChild(stockText);
  status.appendChild(stockDiv);
  })
}

loadIntoTable("https://csce315team38.herokuapp.com/amazon/4", document.getElementById("PS5 table"));