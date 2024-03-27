import parallaxie from '@/common/parallaxie';
import React, { useEffect } from 'react';

function SectionImage() {
  useEffect(() => {
    parallaxie('.back-image.parallaxie', 0.35);
  }, []);

  return (
    <div className="back-image bg-img parallaxie" data-background="/dark/assets/imgs/background/17.png" data-overlay-dark="0" />
  )
}

export default SectionImage