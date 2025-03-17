import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import FooterButton from './FooterButton';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="sec atajos">
                        <h2>Atajos</h2>
                        <ul>
                            <li><a href="/quienes-somos">Quienes Somos</a></li>
                            <li><a href="/terminos-condiciones">Términos & condiciones</a></li>
                            <li><a href="/politica-privacidad">Política de privacidad</a></li>
                            <li><a href="/contacto">Contacto</a></li>
                        </ul>
                    </div>
                    <div className="sec atajos">
                        <h2>Productos</h2>
                        <ul>
                            <li><a href="/muebles-personalizados">Muebles personalizados</a></li>
                            <li><a href="/muebles">Muebles</a></li>
                            <li><a href="/juegos-montessori">Juegos Montessori</a></li>
                            <li><a href="/por-mayor">Por mayor</a></li>
                        </ul>
                    </div>
                    <div className="sec contacto">
                        <h2>Contacto</h2>
                        <ul className="info">
                            <li>
                                <span><FontAwesomeIcon icon={faMapMarker} /></span>
                                <span>Buenos Aires - Argentina</span>
                            </li>
                            <li>
                                <span><FontAwesomeIcon icon={faPhone} /></span>
                                <p><a href="tel:+543515555555">+54 3515555555</a><br />
                                    <a href="tel:+543515555555">+54 3515555555</a>
                                </p>
                            </li>
                            <li>
                                <span><FontAwesomeIcon icon={faEnvelope} /></span>
                                <p><a href="mailto:cururu@gmail.com">cururu@gmail.com</a></p>
                            </li>
                        </ul>
                    </div>
                    <div className="sec QuienesSomos">
                        <h2>Seguinos</h2>
                        <ul className="sci">
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href="https://wa.me/543515555555" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="copyrightsec">
                <p>&copy; 2024 Brian Ferreyra y Patricia Araldi. Todos los derechos reservados</p>
            </div>
            <FooterButton />
        </>
    );
};

export default Footer;console.log('Footer component rendered');