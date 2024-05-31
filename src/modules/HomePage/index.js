import React, { useEffect } from "react";
import SearchBar from "./component/SearchBar";
import ImageContainer from "./component/ImageContainer";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "./slice/imageSlice";
const Home = () => {
  const dispatch = useDispatch();
  const { pageNo, searchValue } = useSelector((state) => state.Images);

  useEffect(() => {
    dispatch(
      getImages({
        pageNo,
        searchValue,
      })
    );
  }, [pageNo, searchValue]);

  return (
    <div>
      <SearchBar />
      <ImageContainer />
    </div>
  );
};

export default Home;
