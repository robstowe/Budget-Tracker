import * as React from 'react';
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
import SubBars from '../Subscriptions/chart';
import UtilBars from '../Utilities/chart';
import LeisureBars from '../Leisure/chart';
import Auth from '../../utils/auth';



import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from '../Navbar/index';
import MainImage from './assets/fintracker.png';


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

export default function Dashboard({ open }) {
  console.log(localStorage.getItem('leisures'));
  const leisures = JSON.parse(localStorage.getItem('leisures')) || [];
  const subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
  const utilities = JSON.parse(localStorage.getItem('utilities')) || [];
  return (
    <>
      {
        Auth.loggedIn() ? (
          <ThemeProvider theme={darkTheme}>
            <React.Fragment>
              <CssBaseline />
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
                          Welcome to Your Dashboard!
                        </Typography>
                        <Typography sx={{ mt: 2, mb: 2 }} variant="body2" color="text.secondary">
                          Below, you can find an overview of your monthly expenses broken out by categories, Subscriptions, Utilities, and Leisurely activities.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          The bar graph below will help you to visualize where you are spending the most money, and allow you to dictate where you can either cut costs, or spend a bit more to give yourself flexibility!
                        </Typography>

                      </CardContent>
                    </Card>
                  </Box>
                  <Box gridColumn="span 3" sx={{ justifyContent: 'center' }}>
                    <Card>
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                          <Typography sx={{ mt: 2, mb: 2 }} variant="h6" component="div">
                            Your Subscriptions
                            {
                              subscriptions.length === 0 ? (<h1>no data</h1>) : (<SubBars subscriptions={subscriptions} />)
                            }
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                  <Box gridColumn="span 3" sx={{ justifyContent: 'center' }}>
                    <Card>
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                          <Typography sx={{ mt: 2, mb: 2 }} variant="h6" component="div">
                            Your Utilities
                            {
                              utilities.length === 0 ? (<h1>no data</h1>) : (<UtilBars utilities={utilities} />)
                            }
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                  <Box gridColumn="span 3" sx={{ justifyContent: 'center' }}>
                    <Card>
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                          <Typography sx={{ mt: 2, mb: 2 }} variant="h6" component="div">
                            Your Leisures
                            {
                              leisures.length === 0 ? (<h1>no data</h1>) : (<LeisureBars leisures={leisures} />)
                            }
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                  <Card>
                  </Card>
                </Box>
              </Container>
            </React.Fragment>
          </ThemeProvider>
        ) : (
          <a href={"/"}>Please login to view</a>
        )
      }
    </>
  );
};



