import React from "react";
import ImgGdc from './../img/logos/gdc.png';

const Menu = () =>{
    return(
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="index.html">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Pricing</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="index.html" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown link
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="index.html">Action</a>
                        <a class="dropdown-item" href="index.html">Another action</a>
                        <a class="dropdown-item" href="index.html">Something else here</a>
                        </div>
                    </li>
                    </ul>
                </div>
            </nav>
            
            <div class="logo">
                <a href="index.html"><img src={ImgGdc} alt="GDC" title="GDC"/></a>
            </div>

            <div class="headerRight">
                <ul class="social">
                    <li><a href="https://atencionaclientes.gdcdesarrollos.com/" class="btn-clientes"><i class="fas fa-users"></i><span>Atención a nuestros Clientes</span></a></li>
                    <li><a href="tel:5589357600" class="telefono"><i class="fas fa-phone-volume"></i><span>55-8935-7600</span></a></li>
                    <li><a href="mailto:contacto@gdcdesarrollos.com" class="email"><i class="far fa-envelope"></i></a></li>
                    <li><a href="https://www.instagram.com/gdc_desarrollos/" class="instagram"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="https://twitter.com/gdcdesarrollos" class="twitter"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.youtube.com/channel/UCWq5_GfT1lpvkwICsXb5rlg" class="youtube"><i class="fab fa-youtube"></i></a></li>
                    <li><a href="https://www.facebook.com/OficialGDcDesarrollos/" class="facebook"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="index.html" class="consulta"><i class="fas fa-search"></i><span>¿Que Buscas?</span></a></li>
                </ul>
            </div>
        </header>
    );
}

export default Menu;