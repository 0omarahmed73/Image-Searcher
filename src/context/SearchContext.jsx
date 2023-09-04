import { createContext, useCallback, useReducer, useState } from "react";

export const SearchContext = createContext();

import { getImages } from "../apis/getImages";
const intialState = {
  data: [],
  loading: false,
  error: null,
};
const redFn = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null , data : [] };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, error: null, data: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "STOP_LOADING":
      return { ...state, loading: false };
    default:
      return state;
  }
};
const SearchProvider = ({ children }) => {
  const [history , setHistory] = useState(localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [] )
  console.log(history)
  const [state, dispatch] = useReducer(redFn, intialState);
  console.log(state)
  const [query , setQuery] = useState('');
  const handleHistory = (value) => {
    let newHistory = [value , ...history];
    console.log(newHistory)
    if (newHistory.length > 4){
      newHistory.length = 4
    }
    setHistory(newHistory);
    localStorage.setItem('history' , JSON.stringify(newHistory));

  }
  const hanldeSetQuery = useCallback(async (value) => {
    dispatch({ type: "FETCH_START" });
    setQuery(value)
    try {
      let data = await getImages(value);
      data = data.image_results
      data.length = 20;
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  }, []);
  return (
    <SearchContext.Provider value={{ hanldeSetQuery , ...state , query , history , handleHistory }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
