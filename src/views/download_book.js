import book from "../data/book"
import "../styles/styles_download.css"

let card = ""

book.forEach( x => {
  card += `
  <div class="col-xs-12 col-sm-4 col-lg-3 mt-3">
    <div class="card">
      <a class="img-card" href="" data-toggle="modal" data-target="#exampleModalLong">
      <img src="https://book.rgtcenter.com/cover/004-01.jpg"></a>
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
        <a href="http://book.rgtcenter.com/004-01.pdf" target="_blank">
          <i class="fas fa-file-pdf fa-2x mt-4 mr-5 pr-5"></i>
        </a>
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
                <th scope="row">2</th>
								  <td>หัวใจพระบรมโพธิสัตว์</td>
								  <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					        <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
							  </tr>	
                <tr>
                <th scope="row">3</th>
								  <td>หัวใจพระบรมโพธิสัตว์</td>
								  <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					        <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
							  </tr>	
                <tr>
                <th scope="row">4</th>
								  <td>หัวใจพระบรมโพธิสัตว์</td>
								  <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					        <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
							  </tr>	
                <tr>
                <th scope="row">5</th>
								  <td>หัวใจพระบรมโพธิสัตว์</td>
								  <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					        <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
							  </tr>	
                <tr>
                <th scope="row">6</th>
								  <td>หัวใจพระบรมโพธิสัตว์</td>
								  <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					        <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
							  </tr>	
                <tr>
                <th scope="row">7</th>
								  <td>หัวใจพระบรมโพธิสัตว์</td>
								  <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					        <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
							  </tr>	
                <tr>
                <th scope="row">8</th>
								  <td>หัวใจพระบรมโพธิสัตว์</td>
								  <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					        <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
							  </tr>	
                <tr>
                <th scope="row">9</th>
								  <td>หัวใจพระบรมโพธิสัตว์</td>
								  <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					        <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
							  </tr>	
                <tr>
                <th scope="row">10</th>
								  <td>หัวใจพระบรมโพธิสัตว์</td>
								  <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					        <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
							  </tr>	
                <tr>
                <th scope="row">11</th>
								  <td>หัวใจพระบรมโพธิสัตว์</td>
								  <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					        <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
							  </tr>	
                <tr>
                <th scope="row">12</th>
								  <td>หัวใจพระบรมโพธิสัตว์</td>
								  <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					        <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
							  </tr>	
                <tr>
                <th scope="row">13</th>
								  <td>หัวใจพระบรมโพธิสัตว์</td>
								  <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					        <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
							  </tr>	
                <tr>
                <th scope="row">14</th>
								  <td>หัวใจพระบรมโพธิสัตว์</td>
								  <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					        <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
							  </tr>	
                <tr>
                <th scope="row">15</th>
								  <td>หัวใจพระบรมโพธิสัตว์</td>
								  <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					        <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
							  </tr>	
                <tr>
                <th scope="row">16</th>
								  <td>หัวใจพระบรมโพธิสัตว์</td>
								  <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					        <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
							  </tr>	
                <tr>
                <th scope="row">17</th>
								  <td>หัวใจพระบรมโพธิสัตว์</td>
								  <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					        <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
							  </tr>	
                <tr>
                <th scope="row">18</th>
								  <td>หัวใจพระบรมโพธิสัตว์</td>
								  <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					        <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
							  </tr>	
                <tr>
                <th scope="row">19</th>
								  <td>หัวใจพระบรมโพธิสัตว์</td>
								  <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					        <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
							  </tr>	
                <tr>
                <th scope="row">20</th>
								  <td>หัวใจพระบรมโพธิสัตว์</td>
								  <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					        <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
							  </tr>	
                <tr>
                <th scope="row">21</th>
								  <td>หัวใจพระบรมโพธิสัตว์</td>
								  <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					        <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
							  </tr>	
                <tr>
                <th scope="row">22</th>
								  <td>หัวใจพระบรมโพธิสัตว์</td>
								  <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					        <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
							  </tr>	
                <tr>
                <th scope="row">23</th>
								  <td>หัวใจพระบรมโพธิสัตว์</td>
								  <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					        <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
							  </tr>	
                <tr>
                <th scope="row">24</th>
								  <td>หัวใจพระบรมโพธิสัตว์</td>
								  <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					        <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
							  </tr>	
                <tr>
                <th scope="row">25</th>
								  <td>หัวใจพระบรมโพธิสัตว์</td>
								  <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					        <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
							  </tr>	
                <tr>
                <th scope="row">26</th>
								  <td>หัวใจพระบรมโพธิสัตว์</td>
								  <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					        <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
							  </tr>	
                <tr>
                <th scope="row">26</th>
								  <td>หัวใจพระบรมโพธิสัตว์</td>
								  <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					        <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
							  </tr>	
                <tr>
                <th scope="row">28</th>
								  <td>หัวใจพระบรมโพธิสัตว์</td>
								  <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					        <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
							  </tr>	
                <tr>
                <th scope="row">29</th>
								  <td>หัวใจพระบรมโพธิสัตว์</td>
								  <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-pdf fa-lg"></i></a></td>
					        <td><a href="http://book.rgtcenter.com/083-01-01.pdf"><i class="fas fa-file-alt fa-lg"></i></a></td>
							  </tr>	
                <tr>
                <th scope="row">30</th>
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
        <div class="row" id="book">  
          ${card}    
        </div>
      </div>
    </div>
  </section>
`;

export default download_book;