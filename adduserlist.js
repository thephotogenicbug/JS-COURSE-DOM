// get elements from userlist.html

const userList = document.querySelector(".name-list li");
const listInput = document.querySelector(".list-input"); // Access List Input
const addListBtn = document.querySelector(".addList");

// Access list input by calling listInput.value
console.log(listInput.value);

addListBtn.addEventListener('click', function(){
  // Create an li
  const newLi = document.createElement("LI");

  // create some content to insert into li
  // Add listInput.value inside const liContent = document.createTextNode to make it dynamic
  const liContent = document.createTextNode(listInput.value);
  console.log(listInput.value);

  // Add the input value inside that new li
  newLi.appendChild(liContent)
  // Attaching the li to user list
  userList.appendChild(newLi)
})