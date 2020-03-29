import book from "../data/book-search";
import "../styles/styles_search.css"


const book2 =[]
book.forEach((x,y)=>{let n = x.search_heading;
    book2.push(n);
}) 
const book3= book2.sort()
const book4 =[]
book3.forEach((c, d) => {
  var n = book2[d];
  var n2 = book2[d + 1];
  if (n !== n2) {
    book4.push(n);
  }
});
console.log(book4.length)
console.log(book4)




let card_cover = ""
book4.forEach((x,y)=>{

  let set_book =""
  let book_s = book.filter(c=>c.search_headin===x.search_headin)
  book_s.forEach(a=>{
         set_book += ` 
          <div class="col-xs-12 col-sm-12 col-lg-3" id="content">
          <div class="card card-search">
            <div class="card-content">
              <h4 class="card-title">
                <a class="title">${a.search_index}</a>
              </h4>
              <div class="story">
                <p>${a.short_story}</p>
              </div>
          </div>
          <div class="card-read-more">
              <a href="${a.link_pdf}" class="btn btn-link"><i class="fas fa-file-pdf fa-2x"></i></a>
              <a href="${a.link_text}" class="btn btn-link"><i class="fas fa-file-alt fa-2x"></i></a>
          </div>
        </div>
      </div>`
  })
  


card_cover+=` 
<div class="card text " style="margin-top: 80px;">
<div class="card-header">
  <h4 class="name">
    ${x}
  </h4>
</div>
<div class="container" style="padding: unset;">
<div class="card-body page" id="page1" style="padding: unset;">
  <div class="row m-3" id="content${y}">
   ${set_book}
  </div>
</div>
</div>
<div class="pagination justify-content-center m-3" id="paginator${y}"></div>
</div>` ;

})


const search_content = `

<section class="wrapper">
<div class="container-fostrap">
    <div class="content" style="padding: unset;">
        <div class="container" style="padding-top: unset;">
          ${card_cover}            
        </div>
    </div>
</div>
</section>
`;

export default search_content;
export const b4 = book4;