import book from "../data/book-search";
import "../styles/styles_search.css"

let set_book =""
book.forEach((x)=>{
     set_book += ` 
      <div class="col-xs-12 col-sm-12 col-lg-3" id="content">
        <div class="card card-search">
          <div class="card-content">
            <h4 class="card-title">
              <a class="title">${x.search_index}</a>
            </h4>
            <div class="story">
              <p>${x.short_story}</p>
            </div>
        </div>
        <div class="card-read-more">
            <a href="${x.link_pdf}" class="btn btn-link"><i class="fas fa-file-pdf fa-2x"></i></a>
            <a href="${x.link_text}" class="btn btn-link"><i class="fas fa-file-alt fa-2x"></i></a>
        </div>
      </div>
    </div>
`
})

const search_content = `
<section class="wrapper">
<div class="container-fostrap">
    <div class="content" style="padding: unset;">
        <div class="container" style="padding-top: unset;">
           <div class="card text " style="margin-top: 80px;">
             <div class="card-header">
               <h4 class="name">
                 คำสอนคุณครูไม่ใหญ่3
               </h4>
             </div>
           <div class="container" style="padding: unset;">
             <div class="card-body page" id="page1" style="padding: unset;">
               <div class="row m-3" id="content">
                  ${set_book}
               </div>
             </div>
           </div>
           <div class="pagination justify-content-center m-3" id="paginator"></div>
           </div>            
        </div>
    </div>
</div>

`;

export default search_content;
