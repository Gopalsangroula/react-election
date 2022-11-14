import React from "react";
import {
  BsFillEnvelopeFill,
  BsNewspaper,
  BsFillPhoneFill,
  BsPinFill,
  BsFacebook,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  return (
    // <footer className="page-footer">
    //   <div className="container footer-wrapper">
    //     <div className="footer-left">
    //       <div className="footer-logo">
    //         <img src="/logo.png" alt="" />
    //       </div>
    //       <div className="about-us">
    //         <h1>हाम्रो बारेमा</h1>
    //         <p>
    //           लोकतन्त्रको मुल्य,मान्यता र आदर्श नै हामीले सुनिश्चित गरेको
    //           मार्गचित्र हो । जनता र राष्ट्रप्रति सत्ता जहिले पनि जवाफदेही
    //           हुनैपर्छ । यसका लागि सधैँनै हामी सत्तासँग प्रश्न सोधिरहने छौँ ।
    //           सरकार,प्रतिपक्ष र समाजका हरेक गतिविधिमाथि पनि पलपल हाम्रो दृष्टि
    //           रहिरहने छ । नभनिएका र नलेखिएका आमजनताका कथा–ब्यथा केलाउने
    //           जिम्मेवारी हाम्रो हो ।किनकी हामीलाई हेक्का छ,हामी निरन्तर निगरानी
    //           सहित लोकपथको यात्रामा छौँ ।
    //         </p>
    //       </div>
    //     </div>
    //     <div className="footer-right">
    //       <div className="info">
    //         <span>सूचना विभाग दर्ता नं.– ५००/०७४/०७५</span>
    //       </div>
    //       <span>Inky Quill International Pvt.Ltd.</span>
    //       <div className="info">
    //         <BsPinFill />
    //         <span>Saraswatisthan Marga, Lazimpat, Kathmandu, Nepal</span>
    //       </div>
    //       <div className="info">
    //         <BsFillEnvelopeFill />
    //         <span>lokpathnews@gmail.com, marketing@lokpath.com</span>
    //       </div>
    //       <div className="info">
    //         <BsNewspaper />
    //         <span>News Room 01-4004763 / 01-4004764 </span>
    //       </div>
    //       <div className="info">
    //         <BsFillPhoneFill />
    //         <span>For Advertisement 9801114020, 9801195227</span>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="bottom-container">
    //     <div className="container">
    //       <div className="copyright-section">
    //         © 2022 Lokpath सर्वाधिकार लोकपथ डट कममा सुरक्षित
    //       </div>
    //       <div className="developed-by-section">
    //         <span>Designed & Devevloped by: </span>
    //         <a href="https://appharu.com/" target="_blank">
    //           Appharu
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer className="page-footer">
      <div className="container footer-wrapper">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/logo.png" alt="" />
          </div>
          <div className="about-us">
            <h1>एसियन बिजनेस सर्कल टीम</h1>
            <p>अध्यक्ष / प्रधान सम्पादक : शुभ शंकर कंडेल</p>
            <p>प्रबन्ध निर्देशक : शारदा शर्मा</p>
            <p>सम्पादक : डण्ड गुरुङ</p>
            <p>सह-सम्पादक : कविराज बुढाक्षेत्री</p>
          </div>
        </div>
        <div className="footer-right">
          <div className="social-links">
            <a
              href="https://www.facebook.com/abctelevision"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook color="#166FE5" />
            </a>
            <a
              href="https://twitter.com/sskandel"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter color="#1D9BF0" />
            </a>
            <a
              href="https://www.youtube.com/user/abcnewstvnepal"
              target="_blank"
              rel="noreferrer"
            >
              <BsYoutube color="#FF0000" />
            </a>
          </div>
          <div className="contact">
            <h1>कार्यालय सम्पर्क</h1>
            <p>New Plaza, Putalisadak Kathmandu - 30</p>
            <p>+977 01 4240666 / 977-014011122</p>
            <p>Admin: sskandel@abctvlive.com</p>
            <p>News: sskandel@gmail.com</p>
          </div>
          <div className="advertisement-contact">
            <h1>विज्ञापनका लागि सम्पर्क</h1>
            <p>+977 9841885150</p>
            <p>sskandel@abctvlive.com</p>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <div className="container">
          <div className="copyright-section">
            © 2022 ABC NEWS NEPAL | No.1 News channel of Nepal |
          </div>
          <div className="developed-by-section">
            <span>Designed & Devevloped by: </span>
            <a href="https://appharu.com/" target="_blank" rel="noreferrer">
              Appharu
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
