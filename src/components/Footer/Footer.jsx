import style from './Footer.module.css';

export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <div className={style.column}>
          <h3>Sobre Nosotros</h3>
          <ul>
            <li><a href="#about">Quiénes somos</a></li>
            <li><a href="#careers">Trabaja con nosotros</a></li>
            <li><a href="#press">Prensa y Novedades</a></li>
          </ul>
        </div>

        <div className={style.column}>
          <h3>Productos</h3>
          <ul>
            <li><a href="#cards">Tarjetas de Crédito</a></li>
            <li><a href="#loans">Préstamos</a></li>
            <li><a href="#accounts">Cuentas de Ahorro</a></li>
          </ul>
        </div>

        <div className={style.column}>
          <h3>Ayuda y Contacto</h3>
          <ul>
            <li><a href="#faq">Preguntas frecuentes</a></li>
            <li><a href="#channels">Canales de atención</a></li>
            <li><a href="#terms">Términos y condiciones</a></li>
          </ul>
        </div>
      </div>

      <div className={style.copyright}>
        <p>&copy; {new Date().getFullYear()} Banco BCP. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}