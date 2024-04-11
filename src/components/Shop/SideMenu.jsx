import React from 'react';

function SideMenu() {
  function handlePriceInput(e) {
    const priceInput = e.currentTarget;
    const priceGap = 1000;
    const minPrice = parseInt(priceInput[0].value);
    const maxPrice = parseInt(priceInput[1].value);
    const rangeInput = document.querySelectorAll(".range-input input")

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.currentTarget.className === "input-min") {
        rangeInput[0].value = minPrice;
      } else {
        rangeInput[1].value = maxPrice;
      }
    }
  }

  function handleRangeInput(e) {
    const rangeInput = document.querySelectorAll(".range-input input");
    const priceInput = document.querySelectorAll(".price-input input");
    const range = document.querySelector(".slider-range .progress");
    const priceGap = 1000;

    let minVal = parseInt(rangeInput[0].value);
    let maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.currentTarget.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  }

  return (
    <div className="col-lg-3">
      <div className="sidebar md-mb80">

        <div className="item search mb-40">
          <form action="contact.php">
            <div className="form-group">
              <input type="text" name="shop_search" placeholder="Search" />
              <button type="submit">
                <span className="pe-7s-search"></span>
              </button>
            </div>
          </form>
        </div>

        <div className="item categories mb-40">
          <div className="title">
            <h6>Categorías</h6>
          </div>
          <div className="dot-list">
            <ul className="rest">
              <li><a href="#0">Diseño</a></li>
              <li><a href="#0">Imprenta</a></li>
              <li><a href="#0">Web</a></li>
            </ul>
          </div>
        </div>

        <div className="item price-range mb-40">
          <div className="title">
            <h6>Filtrar por precio</h6>
          </div>
          <div className="wrapper">
            <div className="slider-range">
              <div className="progress"></div>
            </div>
            <div className="range-input">
              <input type="range" className="range-min" min="10000" max="100000" defaultValue="10"
                step="100" onInput={handleRangeInput} />
              <input type="range" className="range-max" min="0" max="100000" defaultValue="7500"
                step="100" onInput={handleRangeInput} />
            </div>
            <div className="price-input d-flex align-items-center mt-15">
              <div>
                <div className="field">
                  <span>$</span>
                  <input type="number" className="input-min" defaultValue="10" onInput={handlePriceInput} />
                </div>
              </div>
              <div className="ml-auto">
                <div className="field">
                  <span>$</span>
                  <input type="number" className="input-max" defaultValue="7500" onInput={handlePriceInput} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="item best-sale mb-40">
          <div className="title">
            <h6>Lo mas vendido</h6>
          </div>

          <div className="line-list d-flex align-items-center">
            <div>
              <div className="img">
                <img src="/dark/assets/imgs/shop/1.jpg" alt="" />
              </div>
            </div>
            <div>
              <div className="cont">
                <div className="rate">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h6>Men Hooded</h6>
                <h5>$130.00</h5>
              </div>
            </div>
            <a href="#0" className="over-link"></a>
          </div>
          <div className="line-list d-flex align-items-center">
            <div>
              <div className="img">
                <img src="/dark/assets/imgs/shop/3.jpg" alt="" />
              </div>
            </div>
            <div>
              <div className="cont">
                <div className="rate">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h6>Men Hooded</h6>
                <h5>$130.00</h5>
              </div>
            </div>
            <a href="#0" className="over-link"></a>
          </div>
          <div className="line-list d-flex align-items-center">
            <div>
              <div className="img">
                <img src="/dark/assets/imgs/shop/5.jpg" alt="" />
              </div>
            </div>
            <div>
              <div className="cont">
                <div className="rate">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h6>Men Hooded</h6>
                <h5>$130.00</h5>
              </div>
            </div>
            <a href="#0" className="over-link"></a>
          </div>
        </div>

        <div className="item tags">
          <div className="title">
            <h6>lo mas buscado</h6>
          </div>

          <div className="tags-links">
            <a href="#0">tarjetas personales</a>
            <a href="#0">Paginas web</a>
            <a href="#0">Diseño de logo corporativo</a>
            <a href="#0">Gigantografias</a>
            <a href="#0">Pendones</a>
            <a href="#0">Publicidad integral</a>
            <a href="#0">Letreros</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SideMenu