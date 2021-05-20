/* eslint-disable react/style-prop-object */
import React from "react";
import {} from "react-bootstrap";
import {Link} from 'react-router-dom'
import '../Footer/footer.css'
import logo from "../img/logo.png"

const FooterPage = () => {
  return (
    <React.Fragment>
        
    <footer className="back-light text-center text-lg-start">
  
        <div className="container p-4">

            <div className="row">
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                    <h5 className="text-uppercase">صنايعي خبره</h5>

                    <p>
                    اختــار حـرفتـكـ أو شطـب شقتـكـ
                    </p>
                    <img src={logo} width='180px' height="160px" alt="" />
                </div>


                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase mb-10">معلومات تهمك </h5>

                    <ul className="list-unstyled mb-0">
                    <li>
                        <Link to='/safetyMeasures' className="text-link-footer">إجراءات السلامه</Link>
                    </li>
                    <li>
                        <Link to='/Contact' className="text-link-footer">تواصل معنا</Link>
                    </li>
                    </ul>
                </div>



                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase mb-10">صنايعي خبره</h5>

                    <ul className="list-unstyled mb-0">
                    <li>
                        <Link to='/About' className="text-link-footer">نبذه عنا</Link>
                    </li>
                    <li>
                        <Link to='' className="text-link-footer">مساعدة</Link>
                    </li>
                    <li>
                        <Link to='' className="text-link-footer">التوصيات</Link>
                    </li>
                    <li>
                        <Link to='' className="text-link-footer">الشروط والاحكام</Link>
                    </li>
                    <li>
                        <Link to='' className="text-link-footer">سياسات الخصوصية</Link>
                    </li>
                    </ul>
                </div>
                
            
                
            
            
            </div>
            
        </div>
        

        <div id="footer-line"></div>
        <div className="text-center p-3" >
            © 2020 Copyright:
            <a className="text-link-footer" href="https://mdbootstrap.com/"> snai3y5ebra.com</a>
        </div>
        
    </footer>

    </React.Fragment>
  );
}

export default FooterPage