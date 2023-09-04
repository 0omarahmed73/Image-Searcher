import './Model.css'
const Model = ({visible = false , closeModel , img}) => {
  return (
    <>
    {visible ? <div className='model' onClick={closeModel}>
    <div className="model-body" onClick={(e) => e.stopPropagation()}>
    <div className="img">
      <img src={img} alt="" />
    </div>
    </div>
    </div> : ''}
    </>
  )
}

export default Model