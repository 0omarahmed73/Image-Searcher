import { useContext } from "react";
import { Camera } from "@phosphor-icons/react";
import Gallary from "../../components/Gallary/Gallary";
import Previous from "../../components/Previous/Previous";
import SearchForm from "../../components/SearchForm/SearchForm";
import "./RootLayout.css";
import { SearchContext } from "../../context/SearchContext";
import Footer from "../../components/Footer/Footer";

const RootLayout = () => {
  const {history} = useContext(SearchContext)
  console.log(history)
  return (
    <div className="root-layout">
      <div className="container">
        <div className="first-part">
        <Camera size={200} />
        <h1>Image-Searcher</h1>
        <SearchForm />
        </div>
<div className="sec-part">
          <div className="previousAll">
          {history.length ? history.map(h => <Previous key={crypto.randomUUID()} name={h} />) : <p></p>}
          </div>
          <Gallary />
</div>
      </div>
<Footer />
    </div>
  );
};

export default RootLayout;
