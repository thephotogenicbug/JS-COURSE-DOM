// get elements from userlist.html

const userList = document.querySelectorAll(".name-list li");
const listInput = document.querySelectorAll(".list-input"); // Access List Input
const addListBtn = document.querySelector(".addList");

console.log(userList);

// lets take the userList and manipulate them
// u can access each individual user and do something to it
for (user of userList) {
  // listen on a click
  user.addEventListener("click", function () {
    // this keyword means the element we gonna click on
    // access each user on click
    console.log(this);
  });
}
// change color on click
for (user of userList) {
  // listen on a click
  user.addEventListener("click", function () {
    // this keyword means the element we gonna click on
    // access each user on click
    console.log(this);
    this.style.color = "red";
  });
}
