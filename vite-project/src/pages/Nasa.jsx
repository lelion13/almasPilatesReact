import fetchNasa from '../api/apiNasa';
import Page from '../Page';
import '../../public/css/nasa.css';
import { useEffect, useState } from 'react';


function Nasa() {
    const [data, setData] = useState([]);
    const [cantidad, setCantidad] = useState ([1]);

    const getData = async () => {
        try{
            const fetchData = await fetchNasa(cantidad);
            setData(fetchData);
        } catch (error) {
            console.error(error);
        };
    };

    useEffect((cantidad) => {
        getData();
      }, [cantidad]);
    
    return (
        <Page>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form action="">
            <label htmlFor="cantidad">Cantidad de imagenes</label>
            <input type="number" name="cantidad" id="cantidad" min= "1" value={cantidad} onChange={(e) => {const value = e.target.value;
            if (value > 0) { // Solo permite números mayores que 0
                setCantidad(value);
            } else {
                setCantidad(1); // Establece el valor mínimo en 1
            }}} />
            {/* <input type="number" name="cantidad" id="cantidad" min= "1" value={cantidad} onChange={(e) => setCantidad(e.target.value)} /> */}
        </form>
        <div className='CardContainer'>
        {data.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          data.map((dataItem, index) => (
            <div className='Card'
              key={index}
            >
              <h1>{dataItem.title}</h1>
              <p>Fecha de captura: {dataItem.date}</p>
              <img className='CardImage'
                src={dataItem.hdurl}
                alt="imagen nasa"
                // style={{ width: "100%" }}
              />
              <p>{dataItem.explanation}</p>
            </div>
          ))
        )}
        </div>
      </section>
    </Page>
    )
}

export default Nasa
