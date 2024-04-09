import React from "react";

function Intro() {
  function openAccordion(event) {
    document.querySelectorAll(".accordion-info").forEach((element) => {
      element.classList.remove("active");
      element.style.maxHeight = 0;
      element.parentElement.classList.remove("active");
    });
    event.currentTarget.parentElement.classList.add("active");
    event.currentTarget.nextElementSibling.style.maxHeight = "300px";
    event.currentTarget.nextElementSibling.classList.add("active");
  }

  return (
    <section className="intro-corp section-padding pt-0">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-lg-5 valign md-mb50">
            <div className="imgs mb-80">
              <div className="img1 wow fadeInUp">
                <img
                  src="/dark/assets/imgs/about/elephant-blackbg-700x840.png"
                  alt=""
                  className="radius-10"
                />
              </div>
              <div className="img2 wow fadeInLeft">
                <img
                  src="/dark/assets/imgs/about/elephant-etiquetas-700x840.png"
                  alt=""
                  className="radius-10"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="cont">
              <div className="text">
                <h2 className="d-slideup wow">
                  <span className="sideup-text">
                    <span className="up-text">Conoce el proceso</span>
                  </span>
                  <span className="sideup-text">
                    <span className="up-text">detrás de nuestra empresa.</span>
                  </span>
                  <span className="sideup-text">
                    <span className="up-text">Elephant Group.</span>
                  </span>
                </h2>
              </div>
              <div className="accordion bord mt-40">
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Publicidad (general)</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">
                      Asesoramos a particulares o empresas, que necesiten dar
                      forma y dirección a sus ideas, entregando el conocimiento
                      y las herramientas para iniciar o mejorar la imagen
                      comunicacional de su empresa o emprendimiento.
                    </p>
                  </div>
                </div>
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Diseño</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">
                      Creamos digitalmente todo lo que necesites para tu
                      empresa, ya sea para versión web o impresión. Somos
                      expertos en creación de imagen corporativa (logotipos),
                      páginas web, etiquetas de productos, ilustraciones,
                      gráficas para redes sociales.
                    </p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Impresión</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">
                      En nuestra área de impresión y producción podemos entregar
                      un producto final de calidad y personalizado, con nuestro
                      asesoramiento podrá saber cual es la mejor manera y cuál
                      es el mejor material para ejecutar sus proyectos. Contamos
                      con los servicios de imprenta; Digital y Offset;
                      Gigantografías, pendones, papelería, stickers, etiquetas
                      de productos y más.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
