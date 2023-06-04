
import { Box, Card, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Caurasal = ({index}) => {
    const dispatch=useDispatch();
    const {imageData,isStop}=useSelector((store)=>store);
    

  return (
    <>
    <Box  display={"flex"} flexDirection={["column","column","row"]} gap={"3%"} padding={"30px"}>
        <Box width={["100%","100%","55%"]}>
            <img src={imageData[index].link} alt="banner" width={"100%"} style={{borderRadius:"20px"}} />
        </Box>
        <Box width={["100%","100%","42%"]} color={"#2C3E50"}>
            <Typography variant="h2">{imageData[index].heading}</Typography> 
            <Typography mt="40px" fontSize={"20px"}>{imageData[index].description}</Typography> 
        </Box>
    </Box>
    </>
  )
}

export default Caurasal