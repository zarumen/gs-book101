import "./import-jquery"
import search_content from "./views/search_content"
import {b4} from "./views/search_content"
import download_book from "./views/download_book"
import book from "./data/book"
import bookCT from "./data/book-search"
import paginator from "./paginator"

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
  "/download_book": download_book
};
const contentDiv = document.getElementById("page");
contentDiv.innerHTML = ROUTES[window.location.pathname];

const search_index = "ค้นหาเนื้อหา / สารบัญ"
const search_book = "ค้นหาหนังสือ"

//funtion 
function renderContent(submit, type, data ){
}
function template_navbar_dropdown(data_book,page,search){
  document.getElementById(page).setAttribute("class", "active");
  document.getElementById("search").setAttribute("placeholder" , search);
  document.getElementById("search2").setAttribute("placeholder" , search);
  const book_cat = data_book.map(cat => cat.book_category)
  const category = [...new Set(book_cat)]
  let dropdownItem = ""
  category.forEach(name_cat => {
    dropdownItem += `<button class="dropdown-item text" id="${name_cat}" href="" value="${name_cat}">${name_cat}</button>`
  })
  $('#dropdown-book').html(dropdownItem)
}

if (window.location.pathname === "/") {

 //navbar dropdown-filter
  template_navbar_dropdown(bookCT,"page_index",search_index)

  b4.forEach((x,y)=>{
    paginator({
      get_rows: function () {
          return document.getElementById("content"+y).getElementsByTagName("div");
      },
      box: document.getElementById("paginator"+y)
    })
  })
    
}else if(window.location.pathname === "/download_book"){

  //template_card_book
  function template_card_book(data){
    let cardBook = ""
    data.forEach( element => {
      cardBook += `
        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <div class="card">
            <a 
              href="" 
              class="img-card" 
              data-value="${element.book_name}"
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
  }

  //navbar dropdown-filter
  template_navbar_dropdown(book,"page_book",search_book)

  //card book
  template_card_book(book)

  let idDropdown = document.getElementById('dropdown-book')
  let click_fn = (e) =>{
    let cardBook = ""
    let target = e.target;
    let selectCat = book.filter(el => el.book_category===target.id)
    template_card_book(selectCat)
  }
  idDropdown.addEventListener('click', click_fn)

 
  //end card book

  //ready function
  $(document).ready(function(){

    //modal sarabun
    $('#modalSarabun').on('shown.bs.modal', function(e) {
      
      var value = $(e.relatedTarget).data('value');
      var head_modal = book.find(el => el.book_name === value)

      let filsarabuns = bookCT.filter(namebook => namebook.search_heading === value)
      let sarabuns = Array.from(new Set(filsarabuns.map(book => book.search_index)))
      .map(search_index => {
        return filsarabuns.find(book => book.search_index === search_index)
      })
      console.log(sarabuns)

      //loop sarabuns
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
      let modalSarabun = `

        <div class="modal-header" style="border-bottom: none;">
          <div class="row">

            <div class="col-sm-12 col-md-4 col-lg-3">
              <img src="${head_modal.book_cover}" class="d-none d-sm-block w-100">
            </div>

            <div class="col-sm-12 col-md-8 col-lg-9">
              <h3 class="modal-title mt-2" id="exampleModalLongTitle">${head_modal.book_name}</h3>
              <dl class="row mt-2">
                <dt class="col-4 text-truncate">หมวดหมู่</dt>
                <dd class="col-8 text-truncate">${head_modal.book_category }</dd>
                <dt class="col-4 text-truncate">ดูทั้งเล่ม</dt>
                <dd class="col-8 text-truncate">
                  <a href="${head_modal.book_link_pdf}" class="m-1"  target="_blank">
                    <i class="fas fa-file-pdf fa-lg"></i>
                  </a>
                  <a href="${head_modal.book_link_text}"  target="_blank">
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
      `
      $("#modalShow").html(modalSarabun)
    //end modal sarabun
    })

  //end ready function
  })

//end else if
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
