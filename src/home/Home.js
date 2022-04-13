import React from "react";
import { Link } from 'react-router-dom';
import {
    Button,
    Typography,
    Box
  } from '@mui/material';

function Home () {
    return (
    <div style={{paddingLeft: "25px"}}>
        <Typography variant="h1" sx={{ fontFamily: "'Lora', serif;"}}>Jonah Duffin</Typography>
        <Button
            component={Link}
            to="/about"
            sx={{ borderRadius: "10px", borderStyle: "solid", borderWidth: "2px", borderColor: "rgb(58, 45, 3)", backgroundColor: "rgb(247, 240, 216)", color: "rgb(58, 45, 3)", mb: "2px",
            "&:hover": {
                background: "rgb(255, 196, 4)"
            },
            width:"250px"
            }}
            size="large"
        >
            About
        </Button>
        <br />
        <Button
            component={Link}
            to="/sorting"
            sx={{ borderRadius: "10px", borderStyle: "solid", borderWidth: "2px", borderColor: "rgb(58, 45, 3)", backgroundColor: "rgb(247, 240, 216)", color: "rgb(58, 45, 3)", mb: "2px",
            "&:hover": {
                background: "rgb(255, 196, 4)"
            },
            width:"250px"
            }}
            size="large"
        >
            Sorting Algorithms Demo
        </Button>
    </div>
    )
}

export default Home;