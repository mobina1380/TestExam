import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
 // @ts-ignore
import classes from './ResultItem.module.css';
// @ts-ignore
const ResultItem = ({resultItem}) => {
   const theme = useTheme();
   
  return (
     <>
  
     
  <ThemeProvider theme={theme} >
            <Container component="main" sx={{  display: 'flex',
                flexDirection: 'row',
                justifyContent:'center',
                alignItems: 'center',
                marginTop: 10}} >












          <Card sx={{ display: 'flex',width:'600px',justifyContent:'space-between',textAlign:'right' }}>
   
{resultItem.thumbnail!=null  ?  <Box sx={{ display: 'flex', flexDirection: 'column',justifyContent:'center',paddingLeft:'10px' }}>
       
         <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={resultItem.thumbnail}
     />
      </Box> : '' }
     
      <CardContent sx={{ flex: '1 0 auto',width:'400px' }}>
       
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{maxWidth:resultItem.thumbnail!=null  ? "400px" : "550px"}}>
          {resultItem['web_displayed_link'][0]}<img src={resultItem.favicon} className={classes.imgfavion} />
          </Typography>
          <a href={resultItem.web_link}>{resultItem.title}</a>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{maxWidth:resultItem.thumbnail!=null  ? "400px" : "550px"}}>
          {resultItem.description}
        
          </Typography>
        </CardContent>
        

          </Card>













         {/* if api is song */}
{/*          
          <Card sx={{ display: "flex", direction: "rtl" , margin: 1 , padding: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 151,height:'auto' , borderRadius: 2 , marginLeft: 2 }}
        image={resultItem.cover.thumbnail}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {resultItem.name.persian}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >

              {resultItem.type == "SONG"
              ? <>
              <span>آهنگ | تک آوا |  00:0{
                Math.floor(resultItem.chosenTrack.length/60)
                }
                :
                </span>
                <span>{
              Math.round( ((resultItem.chosenTrack.length/60)-(Math.floor(resultItem.chosenTrack.length/60))
              ) *60)
                
                }
                </span>
                
                
                
                
                
                
                
                <p>{resultItem.artist[0].persian} </p>نسخه رایگان: <a href={resultItem.chosenTrack.source ? resultItem.chosenTrack.source :'#' } target="_blank">{resultItem.chosenTrack.source ? resultItem.chosenTrack.source :'' }</a></>
            
              : ''}

             {resultItem.type == "AUDIO_BOOK"
              ? <><p>{resultItem.narrators[0].persian} </p><a href={resultItem.chosenTrack.source ? resultItem.chosenTrack.source :'#' } target="_blank">{resultItem.chosenTrack.source ? resultItem.chosenTrack.source :'' }</a></>
            
            : ''} 


          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <audio controls>

            <source src={resultItem.chosenTrack.urls[5]  ?   resultItem.chosenTrack.urls[5] : ''          } />
          </audio>
        </Box>
      </Box>
    </Card>
 */}




























{/* if api is images */}
{/* <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={resultItem.cdn_thumbnail}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {resultItem.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           <a href={resultItem.full_domain}>{resultItem.full_domain}</a>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> */}

            </Container>
        </ThemeProvider>

       


     </>

    // <div className={classes.card}>
    //     <div className={classes['card__img']}>
    //       <img src={resultItem.thumbnail} alt="" />
    //   </div>
    //   <div className={classes['card__info']}>
    //       <h5>{resultItem['web_displayed_link'][0]}</h5>
    //       <a href={resultItem.web_link}>{resultItem.title}</a>
    //       <p>{resultItem.description}</p>
    //   </div>

     
    // </div>
  )
}

export default ResultItem
