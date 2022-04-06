import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
           <section className='footer-subscription'>
              <p className='footer-subscription-heading'>
              Tham gia với chung tôi và nhận được những công thức đồ uống tuyệt nhất!
              </p> 
              <div className='input-area'>
                  <form>
                      <input type="Email" name="Email" placeholder="Email của bạn" className='footer-input'/>
                      <button type="button" class="btn btn-dark">Đăng kí</button>
                  </form>
              </div>
               
               
               </section> 
               <div className='footer-links'>
                   <div className='footer-link-wrapper'>
                       <div className='footer-link-items'>
                       JUST DRINKS  <i class='fas fa-cocktail' />
                        </div>
                       <div className='footer-link-copyright'>
                       © Copyright 2021 JUST DRINKS. All Rights Reserved.
                       </div>
                       <div className='footer-link'>
                           <li><a href="#">Chính sách bảo mật</a></li>
                           <li><a href="#"> Điều khoản dịch vụ</a></li>
                           <li><a href="#">Quảng cáo</a></li>
                       </div>
                   </div>
               </div>
        </div>
    )
}

export default Footer
