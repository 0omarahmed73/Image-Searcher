import { useState } from 'react'
import Model from '../Model/Model'
import './Img.css'

const Img = ({img , img_alt}) => {
  console.log(img);
  const [visible , setVisible] = useState(false)
  return (
    <>
      <div className="img" onClick={() => setVisible(true)}>
        <img src={img} alt={img_alt} />
      </div>
     <Model visible={visible} closeModel={() => setVisible(false)} img={img} /> 
    </>
  )
}

export default Img