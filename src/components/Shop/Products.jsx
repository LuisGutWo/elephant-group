import React from 'react';
//= Data
import data from '@/data/Shop/list.json';

function Products() {
  function openList(e) {
    e.stopPropagation();
    const options = document.querySelector('.select-options')
    if (options.style.display === 'none') options.style.display = 'block';
    else options.style.display = 'none'
    document.querySelector('.select-styled').classList.toggle('active');
  }

  function handleItemClick(e) {
    e.stopPropagation();
    document.querySelector('.select-styled').classList.remove('active');
    document.querySelector('.select-styled').innerHTML = e.currentTarget.innerHTML;
    document.querySelector('select').value = e.currentTarget.getAttribute('rel');
    document.querySelector('.select-options').style.display = 'none';
  }

  return (
    <div className="col-lg-9">
      <div className="shop-products">
        <div className="top-side d-flex align-items-end mb-40">
          <div>
            <h6 className="fz-16 line-height-1">Mostrando 1–9 of 12 resultados</h6>
          </div>
          <div className="ml-auto">
            <div className="select">
              <select className="form-control select-hidden" onClick={openList}>
                <option value="Most Popular">Mas Popular</option>
                <option value="Sort by average rating">Ordenar por clasificación de venta</option>
                <option value="Price [Lowest to Highest]">Precio [Lowest to Highest]</option>
                <option value="Price [Highest to Lowest]">Precio [Highest to Lowest]</option>
              </select>
              <div className="select-styled" onClick={openList}>Mas Popular</div>
              <ul className="select-options">
                <li rel="Most Popular" onClick={handleItemClick}>Mas Popular</li>
                <li rel="Sort by average rating" onClick={handleItemClick}>Ordenar por clasificacion de venta</li>
                <li rel="Price [Lowest to Highest]" onClick={handleItemClick}>Precio [Lowest to Highest]</li>
                <li rel="Price [Highest to Lowest]" onClick={handleItemClick}>Prec [Highest to Lowest]</li>
              </ul>
            </div>
          </div>io
        </div>
        <div className="row">
          {
            data.map(item => (
              <div className="col-md-6 col-lg-4" key={item.id}>
                <div className="item mb-50">
                  <div className="img">
                    <img src={item.image} alt="" />
                    <a href="#0" className="add-cart">Agregar al carrito</a>
                    <span className="fav"><i className="far fa-heart"></i></span>
                  </div>
                  <div className="cont">
                    <div className="rate">
                      {
                        new Array(item.stars).fill().map((_, i) => <i className="fas fa-star" key={i}></i>)
                      }
                      {
                        new Array(5 - item.stars).fill().map((_, i) => <i className="far fa-star" key={i}></i>)
                      }
                    </div>
                    <h6>{item.name}</h6>
                    <h5>${item.price}</h5>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="pagination d-flex justify-content-center mt-30">
          <ul className="rest">
            <li className="active"><a href="#0">1</a></li>
            <li><a href="#0">2</a></li>
            <li><a href="#0"><i className="fas fa-chevron-right"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Products