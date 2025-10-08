import{useState} from 'react';

const Contador = () => {
       
    const[contador, setContador] = useState(0);
    const [display, setDisplay] = useState('');

    function imputNumber (num) {
         setDisplay(display+ num);
    }

    function Aumentar() {
        setContador(contador + 1);
    }
    function Disminuir() {
        setContador(contador - 1);
    }


return (
    <div>
        <label>Contador:{contador }</label>
        <br/>
        <button onClick={Aumentar}>Aumentar</button>
        <button onClick={Disminuir}>Disminuir</button>
        <br/>
        <div className="display">{display}</div>

        <button onClick={() => imputNumber(1)}>1</button>
        <button onClick={() => imputNumber(2)}>2</button>
        <button onClick={() => imputNumber(3)}>3</button><br/>
        <button onClick={() => imputNumber(4)}>4</button>
        <button onClick={() => imputNumber(5)}>5</button>
        <button onClick={() => imputNumber(6)}>6</button><br/>
        <button onClick={() => imputNumber(7)}>7</button>
        <button onClick={() => imputNumber(8)}>8</button>
        <button onClick={() => imputNumber(9)}>9</button><br/>
        <button onClick={() => imputNumber(0)}>0</button>
    </div>

);
}



export default Contador;