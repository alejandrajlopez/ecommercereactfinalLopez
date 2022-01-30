import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <span className="brand">C-Design</span>
      </div>
      <div className="d-flex flex-column text-start mt-3">
        <p className="footer-text">Teléfono: 11-64788-449</p>
        <p className="footer-text">Email: cdesign@gmail.com</p>
        <p className="footer-text">CABA - Argentina</p>
      </div>
    </div>
  );
};

export default Footer;
