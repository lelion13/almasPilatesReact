import Page from "../Page";
import "../../public/css/contacto.css";
import { useState } from "react";
import emailjs from "emailjs-com";


function Contacto() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [genero, setGenero] = useState("");
  const [medio, setMedio] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
     // Obtenemos el botón de enviar para cambiar su estado
     const btn = document.getElementById('enviar');
     btn.value = "Enviando...";
 
     // Define los IDs del servicio y la plantilla
     const serviceID = 'service_o5e397c';
     const templateID = 'template_gz3479r';
 
     // Utiliza emailjs para enviar el formulario
     emailjs.sendForm(serviceID, templateID, event.target, 'Z--Qe2Rp7OwGvyACm') // Reemplaza 'YOUR_USER_ID' con tu User ID de EmailJS
       .then(() => {
         btn.value = "Enviar";
         alert('Correo enviado, nos contactaremos a la brevedad!');
         handleReset(); // Resetea el formulario
       }, (err) => {
         btn.value = "Enviar";
         alert(JSON.stringify(err));
       });
      // };
    console.log({ name, surname, telefono, email, genero, medio, message })
  };

  const handleReset = () => {
    setName("");
    setSurname("");
    setTelefono("");
    setEmail("");
    setGenero("");
    setMedio("");
    setMessage("");
  };
  

  return (
    <Page>
      <main className="contacto-main">
        <section id="contacto">
          <form id="formulario" onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
            {/* <span id="nameError" style={{ color: 'red', margin: '0', padding: '0', fontSize: 'smaller', display: 'none' }}>
              Formato de nombre no válido! Debe ingresar solo texto..
            </span> */}

            <label htmlFor="surname">Apellido:</label>
            <input type="text" id="surname" name="surname" required value={surname} onChange={(e) => setSurname(e.target.value)} />
            {/* <span id="surnameError" style={{ color: 'red', margin: '0', padding: '0', fontSize: 'smaller', display: 'none' }}>
              Formato de apellido no válido! Debe ingresar solo texto..
            </span> */}

            <label htmlFor="telefono">Telefono:</label>
            <input type="tel" id="telefono" name="telefono" pattern="(\d{3}-\d{2}-\d{8})|(\d{10})" required value={telefono} onChange={(e) => setTelefono(e.target.value)} />

            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            {/* <span id="emailError" style={{ color: 'red', margin: '0', padding: '0', fontSize: 'smaller', display: 'none' }}>Formato de correo electrónico no válido!</span> */}


            <fieldset className="genero">
              <legend>Indique su genero</legend>
              <input type="radio" id="masculino" name="genero" value="masculino" checked={genero === "masculino"} onChange={(e) => setGenero(e.target.value)} />
              <label htmlFor="masculino">Masculino</label>
              <input type="radio" id="femenino" name="genero" value="femenino" checked={genero === "femenino"} onChange={(e) => setGenero(e.target.value)} />
              <label htmlFor="femenino">Femenino</label>
            </fieldset>

            <label htmlFor="medio">Por que medio nos conociste?</label>
            <select name="medio" id="medio" value={medio} onChange={(e) => setMedio(e.target.value)} >
              <option value="">Seleccione una opcion</option>
              <option value="google">Google</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="conocido">Conocido</option>
              <option value="otro">Otro</option>
            </select>


            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="5" required value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>

            <div className="contacto-boton">
              <input type="submit" value="Enviar" id="enviar" name="enviar" />
              <input type="reset" value="Cancelar" id="cancelar" name="cancelar" onClick={handleReset} />
            </div>
          </form>
        </section>
        <section id="mapa">
          <div>
            <p>Ubicación:</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209647.84173526746!2d-58.61543202933301!3d-34.81229321574116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd10de827944f%3A0x18e6a75e60b143db!2sAlmas%20Movimiento%20Saludable!5e0!3m2!1ses!2sar!4v1721839427802!5m2!1ses!2sar"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>

          </div>

        </section>
      </main>
    </Page>
  );
}

export default Contacto;