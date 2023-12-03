import React from 'react'
import "./style.scss"
import Blog from '../Blog'

function Blogs() {
  return (
    <>
    <div className="blogs">
      <div className="blogContainer">
      <div className="blogsHead">
        <h1>RECENT POSTS FROM OUR BLOG</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna <br />
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
        </div>
        <div className="posts">
            <Blog img="https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-1.jpg.webp"/>
            <Blog img="https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-2.jpg.webp"/>
            <Blog img="https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-3.jpg.webp"/>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Blogs