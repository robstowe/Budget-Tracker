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


import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from '../Navbar/index';

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
  return (

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
      }}
    >
      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        gap={2}
        sx={{
          maxWidth: '1200px',
          width: '100%',
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
                  
                </Typography>
              </Box>
            </CardContent>
            </Card>
        </Box>
        
       
        
        

        <Card>
        {/* <Box gridColumn="span 3" sx={{ width: "100%", maxWidth: '1200px', display: 'flex', justifyContent: 'center' }}>
               <LeisureBars sx={{ padding: '5px' }}/>
            </Box>
              </Card>
              <Card>
        <Box gridColumn="span 3" sx={{ width: "100%", maxWidth: '1200px', display: 'flex', justifyContent: 'center' }}>
               <LeisureBars sx={{ padding: '5px' }}/>
            </Box>
              </Card>
              <Card>
        <Box gridColumn="span 3" sx={{ width: "100%", maxWidth: '1200px', display: 'flex', justifyContent: 'center' }}>
               <LeisureBars sx={{ padding: '5px' }}/>
            </Box> */}
            {/* {
                leisures.length === 0 ? (<h1>no data</h1>) : (<LeisureBars leisures={leisures}/>)
              } */}
              
              </Card>
          </Box>
        </Container>
      </React.Fragment>
    </ThemeProvider>
);
};

//     <ThemeProvider theme={darkTheme}>
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="xxl"
//         sx={{
//           bgcolor: 'grey',
//           minHeight: '100vh',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           flexDirection: 'column',
//         }}>
//          <Box
//           display="grid"
//           gridTemplateColumns="repeat(3, 1fr)"
//           gap={2}
//           sx={{
//             maxWidth: '1200px',
//             width: '100%',
//             mt: 10, 
//             mb: 2 
//           }}>
            
//           <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
//             <Box gridColumn="span 3">
//               <Card sx={{ maxWidth: 10000 }}>
//                 <CardMedia
//                   sx={{ height: 140 }}
//                   image="/static/images/cards/contemplative-reptile.jpg"
//                   title="green iguana"
//                 />
//                 <CardContent sx={{ mt: 2, mb: 2 }}>
//                   <Typography  gutterBottom variant="h5" component="div">
//                     Lizard
//                   </Typography>
//                   <Typography sx={{ mt: 2, mb: 2 }} variant="body2" color="text.secondary">
//                     Lizards are a widespread group of squamate reptiles, with over 6,000
//                     species, ranging across all continents except Antarctica
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button size="small">Share</Button>
//                   <Button size="small">Learn More</Button>
//                 </CardActions>
//               </Card>
//             </Box>
//             <Box gridColumn="span 1">
//             <Card sx={{ maxWidth: 10000 }}>
//                <SubBars />
//               </Card>
//             </Box>
//             <Box gridColumn="span 1">
//             <Card sx={{ maxWidth: 10000 }}>
//                <UtilBars />
//               </Card>
//             </Box>
//             <Box gridColumn="span 1">
//             <Card sx={{ maxWidth: 10000 }}>
//                <LeisureBars />
//               </Card>
//             </Box>
//             <Box gridColumn="span 3">
//               <Card sx={{ maxWidth: 10000 }}>
//                 <CardMedia
//                   sx={{ height: 140 }}
//                   image="/static/images/cards/contemplative-reptile.jpg"
//                   title="green iguana"
//                 />
//                 <CardContent sx={{ mt: 2, mb: 2 }}>
//                   <Typography gutterBottom variant="h5" component="div">
//                     Lizard
//                   </Typography>
//                   <Typography sx={{ mt: 2, mb: 2 }} variant="body2" color="text.secondary">
//                     Lizards are a widespread group of squamate reptiles, with over 6,000
//                     species, ranging across all continents except Antarctica
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button size="small">Share</Button>
//                   <Button size="small">Learn More</Button>
//                 </CardActions>
//               </Card>
//             </Box>
//             <Box gridColumn="span 3">
//               <Card sx={{ maxWidth: 10000 }}>
//                 <CardMedia
//                   sx={{ height: 140 }}
//                   image="/static/images/cards/contemplative-reptile.jpg"
//                   title="green iguana"
//                 />
//                 <CardContent sx={{ mt: 2, mb: 2 }}>
//                   <Typography gutterBottom variant="h5" component="div">
//                     Lizard
//                   </Typography>
//                   <Typography sx={{ mt: 2, mb: 2 }} variant="body2" color="text.secondary">
//                     Lizards are a widespread group of squamate reptiles, with over 6,000
//                     species, ranging across all continents except Antarctica
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button size="small">Share</Button>
//                   <Button size="small">Learn More</Button>
//                 </CardActions>
//               </Card>
//             </Box>
//             <Box gridColumn="span 3">
//               <Card sx={{ maxWidth: 10000 }}>
//                 <CardMedia
//                   sx={{ height: 140 }}
//                   image="/static/images/cards/contemplative-reptile.jpg"
//                   title="green iguana"
//                 />
//                 <CardContent sx={{ mt: 2, mb: 2 }}>
//                   <Typography gutterBottom variant="h5" component="div">
//                     Lizard
//                   </Typography>
//                   <Typography sx={{ mt: 2, mb: 2 }}  variant="body2" color="text.secondary">
//                     Lizards are a widespread group of squamate reptiles, with over 6,000
//                     species, ranging across all continents except Antarctica
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button size="small">Share</Button>
//                   <Button size="small">Learn More</Button>
//                 </CardActions>
//               </Card>
//             </Box>
            
            
//           </Box>

//         </Box>
//       </Container>
//     </React.Fragment>
//       </ThemeProvider>
//   );
// }

