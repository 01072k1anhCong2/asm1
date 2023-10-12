"use strict";
const submitBtn = document.getElementById("submit-btn");
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color-1");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");
const deleteData = document.getElementById("delete-data");

// ----------------------------
const thantbody = document.getElementById("tbody");
//add data for pet of list
const petArr = [];

const clearInput = () => {
  idInput.value = "";
  nameInput.value = "";
  ageInput.value = "";
  typeInput.value = "Select type";
  weightInput.value = "";
  lengthInput.value = "";
  colorInput.value = "";
  breedInput.value = "";
  vaccinatedInput.checked = false;
  dewormedInput.checked = false;
  sterilizedInput.checked = false;
};

function validateData(data) {
  if (idInput.value == "") {
    alert("id must input");
    return false;
  }
  if (nameInput.value == "") {
    alert("name must input");
    return false;
  }

  if (parseInt(data.age) < 1 || parseInt(data.age) > 15 || !data.age) {
    alert("Age must be between 1 and 15!");
    return false;
  }
  if (parseInt(data.weight) < 1 || parseInt(data.weight) > 15 || !data.weight) {
    alert("weight must be between 1 and 15!");
    return false;
  }
  if (
    parseInt(data.length) < 1 ||
    parseInt(data.length) > 100 ||
    !data.length
  ) {
    alert("length must be between 1 and 100!");
    return false;
  }
  if (data.type == "Select Type") {
    alert("Please select Type!");
    return false;
  }
  if (data.breed == "Select Breed") {
    alert("Please select Breed!");
    return false;
  } else {
    return true;
  }
}

function renderTableData(petArr) {
  thantbody.innerHTML = "";

  for (let i = 0; i < petArr.length; i++) {
    let row = document.createElement("tr");
    row.innerHTML = `<th scope="row">${petArr[i].id}</th>
  <td>${petArr[i].name}</td>
  <td>${petArr[i].age}</td>
  <td>${petArr[i].type}</td>
  <td>${petArr[i].weight}</td>
  <td>${petArr[i].length}</td>
  <td>${petArr[i].breed}</td>
  <td>
  <i class="bi bi-square-fill" style="color: ${petArr[i].color}"></i>
  </td>
  <td><i class="bi ${
    petArr[i].vaccinated ? ` bi-check-circle-fill` : ` bi-x-circle-fill`
  }"></i></td>
  <td><i class="bi ${
    petArr[i].dewormed ? ` bi-check-circle-fill` : ` bi-x-circle-fill`
  }"></i></td>
  <td><i class="bi ${
    petArr[i].sterilized ? ` bi-check-circle-fill` : ` bi-x-circle-fill`
  }"></i></td>
  <td>${petArr[i].data}</td>
  <td>
  <button type="button" class="btn btn-danger" onclick="deletePet('${
    petArr[i].id
  }')"
    >Delete</button>
  </td>`;
    thantbody.appendChild(row);
  }
  // const deletePet = (petId) => {
  //   // Confirm before deletePet
  //   if (confirm("Are you sure?")) {
  //     console.log(petId);
  //     alert("duoc roi ne");
  //   }
  // };
}

submitBtn.addEventListener("click", function () {
  const data = {
    id: idInput.value,
    name: nameInput.value,
    age: parseInt(ageInput.value),
    type: typeInput.value,
    weight: parseInt(weightInput.value),
    length: parseInt(lengthInput.value),
    color: colorInput.value,
    breed: breedInput.value,
    vaccinated: vaccinatedInput.checked,
    dewormed: dewormedInput.checked,
    sterilized: sterilizedInput.checked,
    date: new Date(),
  };

  const validate = validateData(data);

  if (validate) {
    petArr.push(data);
    clearInput();
    renderTableData(petArr);
    console.log(data);
  } else {
    console.log(validate);
  }
});
