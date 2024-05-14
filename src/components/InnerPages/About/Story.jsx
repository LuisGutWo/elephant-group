import React, { useEffect, useState } from "react";
//= Scripts
import loadBackgroudImages from "@/common/loadBackgroudImages";

//= Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Parallax, EffectFade } from "swiper";
//= Data
import data from "@/data/Main/header.json";

const swiperOptions = {
  modules: [Navigation, Autoplay, Pagination, Parallax, EffectFade],
  effect: "fade",
  speed: 1500,
  autoplay: {
    delay: 5000,
  },
  parallax: true,
  loop: true,
  onSwiper: function (swiper) {
    for (var i = 0; i < swiper.slides.length; i++) {
      swiper.slides[i]
        .querySelector(".bg-img")
        .setAttribute("data-swiper-parallax", 0 * swiper.width);
    }
  },
  onResize: function (swiper) {
    swiper.update();
  },
  pagination: {
    el: ".slider-prlx .swiper-pagination",
    type: "fraction",
    clickable: true,
  },
  navigation: {
    nextEl: ".slider-prlx .next-ctrl",
    prevEl: ".slider-prlx .prev-ctrl",
  },
};

function Story() {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
    loadBackgroudImages();
  }, []);

  useEffect(() => {
    if (loadSwiper) loadBackgroudImages();
  }, [loadSwiper]);

  return (
    <section className="pg-about section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div
              className="bg-img radius-10 md-mb50"
              data-background="/dark/assets/imgs/about/trabajo-07-700x840.png"
            ></div>
          </div>
          <div className="col-lg-8">
            {loadSwiper && (
              <Swiper
                {...swiperOptions}
                className="swiper-container parallax-slider" 
              >
                {data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div
                      className="bg-img radius-10"
                      data-background={item.background}
                    ></div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
          <div className="col-lg-4">
            <div className="sec-head mt-80">
              <h6 className="sub-title">Nuestra Historia.</h6>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="cont mt-80">
              <h4>
                Somos una empresa que nace del amor en familia, del calor de
                hogar, asi nos motivo esta idea de emprender y que ahora gracias
                a nuestro profesionalismo, esfuerzo y pasión es que nuestros
                clientes cada dia depositan su confianza en nosotros. Nos hemos
                ido afianzando mejor en el mercado, y lo mas satisfactorio es
                ver a nuestros clientes agradecidos de haber recibido un
                producto de calidad y una atención y preocupación unica.{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
