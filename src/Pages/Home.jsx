import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { startButtonAction, stopButtonAction } from "../redux/action";
import BannerData from "../components/BannerData";
const Home = () => {
  const dispatch = useDispatch();
  //getting data from redux store
  const { imageData, isStop } = useSelector((store) => store);

  const [index, setIndex] = useState(0);
  const [grayScale, setGrayScale] = useState(1);
  //applying time delay of 3 second
  useEffect(() => {
    let id;
    if (isStop) {
      id = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % imageData.length);
      }, 3000);
    }
    return () => {
      clearInterval(id);
    };
  }, [isStop]);
  //Left button click
  const handleLeftButtonCLick = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
  };
  //right button click
  const handleRightButtonCLick = () => {
    setIndex((prevIndex) =>
      prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
    );
  };
  //showing catalog details on clicking image and changing grayscale filter
  const handleImageClick = (e) => {
    setIndex(e.id - 1);
    setGrayScale(e.id);
  };
  return (
    <>
      <BannerData index={index} />
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDirection={["column", "row"]}
      >
        <Box
          display={"flex"}
          width={["100%", "60%"]}
          alignItems={"center"}
          gap={"10px"}
        >
          <ArrowLeftIcon fontSize="large" onClick={handleLeftButtonCLick} />
          {imageData.length > 0 &&
            imageData.map((e) => (
              <img
                width={"20%"}
                key={e.id}
                src={e.link}
                alt="banner"
                onClick={() => handleImageClick(e)}
                style={{
                  borderRadius: "10px",
                  filter:
                    e.id === grayScale ? "grayscale(0%)" : "grayscale(100%)",
                }}
              />
            ))}
          <ArrowRightIcon fontSize="large" onClick={handleRightButtonCLick} />
        </Box>
        {/* play push button */}
        <Box
          bgcolor="#25beda"
          color="white"
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width={60}
          height={60}
          boxShadow={3}
          cursor="pointer"
          ml="40px"
        >
          {isStop ? (
            <PauseIcon
              fontSize="large"
              onClick={() => dispatch(stopButtonAction())}
            />
          ) : (
            <PlayArrowIcon
              fontSize="large"
              onClick={() => dispatch(startButtonAction())}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default Home;
