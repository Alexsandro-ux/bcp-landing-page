import { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import style from './Banner.module.css';

import { trackGTMEvent } from '../../utils/gtm';

export function Banner({ subtitle, title, description, imageSrc, imageAlt }) {
  
  const [variant] = useState(() => {
    const savedVariant = sessionStorage.getItem('banner_variant');
    if (savedVariant) return savedVariant;

    const randomVariant = Math.random() < 0.5 ? 'A' : 'B';
    sessionStorage.setItem('banner_variant', randomVariant);
    return randomVariant;
  });

  const isVariantA = variant === 'A';
  const btnLabel = isVariantA ? 'Solicita ahora' : 'Aplica ya';
  const containerClass = `${style.bannerContainer} ${isVariantA ? style.variantA : style.variantB}`;

  // 1. EVENTO DE IMPRESIÓN (Al cargar la página)
  useEffect(() => {
    trackGTMEvent({
      action: 'view_banner',
      variant: variant,
      label: btnLabel
    });
  }, [variant, btnLabel]);

  // 2. EVENTO DE CLIC EN EL CTA
  const handleCtaClick = () => {
    trackGTMEvent({
      action: 'click_cta',
      variant: variant,
      label: btnLabel
    });
  };

  return (
    <section className={containerClass}>
      <div className={style.bannerContent}>
        <div className={style.bannerText}> 
          <span className={style.bannerSubtitle}>{subtitle}</span>
          <h1 className={style.bannerTitle}>{title}</h1>
          <p className={style.bannerDescription}>{description}</p>
          
          <div className={style.bannerBtn}>
            <Button label={btnLabel} onClick={handleCtaClick} />
          </div>
        </div>
        
        <div className={style.bannerImage}>
          <img src={imageSrc} alt={imageAlt} />
        </div>
      </div>
    </section>
  );
}