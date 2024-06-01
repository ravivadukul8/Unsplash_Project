import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeSearchValue } from "../slice/imageSlice";
import useDebounced from "../../../hooks/useDebounced";
import companyLogo from "../../../assets/Images/unsplash.png";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const searchValue = useDebounced(value);

  const handleChange = (value) => {
    setValue(value);
  };

  useEffect(() => {
    dispatch(changeSearchValue(searchValue));
    window.scrollTo(0, 0);
  }, [searchValue, dispatch]);

  return (
    <div className="search-bar">
      <img src={companyLogo} alt="company logo" />
      <input
        className="search-input"
        type="text"
        placeholder="Search high-resolution images..."
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
