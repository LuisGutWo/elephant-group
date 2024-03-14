import React, { useEffect } from 'react';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Header({ lightMode }) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <header className="header-creative">
      <div className="container ontop">
        <div className="row justify-content-center full-height">
            <div className="img parallax" data-speed="0.01">
              <img src="/dark/assets/imgs/header/b4_Mesa-de-trabajo-1-copia-3.png" alt="" />
            </div>
        </div>
      </div>
      <div className="bg-pattern bg-img" data-background={`/${lightMode ? 'light' : 'dark'}/assets/imgs/patterns/graph.png`}></div>
    </header>
  )
}

export default Header