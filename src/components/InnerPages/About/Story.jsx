import React, { useEffect } from 'react';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Story() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="pg-about section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="bg-img radius-10 md-mb50" data-background="/dark/assets/imgs/about/sq1.jpg"></div>
          </div>
          <div className="col-lg-8">
            <div className="bg-img radius-10" data-background="/dark/assets/imgs/about/sq2.jpg"></div>
          </div>
          <div className="col-lg-4">
            <div className="sec-head mt-80">
              <h6 className="sub-title">Nuestra Historia.</h6>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="cont mt-80">
              <h4>Somos una empresa que nace del amor en familia, del calor de hogar, asi nos motivo esta idea de emprender y que ahora gracias a nuestro profesionalismo, esfuerzo y pasión es que nuestros clientes cada dia depositan su confianza en nosotros. Nos hemos ido afianzando mejor en el mercado, y lo mas satisfactorio es ver a nuestros clientes agradecidos de haber recibido un producto de calidad y una atención y preocupación unica. </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story