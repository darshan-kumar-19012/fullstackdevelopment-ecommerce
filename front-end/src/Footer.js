import React from "react";
import "./Footer.css";
class Footer extends React.Component{
    render(){
        return(
    <footer>
        <div className="footer-gray">
      <div className="footer-custom">
        <div className="footer-lists">
          <div className="footer-list-wrap">
            <h6 className="ftr-hdr">Order Toll Free</h6>
            <ul className="ftr-links-sub">
              <li>800-952-5592</li>
            </ul>
            <h6 className="ftr-hdr">International</h6>
            <ul className="ftr-links-sub">
              <li>France</li>
              <li>United Kingdom</li>
            </ul>
          </div>
          <div className="footer-list-wrap">
            <h6 className="ftr-hdr">Customer Service</h6>
            <ul className="ftr-links-sub">
              <li>Contact Us</li>
              <li>Ordering</li>
              <li>Shipping &amp; Delivery</li>
              <li>Returns</li>
              <li>International Orders</li>
              <li>Gift Cards</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="footer-list-wrap">
            <h6 className="ftr-hdr">About </h6>
            <ul className="ftr-links-sub">
              <li>Our Company</li>
              <li>Careers</li>
              <li>Affiliate Program</li>
              <li><strong>Shop Our Catalog</strong></li>
              <li>ART.COM BLOG</li>
            </ul>
          </div>
          <div className="footer-list-wrap">
            <h6 className="ftr-hdr">My Account</h6>
            <ul className="ftr-links-sub">
              <li className="ftr-Login"><span>Access My Account</span></li>
              <li><span className="link">Track My Order</span></li>
              <li className="ftr-Login"><span>Access My Account</span></li>
              <li><span className="link">Track My Order</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-email">
          <h6 className="ftr-hdr">Sign up for exclusive offers and inspiration</h6>
          <div id="ftr-email" className="ftr-email-form">
            <form id="ftrEmailForm" method="post" action="">
              <div className="error">Please enter a valid email address</div>
              <input type="text" name="email_address_" id="ftrEmailInput" className="input"
                placeholder="Enter email address" />
              <input type="submit" className="button" value="SUBMIT" />
            </form>
          </div>
          <div className="ftr-email-privacy-policy"></div>
        </div>
        <div className="footer-social">
          <h6 className="ftr-hdr">Follow Us</h6>
          <ul>
            <li>
              <a href="*">
                <img width="24" height="24" alt="Like us on Facebook"
                  src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/fb.png"/>
              </a>
            </li>
            <li>
              <a href="*">
                <img width="24" height="24" alt="Follow us on Google+"
                  src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/gplus.png"/>
              </a>
            </li>
            <li>
              <a href="*">
                <img width="24" height="24" alt="Follow us on Pinterest"
                  src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/pin-badge.png"/>
              </a>
            </li>
            <li>
              <a href="*">
                <img width="24" height="24" alt="Follow us on Instagram"
                  src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/instagram-badge.png"/>
              </a>
            </li>
            <li>
              <a href="*">
                <img width="67" alt="Follow us on Twitter"
                  src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/twitter.png"/>
              </a>
            </li>
          </ul>
        </div>
    </div>
    </div>
    </footer>)
    }
}
export default Footer;