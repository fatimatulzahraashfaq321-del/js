import React from 'react'

const Navbar = () => {
  return (
    <div> <section id="header" >
        <a href="#"><img src="image/logo.png"/></a>
     <div >
        <ul id="navbar">
            
            <li><a  href="index.html">Home</a></li>
            <li><a href="shop.html">Shop</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a  class="active" href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li id="lg-bag"><a href="cart.html"><i class="far fa-shopping-bag"></i></a></li>
            <a href="#" id="close"><i class="far fa-times"></i></a>
        </ul>
     </div>
     <div id="mobile">
        
        <a href="cart.html"><i class="far fa-shopping-bag"></i></a>
        <i id="bar" class="fas fa-outdent"></i>

     </div>
     </section> 
</div>
  )
}

export default Navbar