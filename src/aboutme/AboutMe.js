import React from 'react';
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

function About() {
    return (
        <Grid container sx={{height: "80%", width: "100%", pl: "25px", pr: "25px"}} alignItems="flex-start" justifyContent="flex-start" spacing={1}>
            <Grid item xs={8}><Typography variant="h1" sx={{ fontFamily: "'Lora', serif;", pb: "15px"}}>About</Typography></Grid>
            <Grid item xs={4}>
                <Typography variant="h4" sx={{ fontFamily: "'Lora', serif;", pb: "15px", textAlign: "right"}}>
                <Link color="#000000" href="/" variant="inherit">
                    Home
                </Link>
                </Typography>
            </Grid>
            <Grid item xs='auto'>
                <Box sx={{width: 450, minHeight: '415px', p: "10px", borderRadius: "20px" }} bgcolor="lightgray" alignItems="center" justifyContent="center">
                    <Typography variant="h5" sx={{ fontFamily: "'Lora', serif;", pb: "15px"}}>About This Site</Typography>
                    <Typography variant="body1">
                        My name is Jonah Duffin; I'm currently a Master of Information Systems Management student at Brigham Young University.
                        <br /><br />
                        Welcome to my simple portfolio site. Here I'll add fun side projects as I get the time to work on them. 
                        <br /><br />
                        For now, I've built a sorting algorithm tool that will demonstrate how various sorting algorithms move 
                        elements around to sort an array.
                        <br /><br />
                        This site is built from scratch in ReactJS. MaterialUI provides a lot of the styling components.
                        <br /><br />
                        For hiring inqueries or to take a look at my resume, reach out to me <b>jonahfduffin@gmail.com</b>.
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs='auto'>
                <Box sx={{width: 450, minHeight: '415px', p: "10px", borderRadius: "20px" }} bgcolor="lightgray" alignItems="center" justifyContent="center">
                    <Typography variant="h5" sx={{ fontFamily: "'Lora', serif;", pb: "15px"}}>Core Competencies</Typography>
                    <Typography variant="body1">
                        JavaScript
                        <ul>
                            <li>Node Development</li>
                            <li>ReactJS</li>
                            <li>Express.js</li>
                        </ul>
                        Python
                        <ul>
                            <li>Data Engineering/ETL</li>
                            <li>Data Science (pandas, scikit-learn, NumPy, Matplotlib) </li>
                            <li>Django/web dev</li>
                        </ul>
                        SQL
                        <ul>
                            <li>DQL/Data Manipulation</li>
                            <li>TSQL/SQL Server</li>
                        </ul>
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs='12'>
                <Box sx={{width: 450, p: "10px", borderRadius: "20px" }} bgcolor="lightgray" alignItems="center" justifyContent="center">
                    <Typography variant="h5" sx={{ fontFamily: "'Lora', serif;", pb: "15px"}}>Other Proficiencies</Typography>
                    <Typography variant="body1">
                        <ul>
                            <li>C++</li>
                            <li>C#/ASP.net Core MVC</li>
                            <li>HTML, CSS</li>
                            <li>AWS Cloud Infrastructure</li>
                            <li>Information Security/Secure Development</li>
                            <li>Data Structures</li>
                            <li>Data Visualization (Tableau, PowerBI, Domo)</li>
                            <li>Excel VBA</li>
                        </ul>
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

export default About;