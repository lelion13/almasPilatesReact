import React from 'react';
import Page from '../Page';
import "../../public/css/about.css";

function Galeria() {
  return (
    <Page >
        <main>
        <div class="titulo">
            <h3>Galeria de imagenes</h3>
        </div>
        <div class="container-img">
            <div class="box-img">
                <a href="#">
                    <figure>
                        <img src="img/galeria1.jpg" alt="galeria1" />
                    </figure>
                </a>
            </div>
            <div class="box-img">
                <a href="#">
                    <figure>
                        <img src="img/galeria2.jpg" alt="galeria2" />
                    </figure>
                </a>
            </div>
            <div class="box-img">
                <a href="#">
                    <figure>
                        <img src="img/galeria3.jpg" alt="galeria3" />
                    </figure>
                </a>
            </div>
            <div class="box-img">
                <a href="#">
                    <figure>
                        <img src="img/galeria4.jpg" alt="galeria4" />
                    </figure>
                </a>
            </div>
            <div class="box-img">
                <a href="#">
                    <figure>
                        <img src="img/galeria5.jpg" alt="galeria5" />
                    </figure>
                </a>
            </div>
            <div class="box-img">
                <a href="#">
                    <figure>
                        <img src="img/galeria6.jpg" alt="galeria6" />
                    </figure>
                </a>
            </div>
            <div class="box-img">
                <a href="#">
                    <figure>
                        <img src="img/galeria7.jpg" alt="galeria7" />
                    </figure>
                </a>
            </div>
        </div>
    </main>
    </Page>
    
  )
}

export default Galeria