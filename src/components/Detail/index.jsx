import React from "react";
import "./style.scss";

function Detail() {
  return (
    <>
      <div className="detailPage">
        <div className="detailContainer">
          <div className="detail">
            <div className="detailImg">
              <img
                src="https://preview.colorlib.com/theme/woodrox/img/project-details-1.jpg.webp"
                alt=""
              />
            </div>
            <div className="detailInfo">
                <h4>LAVENDAR AMBIENT COLORLIB</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <ul>
                    <li><span>Rating:</span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></li>
                    <li><span>Client:</span> colorlib</li>
                    <li><span>Website:</span> colorlib.com</li>
                    <li><span>Completed:</span> 17 Aug 2018</li>
                </ul>
            </div>
          </div>
          <div className="detailText">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
            <p>Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
