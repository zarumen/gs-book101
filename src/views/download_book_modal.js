import book from "../data/book"
import "../styles/styles_download.css"

let card = ""

book.forEach( x => {
  card += `
  <div class="col-xs-12 col-sm-4 col-lg-3 mt-3">
    <div class="card">
      <a class="img-card" href="" data-toggle="modal" data-target="#exampleModalLong">
      <img src="${x.book_cover}"></i></a>
        <div class="card-custom-titile">
         <h5 class="card-title-name">${x.book_name}</h5>
        </div>
    </div>
	</div>
	 
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header" style="border-bottom: none;">
        <h1 class="modal-title mt-2" id="exampleModalLongTitle">พ่อสอนลูก</h1>
        
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
              <tbody id="index_name">
                <tr>
					<th scope="row">1</th>
					<td>หัวใจพระบรมโพธิสัตว์</td>
					<td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					<td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
				</tr>	
              </tbody>
          </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal" style="font-size: 1rem;">Close</button>
      </div>
    </div>
  </div>
</div>
  `
})
// $('#book').html(card)

const download_book_modal = `
  <section class="wrapper">
    <div class="content">
      <div class="container">
        <div class="row" id="book">  
          ${card}    
        </div>
      </div>
    </div>
  </section>
`;

export default download_book_modal;