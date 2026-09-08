import { useEffect } from 'react';

import './App.css';
import { Header } from './components/Header/Header.jsx';
import { Banner } from './components/Banner/Banner.jsx';
import { Card } from './components/Card/Card.jsx';
import { Form } from './components/Form/Form.jsx';
import { Footer } from './components/Footer/Footer.jsx';


import bannerBCP from './assets/bannerBCP.png';
import AmexClassic from './assets/Amex+Clasica.png';
import AmexGold from './assets/Amex+Oro.png';
import AmexPlatinum from './assets/Amex+Platinum.png';

function App() { 

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
  }, []);

  const navlinks = [
        { label: 'Inicio', ref: '#' },
        { label: 'Productos', ref: '#products' },
        { label: 'Soluciones Digitales', ref: '#solutions' },
        { label: 'Beneficios', ref: '#benefits' },
  ];

  const CARDS_DATA = [
  {
    id: 'amex-classic',
    imageSrc: AmexClassic,
    imageAlt: 'Tarjeta American Express Clásica BCP',
    title: 'Amex Clásica',
    benefits: [
      'Sin membresía consumiendo S/1 al mes',
      'Acumula 1 Milla BCP por cada $2 de consumo',
      'Seguro de compra protegida hasta $1,000',
      'Descuentos exclusivos en restaurantes'
    ]
  },
  {
    id: 'amex-gold',
    imageSrc: AmexGold,
    imageAlt: 'Tarjeta American Express Oro BCP',
    title: 'Amex Oro',
    benefits: [
      'Bono de bienvenida de 2,000 Millas BCP',
      'Acumula 1 Milla BCP por cada $1.5 de consumo',
      'Seguro de accidente en viajes hasta $250,000',
      'Acceso a promociones y cuotas sin intereses'
    ]
  },
  {
    id: 'amex-platinum',
    imageSrc: AmexPlatinum,
    imageAlt: 'Tarjeta American Express Platinum BCP',
    title: 'Amex Platinum',
    benefits: [
      'Bono de bienvenida de 5,000 Millas BCP',
      'Acumula 1.5 Millas BCP por cada $1 de consumo',
      'Acceso ilimitado a Salones VIP Pacific Club',
      'Asistencia personalizada y Concierge 24/7'
    ]
  }
];

  return (
    <div className="app-container">

      <Header
        logoRef="#"
        links={navlinks}
      />

      <Banner
        subtitle="TARJETAS"
        title="Gana sí o sí S/50 + 2,000 millas "
        description="Solo pide tu Tarjeta de Crédito BCP "
        imageSrc={bannerBCP}
        imageAlt="Banner BCP"
      />

      <section className='seccionBenefits'>
        <h2>Elige la Tarjeta de Crédito</h2>
        
        <div className='seccionCard'>
          {CARDS_DATA.map((card) => (
            <Card
              key={card.id}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              title={card.title}
              benefits={card.benefits}
              labelBtnPrimary="Pídela aquí"
              labelBtnSecondary="Ver detalles"
            />
          ))}
        </div>
      </section>

    <Form />
    <Footer />
      
    </div>
  );
}

export default App;