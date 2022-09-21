//Question1
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (const key of data) {
    let th = document.createElement("th");
    let item = document.createTextNode(key);
    th.appendChild(item);
    row.appendChild(th);
  }
}

function generateTableBody(table, data) {
  let tbody = table.createTBody();
  for (const element of data) {
    let row = tbody.insertRow();
    for (key in element) {
      let td = document.createElement("td");
      let item = document.createTextNode(element[key]);
      td.appendChild(item);
      row.appendChild(td);
    }
  }
}
let table = document.querySelector("#table");
generateTableHead(table, tableInfo.tableHeader);
generateTableBody(table, tableInfo.tableContent);

//Question2
const data = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
//orderList
let orderList = document.querySelector("#orderList");

data.forEach((item) => {
  let li = document.createElement("li");
  li.textContent = item;
  orderList.appendChild(li);
});
//unorderList
let unorderList = document.querySelector("#unorderList");

let nodes = data.map((item) => {
  let li = document.createElement("li");
  li.textContent = item;
  return li;
});
unorderList.append(...nodes);

//Question3
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];
let dropDown = document.getElementById("city");
dropDownList.map(({ value, content }) => {
  let option = document.createElement("option");
  option.textContent = content;
  option.value = value;
  dropDown.appendChild(option);
});
