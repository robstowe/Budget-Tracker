import React from 'react';
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
import Navbar from '../Navbar/index';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const GraphContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%', // Set the graph container to the same height as the first card
});

export default function Subs({ open }) {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Navbar /> */}
      <Container maxWidth="xxl" sx={{ bgcolor: '#cfe8fc', height: 'auto', display: 'flex', justifyContent: "center", flexDirection: 'column' }}>
        <Box 
          sx={{
            width: open ? 'calc(100% - 240px)' : '100%',
            transition: 'width 0.3s ease',
            marginTop: '100px',
            flex: '1 1 auto',
            justifyContent: "center",
          }}
        />

        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
          <Box gridColumn="span 3">
            <Card sx={{ maxWidth: 10000 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Box>

          <Box gridColumn="span 3" sx={{ display: "flex", justifyContent: "center" }}>
            <Card sx={{ maxWidth: 10000, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box gridColumn="span 3">
            <Card sx={{ maxWidth: 10000 }}>
              <GraphContainer>
                <SubBars sx={{ justifyContent: 'center', display: "flex", textAlign: "center"}} />
              </GraphContainer>
            </Card>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}




// import React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import CssBaseline from '@mui/material/CssBaseline';
// import Container from '@mui/material/Container';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import SubBars from '../Subscriptions/chart';
// import Navbar from '../Navbar/index';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function Subs({ open }) {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       {/* <Navbar /> */}
//       <Container maxWidth="xxl" sx={{ bgcolor: '#cfe8fc', height: 'auto', display: 'flex', justifyContent: "center", flexDirection: 'column' }}>
//         <Box 
//           sx={{
//             width: open ? 'calc(100% - 240px)' : '100%',
//             transition: 'width 0.3s ease',
//             marginTop: '100px',
//             flex: '1 1 auto',
//             justifyContent: "center",
//           }}
//         />

//         <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
//           <Box gridColumn="span 3">
//             <Card sx={{ maxWidth: 10000 }}>
//               <CardMedia
//                 sx={{ height: 140 }}
//                 image="/static/images/cards/contemplative-reptile.jpg"
//                 title="green iguana"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   Lizard
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Lizards are a widespread group of squamate reptiles, with over 6,000
//                   species, ranging across all continents except Antarctica
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small">Share</Button>
//                 <Button size="small">Learn More</Button>
//               </CardActions>
//             </Card>
//           </Box>

//           <Box gridColumn="span 3" sx={{ display: "flex", justifyContent: "center" }}>
//             <Card sx={{ maxWidth: 1000, display: "flex", justifyContent: "center", alignItems: "center" }}>
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   Lizard
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Lizards are a widespread group of squamate reptiles, with over 6,000
//                   species, ranging across all continents except Antarctica
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Box>

//           <Box gridColumn="span 3" sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//             <Card sx={{ maxWidth: '100%' }}>
//               <SubBars sx={{ justifyContent: 'center', display: "flex", textAlign: "center"}} />
//             </Card>
//           </Box>
//         </Box>
//       </Container>
//     </React.Fragment>
//   );
// }









