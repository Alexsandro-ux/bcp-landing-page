import { useState } from 'react';
import { Button } from '../Button/Button';
import style from './Form.module.css';

import { trackGTMEvent } from '../../utils/gtm';

export function Form() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError('Por favor, ingresa tu nombre.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    const activeVariant = sessionStorage.getItem('banner_variant') || 'A';
    trackGTMEvent({
      action: 'submit_lead',
      variant: activeVariant,
      label: 'Suscripción Novedades'
    });

    setSuccess(true);
    setFormData({ name: '', email: '' });
  };

  return (
    <section className={style.sectionContainer}>
      <div className={style.formCard}>
        <h2>Recibe nuestras novedades</h2>
        <p>Déjanos tus datos para recibir ofertas y promociones exclusivas.</p>

        {success ? (
          <div className={style.successMessage}>
            ¡Gracias por suscribirte! Te hemos enviado un correo de confirmación.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={style.form} noValidate>
            <div className={style.inputGroup}>
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ingresa tu nombre"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className={style.inputGroup}>
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ejemplo@correo.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {error && <span className={style.errorMessage}>{error}</span>}

            <div className={style.btnWrapper}>
              <Button label="Suscribirme" />
            </div>
          </form>
        )}
      </div>
    </section>
  );
}