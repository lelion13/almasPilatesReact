import Page from "../Page";
import "../../public/css/servicios.css";
function Servicios() {
  return <Page>
    <main>
        <section id="cards">
            <div>
                <img class="cards-img" src="./img/pilates.jpg" alt="Imagen de pilates" />
                <h2>Pilates</h2>
                <p>Pilates Reformer es una actividad que se realiza con una máquina especializada, diseñada para mejorar tu flexibilidad, fuerza, equilibrio y postura. Mediante movimientos controlados y resistencia ajustable, este ejercicio es ideal para tonificar y fortalecer tu cuerpo, proporcionando beneficios tanto físicos como mentales en cada sesión.</p>
            </div>
            <div>
                <img class="cards-img" src="./img/yoga.jpg" alt="Imagen de yoga" />
                <h2>Yoga</h2>
                <p>Yoga es una práctica que combina posturas físicas, respiración y meditación para mejorar la flexibilidad, fuerza y equilibrio. Ideal para reducir el estrés y aumentar el bienestar, esta actividad proporciona beneficios físicos y mentales, ayudando a encontrar paz y armonía en cada sesión.</p>
            </div>
            <div>
                <img class="cards-img" src="./img/postural.jpg" alt="Imagen de postural" />
                <h2>Postural</h2>
                <p>La actividad postural se enfoca en ejercicios diseñados para mejorar la alineación y el equilibrio del cuerpo. Ideal para fortalecer la musculatura, prevenir dolores y corregir malas posturas, esta práctica proporciona beneficios físicos y promueve una mejor postura y bienestar general en cada sesión.</p>
            </div>
            <div>
                <img class="cards-img" src="./img/stretching.jpg" alt="Imagen de stretching" />
                <h2>Stretching</h2>
                <p>Stretching es una actividad que se centra en ejercicios de estiramiento para mejorar la flexibilidad, aliviar la tensión muscular y aumentar la movilidad. Ideal para prevenir lesiones y reducir el estrés, esta práctica proporciona beneficios físicos y mentales, promoviendo el bienestar general en cada sesión.</p>
            </div>
        </section>
    </main>
  </Page>;
}

export default Servicios;
