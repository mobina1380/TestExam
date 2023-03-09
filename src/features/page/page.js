import { useDispatch, useSelector } from "react-redux";
import { selectSearchResults, selectSearchTerm, } from "../search/slice";
import { increamentPage, selectPage } from "./pageSlice";
import {selectErrorMessage} from "../search/slice";
import {getResults} from "../search/actions";
import PageItem from "./pageItem";
import React ,{useState} from "react";
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
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';

import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import { WidthFull } from "@mui/icons-material";
import { FormattedMessage } from "react-intl";


function Page() {
  const [page, setPage] = useState(2);
   const theme = useTheme();
   const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));
     const errrorMessage=useSelector(selectErrorMessage);
    const searchResults = useSelector(selectSearchResults);
    const query = useSelector(selectSearchTerm)
    const dispatch = useDispatch()
    //let page = useSelector(selectPage);
    function filterFunction(name) {
      // alert(name);
      // localStorage.clear();

      //dispatch(getResults({ query, page: 1 ,type:name}));
       dispatch(getResults({ query, page: 1 ,type:name}));
    }
    const handlePages = () =>{
       
         //dispatch(increamentPage());
          //  page +=1;
          // var  total=page;
          // total+=1;
          // page=total;
          // console.log('total'+total)
          //console.log('gggggggggg'+page);
          setPage(page + 1);
          console.log('page'+page);
        dispatch(getResults({ query,page }));
      
        
      }


    return (
        <>       
           
           <ThemeProvider theme={theme} >
            <Container component="main" sx={{  display: 'flex',
                flexDirection: 'column',
                justifyContent:'center',
                alignItems: 'center',
                marginTop: 10}} >
        {errrorMessage ? <>
        
        
     

     <h2>{errrorMessage}</h2>
       
        <img src='https://s2.uupload.ir/files/404__e5yz.png'  
        
        
        />
          
        
        </>
        
        
        
        
        
        
        
        
        
        
        
        : ''}
       
     <Box sx={{width:'600px',display:'flex',justifyContent:"space-around"}}> <Button variant="contained"   onClick={() => filterFunction('PODCAST')}>پادکست</Button> <Button variant="contained"   onClick={() => filterFunction('AUDIO_BOOK')} >کتاب صوتی </Button><Button variant="contained" onClick={() => filterFunction('SONG')}>آهنگ</Button><Button variant="contained" onClick={() => filterFunction('ALL')}>همه</Button></Box>
        {searchResults.map((result) => (
          <PageItem resultItem={result} />
         
        ))}

        {/* if api is images */}
        {/* <Box sx={{width:'100%',height:'auto',display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>{searchResults.map((result) => (
          <PageItem resultItem={result} />
         
        ))}</Box> */}
          {searchResults.length>0  ?  

            <ColorButton variant="contained" onClick={handlePages} sx={{width:'500px',marginTop:'3%',marginBottom:'3%'}}> 
            
            
              <FormattedMessage
                    id = "more"
                    defaultMessage="more"

                />
            
            
            </ColorButton>
: '' }
  </Container>
        </ThemeProvider>
         <ThemeProvider theme={theme} >
            <Container component="main" sx={{  display: 'flex',
                flexDirection: 'row',
                justifyContent:'center',
                alignItems: 'center',
                marginTop: 10}} >


           


            </Container>
        </ThemeProvider>




        

     
      </>
    );
}

export default Page;