import { useState, useEffect } from 'react';
import '../Ifoodcounter/Ifoodcounter.css'

export default function IfoodCounter(){
    const [value, setValue] = useState(1);
    const [buttonMinusStyle, setButtonMinusStyle] = useState('counter-button-minus-active')

    useEffect(() => {
        document.getElementById('preco').innerHTML = `R$ ${5 * value},00`
    }, [value])

    function down(){
        if(value <= 1){
            setButtonMinusStyle('counter-button-minus-desactive')
        }
        if(value > 0){
            setValue(value - 1);
        }
    }

    function up(){
        setValue(value + 1);
        setButtonMinusStyle('counter-button-minus-active')
    }

    return(
        <div className='counter-container'>
            <div className='counter-wrapper'>
                <button 
                className={buttonMinusStyle}
                onClick={down}>
                    -
                </button>
                <p>{value}</p>
                <button 
                className='counter-button-plus-active'
                onClick={up}>
                    +
                </button>
            </div>
            <button id='preco'></button>
        </div>
    )
}