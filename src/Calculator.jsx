import React,{useState} from 'react'



const Calculator = () => {

    const [value,setValue] = useState('')

    const numFun=(e)=>{
        setValue(value + e.target.value)
    }

  return (
    <>
    <div className='cal_main'>
      <div className='cal_container'>
            <div className='display'>
                <input type='text' value={value} readOnly />
            </div>
            <div className='btn'>
                <div>
                    <button onClick={()=>{setValue('')}}>AC</button>
                    <button onClick={()=>{setValue(value.slice(0,-1))}}>DE</button>
                    <button value={'%'} onClick={numFun}>%</button>
                    <button value={'/'} Click={numFun}>/</button>
                </div>
                <div>
                    <button value={'7'} onClick={numFun}>7</button>
                    <button value={'8'} onClick={numFun}>8</button>
                    <button value={'9'} onClick={numFun}>9</button>
                    <button value={'*'} onClick={numFun}>*</button>
                </div>
                <div>
                    <button value={'4'} onClick={numFun}>4</button>
                    <button value={'5'} onClick={numFun}>5</button>
                    <button value={'6'} onClick={numFun}>6</button>
                    <button value={'-'} onClick={numFun}>-</button>
                </div>
                <div>
                    <button value={'1'} onClick={numFun}>1</button>
                    <button value={'2'} onClick={numFun}>2</button>
                    <button value={'3'} onClick={numFun}>3</button>
                    <button value={'+'} onClick={numFun}>+</button>
                </div>
                <div>
                    <button value={'00'} onClick={numFun}>00</button>
                    <button value={'0'} onClick={numFun}>0</button>
                    <button value={'.'} onClick={numFun}>.</button>
                    <button onClick={()=>{try{return setValue(eval(value))} catch{return 'ERROR'}}}>=</button>
                </div>
            </div>
        </div>
      </div>
       
    </>
  )
}

export default Calculator