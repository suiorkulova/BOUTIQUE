// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// let items = document.getElementById("items");
// let btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//   fetch("https://jsonplaceholder.typicode.com/todos/")
//     .then((response) => response.json())
//     .then((data) =>
//       data.forEach((el) => {
//         items.innerHTML += `
//         <tr>
//         <td>${el.userId}</td>
//         <td>${el.id}</td>
//         <td>${el.title}</td>
//         </tr>
//         `;
//       })
//     )
//     .catch((error) => console.log(error));
// });

// let items = document.getElementById("item");
// let btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//   fetch("https://fakestoreapi.com/products")
//     .then((response) => response.json())
//     .then((data) =>
//       data.forEach((el) => {
//         items.innerHTML += `
//         <tr>
//         <td>${el.id}</td>
//         <td>${el.title}</td>
//         <td>${el.description}</td>
//         <td>${el.image}</td>
//         <td>${el.price}</td>
//         <td>${el.rating}</td>
//       </tr>
//          `;
//       })
//     );
// });

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "none";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


