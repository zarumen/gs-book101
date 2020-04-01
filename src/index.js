import "./import-jquery";
import search_content from "./views/search_content";
import {b4} from "./views/search_content";
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
  //navbar active / placeholder
  document.getElementById("page_index").setAttribute("class", "active");
  document.getElementById("search").setAttribute("placeholder" , search_index);
  document.getElementById("search2").setAttribute("placeholder" , search_index);

 //navbar dropdown-filter
  const book_cat = bookCT.map(cat => cat.book_category)
  const category = [...new Set(book_cat)]
  console.log(category)
  let dropdowoItem = ""
  category.forEach(x => {
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
    
}else if(window.location.pathname === "/download_book"){
  //navbar active / placeholder
  document.getElementById("page_book").setAttribute("class", "active");
  document.getElementById("search").setAttribute("placeholder" , search_book);
  document.getElementById("search2").setAttribute("placeholder" , search_book);


  //navbar dropdown-filter
  const book_cat = book.map(cat => cat.book_category)
  const category = [...new Set(book_cat)]
  let dropdowoItem = ""
  category.forEach(name_cat => {
    dropdowoItem += `<button class="dropdown-item text" id="dropdown-item" href="" value="${name_cat}">${name_cat}</button>`
  })
  $('#dropdown-book').html(dropdowoItem)

  //card book
  let cardBook = ""
  book.forEach( (element,index) => {
     cardBook += `
      <div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <div class="card">
          <a 
            href="" 
            class="img-card" 
            data-index="${index}"
            data-toggle="modal" 
            data-target="#modalSarabun"
          >
            <img src="${element.book_cover}">
          </a>
          <div class="card-custom-titile">
            <h5 class="card-title-name heading">${element.book_name}</h5>
          </div>
        </div>
      </div>
    `
  })
  $('#book').html(cardBook)
  
  //ready function
  $(document).ready(function(){
    //modal sarabun
    $('#modalSarabun').on('shown.bs.modal', function(e) {
      
      var key = $(e.relatedTarget).data('index');

      let filsarabuns = bookCT.filter(namebook => namebook.search_heading === book[key].book_name)

      let sarabuns = Array.from(new Set(filsarabuns.map(book => book.search_index)))
      .map(sarabuns => {
        return filsarabuns.find(book => book.search_index === sarabuns)
      })

      let addSarabun = ""
      sarabuns.forEach((sarabun,no) => {
        addSarabun += `
          <tr>
            <th scope="row">${no+1}</th>
            <td>${sarabun.search_index}</td>
            <td><a href="${sarabun.link_pdf}"><i class="fas fa-file-pdf fa-lg"></i></a></td>
            <td><a href="${sarabun.link_text}"><i class="fas fa-file-alt fa-lg"></i></a></td>
          </tr>	
        `
      })

      $("#modalShow").html(`
        <div class="modal-header" style="border-bottom: none;">
          <div class="row">

            <div class="col-sm-12 col-md-4 col-lg-3">
              <img src="${book[key].book_cover}" class="d-none d-sm-block w-100">
            </div>

            <div class="col-sm-12 col-md-8 col-lg-9">
              <h3 class="modal-title mt-2" id="exampleModalLongTitle">${book[key].book_name}</h3>
              <dl class="row mt-2">
                <dt class="col-4 text-truncate">หมวดหมู่</dt>
                <dd class="col-8 text-truncate">${book[key].book_category }</dd>
                <dt class="col-4 text-truncate">ดูทั้งเล่ม</dt>
                <dd class="col-8 text-truncate">
                  <a href="${book[key].book_link_pdf}" class="m-1"  target="_blank">
                    <i class="fas fa-file-pdf fa-lg"></i>
                  </a>
                  <a href="${book[key].book_link_text}"  target="_blank">
                    <i class="fas fa-file-alt fa-lg"></i>
                  </a>
                </dd>
              </dl>
            </div>

          </div>
        </div>  
        <div class="modal-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">ที่</th>
                <th scope="col">ชื่อสารบัญ</th>
                <th scope="col" style="width: 24px;">PDF</th>
                <th scope="col" style="width: 24px;">Text</th>
              </tr>
            </thead>
            <tbody>
              ${addSarabun}
            </tbody>
          </table>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal" style="font-size: 1rem;">Close</button>
        </div>
      `)
    })
    $('#dropdown-item').on('click',function(e){
      console.log(e)
    })
  })

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

