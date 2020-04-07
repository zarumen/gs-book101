import "./import-jquery";
import search_content from "./views/search_content";
// import {b4} from "./views/search_content";
import download_book from "./views/download_book";
import download_book_modal from "./views/download_book_modal";
import book from "./data/book"
import bookCT from "./data/book-search"
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
 
  const book_cat = bookCT.map(cat => cat.book_category)
  const category = [...new Set(book_cat)]
  console.log(category)
  let dropdowoItem = ""
  category.forEach(x => {
    dropdowoItem += `	<button class="dropdown-item text" id="dropdown-item" href="#">${x}</button>`
  })
  $('#dropdown-book').html(dropdowoItem)

  
  function paginator(P,n,book){
      let p = [P] 
      let set_book =""   
      const number =[0,n]
      let b = number[0]
      let f = number[1]
       
       if(p>=2){
        b = number[0]+((n+1)*(p-1))
        f = number[1]+((n+1)*(p-1))
      }
      console.log(b,f)
        let book_x = book.slice(b,f)
        book_x.forEach(a=>{
          set_book += ` 
          <div class="col-xs-12 col-sm-6 col-lg-3" id="content">
          <div class="card card-search">
          <div class="card-content">
          <h4 class="card-title">
          <a class="title">${a.search_index}</a>
          </h4>
          <div class="story">
          <p>${a.short_story}</p>
          </div>
          <p class="">Form ${a.search_heading}</p>
          </div>
          <div class="card-read-more">
          <a href="${a.link_pdf}" class="btn btn-link" target ="_blank"><i class="fas fa-file-pdf fa-2x"></i></a>
          <a href="${a.link_text}" class="btn btn-link" target ="_blank"><i class="fas fa-file-alt fa-2x"></i></a>
          </div>
          </div>
          </div>`
          
        })
    

  
  return set_book
  
  }
  function page_p(a,n,book){
    let page_all = Math.ceil(book.length/n)
    let f
    if(a[0]>=page_all){  f = a[0]===page_all-1 }else{ f =a[0]}
    let o=f+1
    a.splice(0,1,o)
    return a
  }
  function page_l(a){
    if(a[0]<=1){ a[0]=2}
    let o=a[0]-1
    a.splice(0,1,o)
    return a
  }
  function numberpage(a,n,book){
    let page_all = Math.ceil(book.length/n)
    let number = `${a}-${page_all}`
    $('#number_page').html(number) 
  }

  let p =[1] 
  const m =[8]
  $(".dropdown-menu").on("click","button",function(event){
    let category = bookCT.filter(x=>x.book_category==event.target.textContent)

    let p =[1] 
   
      $(".befor").on("click", function(){
        page_p(p,8,category)
        console.log(p)
        let card2 = paginator(p,8,category)
        numberpage(p,8,category)
        $('#content').html(card2)
        if(p>=2){
          const navbar = document.querySelector(".after")
          navbar.classList.remove("d-none")
      }
      })
      $(".after").on("click", function(){                 
        page_l(p)
        console.log(p)
        let card3 = paginator(p,8,category)
        numberpage(p,8,category)
        $('#content').html(card3)
      })
  
    let card1 = paginator(p,8,category)
    numberpage(p,8,category)
    $('#content').html(card1) 
  })

    $(".befor").on("click", function(){
      page_p(p,8,bookCT)
      console.log(p)
      let card2 = paginator(p,8,bookCT)
      numberpage(p,8,bookCT)
      $('#content').html(card2)
      if(p>=2){
        const navbar = document.querySelector(".after")
        navbar.classList.remove("d-none")
    }
    })
    $(".after").on("click", function(){                 
      page_l(p)
      console.log(p)
      let card3 = paginator(p,8,bookCT)
      numberpage(p,8,bookCT)
      $('#content').html(card3)
    })

  let card1 = paginator(p,8,bookCT)
  numberpage(p,8,bookCT)
  $('#content').html(card1) 
    
}else if(window.location.pathname === "/download_book"){
  document.getElementById("page_book").setAttribute("class", "active");
  document.getElementById("search").setAttribute("placeholder" , search_book);
  document.getElementById("search2").setAttribute("placeholder" , search_book);

  const book_cat = book.map(cat => cat.book_category)
  const category = [...new Set(book_cat)]
  let dropdowoItem = ""
  category.forEach(x => {
    dropdowoItem += `	<button class="dropdown-item text" id="dropdown-item" href="#">${x}</button>`
  })
  $('#dropdown-book').html(dropdowoItem)
}else if(window.location.pathname === "/download_book_modal"){
  document.getElementById("page_modal").setAttribute("class", "active");
  document.getElementById("search").setAttribute("placeholder" , search_book);
  document.getElementById("search2").setAttribute("placeholder" , search_book);

  const book_cat = book.map(cat => cat.book_category)
  const category = [...new Set(book_cat)]
  let dropdowoItem = ""
  category.forEach(x => {
    dropdowoItem += `	<button class="dropdown-item text" id="dropdown-item" href="#">${x}</button>`
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

