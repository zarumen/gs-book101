import book from "../data/book"
import "../styles/styles_download.css"

let card = ""

book.forEach( x => {
  card += `
  <div class="col-6 col-sm-4 col-md-3 col-lg-2">
    <div class="card">
      <a class="img-card" href="" data-toggle="modal" data-target="#exampleModalLong">
        <img src="${x.book_cover}">
      </a>
      <div class="card-custom-titile">
        <h5 class="card-title-name heading">${x.book_name}</h5>
      </div>
    </div>
	</div>
	 
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header" style="border-bottom: none;">
        <div class="row">

          <div class="col-sm-12 col-md-4 col-lg-3">
            <img src="${x.book_cover}" class="d-none d-sm-block w-100">
          </div>

          <div class="col-sm-12 col-md-8 col-lg-7">
            <h3 class="modal-title mt-2" id="exampleModalLongTitle">${x.book_name}</h3>
            <dl class="row mt-2">
              <dt class="col-4 text-truncate">หมวดหมู่</dt>
              <dd class="col-8 text-truncate">${x.book_category}</dd>
              <dt class="col-4 text-truncate">ดูทั้งเล่ม</dt>
              <dd class="col-8 text-truncate">
                <a href="${x.book_link_pdf}" class="m-1"><i class="fas fa-file-pdf fa-lg"></i></a>
                <a href="${x.book_link_text}"><i class="fas fa-file-alt fa-lg"></i></a>
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
          <tbody id="index_name">
            <tr>
              <th scope="row">1</th>
              <td>หัวใจพระบรมโพธิสัตว์</td>
              <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
              <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
            </tr>	
            <tr>
              <th scope="row">1</th>
              <td>หัวใจพระบรมโพธิสัตว์</td>
              <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
              <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
            </tr>	
            <tr>
              <th scope="row">1</th>
              <td>หัวใจพระบรมโพธิสัตว์</td>
              <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
              <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
            </tr>	
            <tr>
              <th scope="row">1</th>
              <td>หัวใจพระบรมโพธิสัตว์</td>
              <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
              <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
            </tr>	
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

const download_book = `
  <section class="wrapper">
    <div class="content">
      <div class="container">
        <div class="row mt-3" id="book">  
          ${card}    
        </div>
      </div>
    </div>
  </section>
`;

export default download_book;