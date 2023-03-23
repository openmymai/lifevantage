import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">

            <div className="col-lg-6">
              <h3>LifeVantage Lamphun Team</h3>
              <h6>
                ลำพูน, Lamphun<br />
                ประเทศไทย, Thailand<br /><br />
              </h6>
            </div>

            <div className="col-lg-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i><a className="nav-link" href="/#hero">หน้าแรก</a></li>
                <li><i className="bi bi-chevron-right"></i><a className="nav-link" href="/#additional">โปรแทนดิม</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="container footer-bottom clearfix">
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">Bootstrapmade</a> &nbsp;
          Implement using <a href="https://nextjs.org/">NextJS</a>&nbsp; 
          by <a href="https://openmymai.github.io">Sirisak Chantanate (Mai)</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;