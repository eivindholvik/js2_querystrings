const domSeachField = document.querySelector("#search_field");
const domBtnSearch = document.querySelector("#btn_search");

console.log(domSeachField);

domBtnSearch.addEventListener("click", (e) => {
  e.preventDefault();
  // location.href = `https://www.google.com/search?q=${domSeachField.value}`;
  location.href = `query.html?q=${domSeachField.value}`;
});

const myString = "hei";
document.querySelector(
  ".container"
).innerHTML = `<a href="https://www.google.com/search?q=${myString}">make from html</a>`;
