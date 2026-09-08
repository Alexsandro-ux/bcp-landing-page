import style from './Card.module.css';
import { Button } from '../Button/Button';

import { trackGTMEvent } from '../../utils/gtm';

export function Card({
  imageSrc,
  imageAlt,
  title,
  benefits = [],
  labelBtnPrimary = "Pídela aquí",
  labelBtnSecondary = "Ver detalles"
}) {

  ///
  const activeVariant = sessionStorage.getItem('banner_variant') || 'A';

  const handlePrimaryClick = () => {
    trackGTMEvent({
      action: 'click_card_primary',
      variant: activeVariant,
      label: `${labelBtnPrimary} - ${title}`
    });
  };

  const handleSecondaryClick = () => {
    trackGTMEvent({
      action: 'click_card_secondary',
      variant: activeVariant,
      label: `${labelBtnSecondary} - ${title}`
    });
  };

  return (
    <div className={style.card}>
      
      <div className={style.imageContainer}>
        <img src={imageSrc} alt={imageAlt} className={style.image} />
      </div>

      <h2 className={style.title}>{title}</h2>
      
      <div className={style.benefitsSection}>
        <ul className={style.benefitsList}>
          {benefits.map((benefit, index) => (
            <li key={index}>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={style.buttonSeccion}>
        <Button label={labelBtnPrimary} variant="primary" onClick={handlePrimaryClick} />
        <Button label={labelBtnSecondary} variant="secondary" onClick={handleSecondaryClick} />
      </div>
    </div>
  );
 }