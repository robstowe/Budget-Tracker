import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UtilBars from '../Utilities/chart';
import List from '@mui/material/List';
import ModalUtil from './modal';
import UtilList from './list';
import Navbar from '../Navbar/index';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Auth from '../../utils/auth';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function Utils({ open }) {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [utilities, setUtilities] = useState([]);

  // Load util from local storage when the component mounts
  useEffect(() => {
    const savedUtilities = JSON.parse(localStorage.getItem('utilities')) || [];
    setUtilities(savedUtilities);
  }, []);

  // Function to save util to local storage when it updates
  useEffect(() => {
    localStorage.setItem('utilities', JSON.stringify(utilities));
  }, [utilities]);

  const addUtility = (newUtility) => {
    setUtilities((prevUtilities) => [...prevUtilities, newUtility]);
  };

  const deleteUtility = (index) => {
    const updatedUtilities = [...utilities];
    updatedUtilities.splice(index, 1);
    setUtilities(updatedUtilities);
  };

  const editUtility = (index, editedUtility) => {
    const updatedUtilities = [...utilities];
    updatedUtilities[index] = editedUtility;
    setUtilities(updatedUtilities);
  };

  return (
    <>
      {
        Auth.loggedIn() ? (
          <ThemeProvider theme={darkTheme}>
            <React.Fragment>
              <CssBaseline />
              <Navbar />
              <Container
                maxWidth="xxl"
                sx={{
                  bgcolor: 'grey',
                  minHeight: '100vh',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  marginLeft: '64px',
                  marginTop: '64px',
                  marginRight: '50px',
                  paddingRight: '50px',
                  paddingLeft: '50px',

                }}
              >
                <Box
                  display="grid"
                  gridTemplateColumns="repeat(3, 1fr)"
                  gap={2}
                  sx={{
                    maxWidth: '1200px',
                    width: '100%',
                    marginRight: '50px',
                    paddingRight: '50px'
                  }}
                >
                  <Box gridColumn="span 3">
                    <Card>
                      <CardMedia image="/static/images/cards/contemplative-reptile.jpg" title="green iguana" />
                      <CardContent sx={{ mt: 2, mb: 2 }}>
                        <Typography gutterBottom variant="h5" component="div">
                          Welcome to Your Utilities!
                        </Typography>
                        <Typography sx={{ mt: 2, mb: 2 }} variant="body2" color="text.secondary">
                          Below, you will find a list of all utilities and their corresponding costs that you pay for on a monthly basis. Click the "Add Utility" button to add additional utilities or click the trashcan icon to remove a utility.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          The bar graph below will chart out your most expensive utilities
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>

                  <Box gridColumn="span 3" sx={{ justifyContent: 'center' }}>
                    <Card>
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                          <Typography sx={{ mt: 2, mb: 2 }} variant="h6" component="div">
                            Your Utilities
                            <UtilList utilities={utilities} onDeleteUtility={deleteUtility} onEditUtility={editUtility} />
                          </Typography>
                        </Box>
                      </CardContent>

                      <CardActions sx={{ justifyContent: 'center' }}>
                        <ModalUtil addUtility={addUtility} />
                      </CardActions>
                    </Card>
                  </Box>

                  <Box gridColumn="span 3" sx={{ width: "100%", maxWidth: '1200px', display: 'flex', justifyContent: 'center' }}>
                    <Card>
                      {
                        utilities.length === 0 ? (<h1>no data</h1>) : (<UtilBars utilities={utilities} />)
                      }
                    </Card>
                  </Box>
                </Box>
              </Container>
            </React.Fragment>
          </ThemeProvider>
        ) : (
          <a href={'/'}>Please login to view</a>
        )
      }
    </>
  );
};
