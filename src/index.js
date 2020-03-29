import search_content from "./views/search_content";
import download_book from "./views/download_book";
import download_book_modal from "./views/download_book_modal";
import bookContent from "./data/book-search"
import book from "./data/book"
import paginator from "./paginator";

function collapse(a){
  document.addEventListener("scroll", function() {
    const navbar = document.querySelector(a);
    const navbarHeight = 250;
    const distanceFromTop = Math.abs(document.body.getBoundingClientRect().top);
    if (distanceFromTop >= navbarHeight) navbar.classList.add("show");
    else navbar.classList.remove("show");
  });
} 
 collapse(".form")
 collapse(".form2")
 collapse(".form3")

const ROUTES = {
  "/": search_content,
  "/download_book": download_book,
  "/download_book_modal": download_book_modal
};
const contentDiv = document.getElementById("page");
contentDiv.innerHTML = ROUTES[window.location.pathname];


const search_index = "ค้นหาเนื้อหา / สารบัญ"
const search_book = "ค้นหาหนังสือ"

if (window.location.pathname === "/") {
  document.getElementById("page_index").setAttribute("class", "active");
  document.getElementById("search").setAttribute("placeholder" , search_index);
  document.getElementById("search2").setAttribute("placeholder" , search_index);
 
  const book_cat = bookContent.map(cat => cat.book_category)
  const category = [...new Set(book_cat)]
  let dropdowoItem = ""
  category.forEach((x,y) => {
    dropdowoItem += `	<button class="dropdown-item text" id="dropdown-item" href="#">${x}</button>`
  })
  $('#dropdown-book').html(dropdowoItem)

  b4.forEach((x,y)=>{
    paginator({
      get_rows: function () {
          return document.getElementById("content"+y).getElementsByTagName("div");
      },
      box: document.getElementById("paginator"+y)
    })})
    
}else{
  document.getElementById("page_book").setAttribute("class", "active");
  document.getElementById("search").setAttribute("placeholder" , search_book);
  document.getElementById("search2").setAttribute("placeholder" , search_book);

  const book_cat = book.map(cat => cat.book_category)
  const category = [...new Set(book_cat)]
  let dropdowoItem = ""
  category.forEach((x,y) => {
    dropdowoItem += `	<button class="dropdown-item text" id="dropdown-item" href="#" value="${x}">${x}</button>`
  })
  $('#dropdown-book').html(dropdowoItem)
}



// document.getElementById("myButton").style.display = "none";

// document.getElementById("myButtonB").addEventListener("click", () => {
//   window.history.pushState({}, "download_book", "/download_book");
//   window.location.href = window.location.origin + window.location.pathname;
// });

// document.getElementById("myButton").addEventListener("click", () => {
//   window.history.pushState({}, "/", "/");
//   window.location.href = window.location.origin + window.location.pathname;
// });

// if (window.location.pathname !== "/") {
//   document.getElementById("myA").style.display = "none";
//   document.getElementById("myButtonB").style.display = "none";
//   document.getElementById("myButton").style.display = "";
// }

// if (window.location.pathname !== "/download_book") {
//   paginator({
//     get_rows: function () {
//         return document.getElementById("content").getElementsByTagName("div");
//     },
//     box: document.getElementById("paginator")
//   });
// }

