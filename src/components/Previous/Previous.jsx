import { useContext } from 'react';
import './Previous.css'
import { SearchContext } from '../../context/SearchContext';
const Previous = ({name}) => {
  const { hanldeSetQuery } = useContext(SearchContext);
  return (
    <div className="previous" onClick={() => hanldeSetQuery(name)}>
      <p>{name}</p>
    </div>
  )
}

export default Previous