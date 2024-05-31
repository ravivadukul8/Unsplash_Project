import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePageNo } from "../slice/imageSlice";

const ImageContainer = () => {
  const { allImages, pageNo } = useSelector((state) => state.Images);
  const dispatch = useDispatch();
  const loader = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        loader.current &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        allImages.length > 0
      ) {
        dispatch(changePageNo(pageNo + 1));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [allImages.length, pageNo, dispatch]);

  return (
    <div className="image-container">
      {allImages.map((image, index) => (
        <div key={index}>
          <img src={image.urls.regular} alt="image" />
          {index === allImages.length - 1 && <div ref={loader}>Loading...</div>}
        </div>
      ))}
    </div>
  );
};

export default ImageContainer;
