import React, { useState } from 'react';
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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';


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

export default function Subs({ open }) {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="xxl"
        sx={{
          bgcolor: '#cfe8fc',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>



        <Box
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
          gap={2}
          sx={{
            maxWidth: '1200px',
            width: '100%',
          }}>


          <Box gridColumn="span 3">
            <Card>
              <CardMedia
                
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent sx={{ mt: 2, mb: 2 }}>
                <Typography gutterBottom variant="h5" component="div">
                  Welcome to Your Utilities page!
                </Typography>
                <Typography sx={{ mt: 2, mb: 2 }} variant="body2" color="text.secondary">
                  Below, you will find a list of all utilities and their corresponding costs that you pay for on a monthly basis. Click the "Add Utility" button to add additional utilities or click the trashcan icon to remove a utility.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The bar graph below will chart out your most expensive utilities.
                </Typography>
              </CardContent>
            </Card>
          </Box>




          <Box gridColumn="span 3" sx={{  justifyContent: 'center' }}>
            <Card>
              <CardContent>
                <Grid item xs={12} md={6}>
                  <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    Your Utilities
                  </Typography>
                  <Demo>
                    <List dense={dense}>
                 
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <DeleteIcon />
                            </IconButton>
                          }>
                          <ListItemText
                            primary="Single-line item"
                            secondary={secondary ? 'Secondary text' : null}/>
                        </ListItem>
     
                    </List>
                  </Demo>
                </Grid>
              </CardContent>

              <CardActions sx={{ justifyContent: 'center'}}>
                <Button variant="contained" color="primary">
                  Add Utility
                </Button>
              </CardActions>
            </Card>
          </Box>




          <Box gridColumn="span 3" sx={{ width: "100%", maxWidth: '1200px', display: 'flex', justifyContent: 'center' }}>
            <Card>
                <SubBars />
            </Card>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
