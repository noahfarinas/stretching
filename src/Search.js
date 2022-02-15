import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function Search({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEnter, setWordEnter] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEnter (searchWord);
    const newFilter = data.filter((value) => {
      return value.area.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
        setFilteredData(newFilter);

    }
  };

  const CLEARINPUT = () => {
      setFilteredData([]);
      setWordEnter("")
  };

  return (
    <div className="search">
      <div className="searchInput">
        <input type="text" placeholder={placeholder} value={wordEnter} onChange={handleFilter} />

        <div className="searchIcon">
            {filteredData.length === 0 ? <SearchIcon /> : <CloseIcon id="clear" onClick={CLEARINPUT} />}
          
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 3).map((value, key) => {
            return (
              <a className="dataItem" href={value.video} target="_blank">
                <p> {value.area} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;
