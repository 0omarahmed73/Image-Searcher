import { useContext, useState } from "react";
import "./SearchForm.css";
import { SearchContext } from "../../context/SearchContext";

const SearchForm = () => {
  const { hanldeSetQuery , handleHistory } = useContext(SearchContext);
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search && search.trim()){
      hanldeSetQuery(search);
      handleHistory(search)
    }
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit} className="form">
        <div className="row">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            onChange={(e) => handleChange(e)}
            value={search}
          />
          <button>Search</button>
        </div>
      </form>
    </>
  );
};

export default SearchForm;
