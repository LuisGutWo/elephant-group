import Link from "next/link";
import React, { useEffect } from "react";

function Footer({ lightMode, subBg }) {
  useEffect(() => {
    if (window.innerWidth > 991) {
      gsap.set(".footer-container", { yPercent: -50 });
      const uncover = gsap.timeline({ paused: true });
      uncover.to(".footer-container", { yPercent: 0, ease: "none" });
      ScrollTrigger.create({
        trigger: "main",
        start: "bottom bottom",
        end: "+=50%",
        animation: uncover,
        scrub: true,
      });
    }
  }, []);

  return (
    <footer className={subBg ? "sub-bg pt-80" : ""}>
      <div className="footer-container">
        <div className="container pb-80 pt-80 ontop">
          <div className="row">
            <div className="col-lg-3">
              <div className="colum md-mb50">
                <div className="tit mb-20">
                  <h6>Dirección</h6>
                </div>
                <div className="text">
                  <p>3 Oriente 974, Viña del Mar, Chile.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="colum md-mb50">
                <div className="tit mb-20">
                  <h6>Contacto</h6>
                </div>
                <div className="text">
                  <p className="mb-10">
                    <a href="#0">contacto@elephantgroup.cl

</a>
                  </p>
                  <h5>
                    <a href="#">(+56 9) 9323 9203</a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2 md-mb50">
              <div className="tit mb-20">
                <h6>Redes Sociales</h6>
              </div>
              <ul className="rest social-text">
                <li>
                  <a href="https://web.facebook.com/search/top?q=elephant%20group">Facebook</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/elephantgroupchile/?hl=es">Instagram</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <div className="tit mb-20">
                <h6>Novedades</h6>
              </div>
              <div className="subscribe">
                <form action="contact.php">
                  <div className="form-group rest">
                    <input type="email" placeholder="Ingresa tu correo" />
                    <button type="submit">
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="sub-footer pt-20 pb-20 bord-thin-top ontop">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="logo">
                  <Link href="/">
                    <img
                      src={`/dark/assets/imgs/logo2-${
                        lightMode ? "dark" : "light"
                      }.png`}
                      alt=""
                      className="icon-img-80"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="copyright d-flex">
                  <div className="ml-auto">
                    <p className="fz-13">
                      © 2024 LAG-webmedia | Elephant Group{" "}
                      <span className="underline"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
