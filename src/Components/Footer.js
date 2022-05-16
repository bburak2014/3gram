import React from "react";

function Footer() {
  return (
    <div className="footer row ">
      <div className="col-12 col-sm-6 col-md-4">
        <ul className="list-group list-group-flush mt-2">
          <li className="list-group-item listhead listgram">Cras justo odio</li>
          <li className="list-group-item listgram">
            High level experience in web design and development knowledge,
            producing quality work.
          </li>
        </ul>
      </div>
      <div className="col-12 col-sm-6 col-md-2">
        <ul className="list-group list-group-flush mt-2">
          <li className="list-group-item listhead">Use Cases</li>
          <li className="list-group-item">Web-designers</li>
          <li className="list-group-item">Marketers</li>
          <li className="list-group-item">Small Business</li>
          <li className="list-group-item">Website Builder</li>
        </ul>
      </div>
      <div className="col-12 col-sm-6 col-md-2">
        <ul className="list-group list-group-flush mt-2">
          <li className="list-group-item listhead">Company</li>
          <li className="list-group-item">About Us</li>
          <li className="list-group-item">Careers</li>
          <li className="list-group-item">FAQs</li>
          <li className="list-group-item">FAQs</li>
          <li className="list-group-item">Contact Us</li>
        </ul>
      </div>

      <div className="col-12 col-sm-6 col-md-4">
        <ul className="list-group list-group-flush mt-2">
          <li className="list-group-item listhead">Follow Us</li>

          <li className="list-group-item listhead">
            <span className="iconPd">
              {" "}
              <img src="./image/social.png" />
            </span>
            <span className="iconPd">
              {" "}
              <img src="./image/social (1).png" />
            </span>
            <span className="iconPd">
              {" "}
              <img src="./image/social (2).png" />
            </span>
            <span className="iconPd">
              {" "}
              <img src="./image/social (3).png" />
            </span>
            <span className="iconPd">
              {" "}
              <img src="./image/social (4).png" />
            </span>
            <span className="iconPd">
              {" "}
              <img src="./image/social (5).png" />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
