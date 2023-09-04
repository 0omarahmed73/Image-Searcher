import { useContext } from 'react'
import Img from '../Img/Img'
import './Gallary.css'
import { SearchContext } from './../../context/SearchContext';
const Gallary = () => {
  const {query, loading , error , data} = useContext(SearchContext);
  return (
    <div className="gallary">
      {query ? <h2>{query} Pictures</h2> : ''}
      <div className="imgs">
      {loading && !error && !data.length ? <div className='both'>
        <h2>Loading...</h2>
        <p className='loader'></p>
        <p className='no-data' style={{marginTop : '10px'}}>Searching For Images...</p>
      </div> : ''}
        {data && data.length ? data.map(d => {
          return <Img key={crypto.randomUUID()} img={d.image} img_alt={d.title}/>
        }) : !data.length && !loading && !error ? <p className='no-data'>No Images</p> : ''}
        {error ? <p>Error : {error}</p> : ''}
      </div>
    </div>
  )
}

export default Gallary