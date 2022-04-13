import React, { useState } from 'react';
import {
  Button,
  Typography,
  Grid,
  TextField,
  Box,
  Link,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from '@mui/material';
import Sort from './Sort';

function SortHome() {
    const [numColumns, setNumColumns] = useState(12);
    const [numColumnsInput, setNumColumnsInput] = useState(12);
    const [speed, setSpeed] = useState('150');
    const [animationSpeed, setAnimationSpeed] = useState('150');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
      // this horrible code block instantiates a random array in the state.
    let i = 1;
    const [nums, setNums] = useState(
        (Array.from({length: numColumns}, () => { return {val: i++, color: 'black'};} ))
        .map(a => {
            return ({ sort: Math.random(), value: a.val });
        })
        .sort((a, b) => a.sort - b.sort)
        .map(a => {return {val: a.value, color: 'black'}})
    );

    const handleNumColumnsChange = (e) => {
        setNumColumnsInput(Number(e.target.value));
        if (Number(e.target.value < 5) || Number(e.target.value > 50)) {
            setError(true);
            setErrorMessage('Number of columns must be between 5 and 50.')
        } else {
            setError(false);
            setErrorMessage('');
            setNumColumns(Number(e.target.value));
            i = 1;
            setNums((Array.from({length: Number(e.target.value)}, () => { return {val: i++, color: 'black'};} ))
            .map(a => {
                return ({ sort: Math.random(), value: a.val });
            })
            .sort((a, b) => a.sort - b.sort)
            .map(a => {return {val: a.value, color: 'black'}}));
        }
    }

    const handleSpeedChange = (e) => {
        setSpeed(e.target.value);
        if (Number(e.target.value) === 25 ) {
            setAnimationSpeed('0');
        } else {
            setAnimationSpeed('150');
        }
    }
    
    return (
    // <div style={{paddingLeft: "25px"}}>
    //   <Typography variant="h1" sx={{ fontFamily: "'Lora', serif;", pb: "15px"}}>Sorting Demo</Typography>
    //   <Typography variant="h4" sx={{ fontFamily: "'Lora', serif;", pb: "15px"}}>Home</Typography>
    //   <Box sx={{width: 500, height: 300, p: "10px", borderRadius: "20px" }} bgcolor="lightgray" alignItems="center" justifyContent="center">
    //     <Sort />
    //   </Box>
    // </div>
    <Grid container sx={{height: "80%", width: "100%", pl: "25px", pr: "25px"}} alignItems="flex-start" justifyContent="flex-start" spacing={1}>
        <Grid item xs={8}><Typography variant="h1" sx={{ fontFamily: "'Lora', serif;", pb: "15px"}}>Sorting Demo</Typography></Grid>
        <Grid item xs={4}>
            <Typography variant="h4" sx={{ fontFamily: "'Lora', serif;", pb: "15px", textAlign: "right"}}>
            <Link color="#000000" href="/" variant="inherit">
                Home
            </Link>
            </Typography>
        </Grid>
        <Grid item xs='auto'>
            <Box sx={{width: 500, height: 300, p: "10px", borderRadius: "20px" }} bgcolor="lightgray" alignItems="center" justifyContent="center">
                <Sort numColumns={numColumns} nums={nums} setNums={setNums} delay={Number(speed)} animationSpeed={Number(animationSpeed)} />
            </Box>
        </Grid>
        <Grid item xs='auto'>
            <Box sx={{width: 200, p: "10px", borderRadius: "20px" }} bgcolor="lightgray" alignItems="center" justifyContent="center">
                { error && <div style={{color:"red"}}>{errorMessage}<br /><br /></div>}
                <TextField onChange={handleNumColumnsChange} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} value={numColumnsInput} size="small" id="numColumns" label="Number of Columns" variant="outlined" />
                <br /><br />
                <FormControl variant="outlined" size="small">
                    <InputLabel id="speed-select" >Speed</InputLabel>
                    <Select labelId="speed-select" id="speed" value={speed} label="Speed" onChange={handleSpeedChange}>
                        <MenuItem value="1000" key="slow">slow</MenuItem>
                        <MenuItem value="300" key="medium">medium</MenuItem>
                        <MenuItem value="150" key="fast">fast</MenuItem>
                        <MenuItem value="25" key="veryfast">very fast</MenuItem>
                    </Select>
                </FormControl>

            </Box>
        </Grid>
    </Grid>
    )
}

export default SortHome;