import React from "react";

function ImageShowcase(){
    return(
    <>
    <section className="showcase">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: "url(https://www.att.com/idpassets/sales/uf/deals/animated-multi-tiles/1652051-Phone14ProMax-Animated-Multi-Tile-retina.png)", height: "60vh"}}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text p-5">
                        <h2>Fully Responsive Design</h2>
                        <p className="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-lg-6 text-white showcase-img" style={{backgroundImage: "url(https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg)", height: "60vh"}}></div>
                    <div className="col-lg-6 my-auto showcase-text p-5">
                        <h2>Updated For Bootstrap 5</h2>
                        <p className="lead mb-0">Newly improved, and full of great utility classNamees, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: "url(https://img.freepik.com/free-photo/view-modern-laptops-office_23-2148804560.jpg)", height: "60vh"}}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text p-5">
                        <h2>Easy to Use & Customize</h2>
                        <p className="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default ImageShowcase;