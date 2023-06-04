
import { Box, Card, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Caurasal = ({index}) => {
    const dispatch=useDispatch();
    const {imageData,isStop}=useSelector((store)=>store);
    

  return (
    <>
    <Box  display={"flex"} gap={"3%"} padding={"30px"}>
        <Box width="55%">
            <img src={imageData[index].link} alt="banner" width={"100%"} style={{borderRadius:"20px"}} />
        </Box>
        <Box width="42%">
            <Typography>{imageData[index].description}</Typography> 
        </Box>
    </Box>
    </>
  )
}

export default Caurasal