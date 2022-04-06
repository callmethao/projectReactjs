import React from 'react'
import './Story.css'
import 'bootstrap/dist/css/bootstrap.css';

function Story() {
    return (
        <>
        <div className='story'>
        <h1>CÂU  CHUYỆN   CỦA   COCKTAIL</h1>
			<div class="story__container">
        <div className='story__wrapper'>
				<div class="row no-gutters">
        <div class="col-sm-5 img img-2 d-flex align-items-center justify-content-center justify-content-md-end">
        </div>
					<div class="col-sm-7 wrap-about py-5 ftco-animate">
	          <div class="heading-section mt-5 mb-4">
	          	<div class="pl-lg-5 ml-md-5">
		            <h2 class="mb-4">Lịch  sử  của Cocktail</h2>
	            </div>
	          </div>
	          <div class="pl-lg-5 ml-md-5">
							<p>Cocktail (long drink) là một loại thức uống được pha trộn, chứa rượu. Một ly cocktail thường bao gồm rượu và hương như là các loại rượu mùi, trái cây, mật ong, sữa hay kem cùng các loại phụ gia khác.

Theo tờ báo Balance của Mỹ, vào năm 1806, cocktail được định nghĩa là một loại thức uống được pha chế từ rượu mạnh các loại, đường, nước, “rượu đắng – bitters” và định nghĩa này được sử dụng xuyên suốt thế kỉ 19. Đến thế kỉ 20, cocktail được biến hóa khác đi so với ban đầu. Gần 200 năm sau, ngày 13/05/1806 được lấy làm ngày kỷ niệm cocktail xuất hiện trên báo viết.

Về cái tên cocktail, nếu dịch đúng tiếng Anh thì cocktail có nghĩa là đuôi con gà trống. Theo đó, vào thời lập quốc của Mỹ, chọi gà là một trong những trò chơi rất phổ biến. Người chủ gà chiến thắng sẽ nhận được lông đuôi của con gà thua cuộc và được đãi một chầu rượu sau khi được chúc “on the cock’tail”. Sau đó, người ta sử dụng tên này để dùng cho loại thức uống pha trộn từ nhiều loại nguyên liệu (tức cocktail) vì màu sắc của nó cũng sặc sỡ, màu mè như đuôi gà trống.

Còn theo một số tài liệu khác, tên gọi cocktail xuất phát từ một người Pháp tên Antoine Peychaud. Ông đã pha một loại thức uống từ whisky và một số nguyên liệu khác, đặt tên là coquetier, sau nhiều năm, từ coquetier được đọc ra thành cocktail.</p>
							<h3 class="mt-5">Chọn chủ đề</h3>
							<div class="thumb my-4 d-flex">
	            	<a href="/Douong" class="thumb-menu pr-md-4 text-center">
						<div className='btn1'></div>
						<button type="button" class="btn btn-outline-info">Đồ uống</button>
	            	</a>
	            	<a href="/Phache" class="thumb-menu pr-md-41 text-center">
					<div className='btn1'></div>
						<button type="button" class="btn btn-outline-info">Pha chế</button>
	            	</a>
	            </div>
						</div>
					</div>
				</div>
        </div>
			</div>
      </div>
      </>
    );
}

export default Story
