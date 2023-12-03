import React from "react";
import "./style.scss";
function ContactInfo() {
  return (
    <>
      <div className="contactContainer">
        <div className="contactInfo">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d68400.13510028234!2d-74.14935246335048!3d40.74250179664903!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25153abefda67%3A0x8971e805835b3a5b!2sFlyNYON%20Helicopter%20Tours!5e0!3m2!1sru!2sus!4v1701599686881!5m2!1sru!2sus"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="infoRow">
            <div className="infoItems">
              <div className="infoItem">
                <div className="icon">
                  <i class="fa-light fa-house"></i>
                </div>
                <div className="info">
                  <h3>California, United States</h3>
                  <p>Santa monica bullevard</p>
                </div>
              </div>
              <div className="infoItem">
                <div className="icon">
                  <i class="fa-light fa-phone"></i>
                </div>
                <div className="info">
                  <h3>00 (440) 9865 562</h3>
                  <p>Mon to Fri 9am to 6 pm</p>
                </div>
              </div>
              <div className="infoItem">
                <div className="icon">
                  <i class="fa-light fa-envelope"></i>
                </div>
                <div className="info">
                  <h3>support@colorlib.com</h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
            <div className="sendInfo">
              <div className="enter">
                <input type="text" placeholder="Enter your name" />
                <input type="text" placeholder="Enter email address" />
                <input type="text" placeholder="Enter Subject" />
              </div>
              <div className="enterMessage">
                <input type="text" placeholder="Enter Message" />
                <div className="sendBtn">
                  <button>Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
