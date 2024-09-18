import React, { useEffect, useState } from "react";
import { Call, AlternateEmail, LocationOn, LinkedIn, ContactPage} from "@mui/icons-material";
import { TbBrandMysql, TbBrandReact, TbBrandJavascript, TbBrandHtml5, TbBrandCss3, TbBrandLaravel, TbBrandCSharp, TbBrandGit } from "react-icons/tb";
import Resume from "../assets/files/Yaun_Resume.pdf";
import Grid from '@mui/material/Grid2';
import { Paper, Container, Divider, Fab, Snackbar, Alert } from "@mui/material";
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: '#fff',
   ...theme.typography.body2,
   padding: theme.spacing(1),
   textAlign: 'center',
   color: theme.palette.text.secondary,
   ...theme.applyStyles('dark', {
     backgroundColor: '#1A2027',
   }),
 }));

export default function AboutMe() {
   const [openSnackbar, setOpenSnackbar] = React.useState(false);
   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

   const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
   }

   useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   const handleCloseSnackbar = (event, reason) => {
      if (reason === 'clickaway') {
         return;
      }
      setOpenSnackbar(false);
   }

   const handleDownloadButton = () => {
      setOpenSnackbar(true);
   }
   return(
      <Container className="w-full h-full p-2" fixed>
         <Grid container spacing={2}>
            <Grid size={12}>
               <Item>
                  <div className="text-justify">
                     I’m a Computer Engineering graduate with a background in software development, having worked with C#, ReactJS, and PostgreSQL. I currently manage several applications, including web and desktop apps, as well as Windows services for our HR and accounting systems. I’m driven by tech challenges and enjoy optimizing and maintaining diverse software solutions.
                  </div> 
               </Item>
            </Grid>
            <Grid size={isSmallScreen ? 12 : 6}>
               <Item className="flex">
                  <div className="w-full text-left">
                     <div className="mb-2">Contact Information</div>
                     <Divider/>
                     <ul className="mt-2 space-x-1 space-y-1">
                        <li className="font-bold">
                           <a href="tel:+639396594909"
                              className="hover:font-bold hover:text-blue-950">
                              <Call className="m-2"/> 
                              09396594909
                           </a>
                        </li>
                        <li>
                           <a href="mailto:clifforddanesyaun@gmail.com"
                              className="hover:font-bold hover:text-blue-950">
                              <AlternateEmail className="m-2"/>
                              clifforddanesyaun@gmail.com
                           </a>
                        </li>
                        <li>
                           <a href="https://www.linkedin.com/in/clifford-danes-yaun-6b0172250/"
                                 className="hover:font-bold hover:text-blue-950"
                              >
                              <LinkedIn className="m-2"/>
                              Clifford Danes Yaun
                           </a>
                        </li>
                        <li >
                           <LocationOn className="m-2"/>
                           Sto. Tomas, Davao del Norte
                        </li>
                     </ul>
                  </div>
               </Item>
            </Grid>
            <Grid size={isSmallScreen ? 12 : 6}>
               <Item className="flex mb-2">
                  <div className="w-full text-left">
                     <div className="mb-2">Skills</div>
                     <Divider/>
                     <div className="flex flex-wrap space-x-2 mt-2">
                        <TbBrandMysql size={50} />
                        <TbBrandReact size={50}/>
                        <TbBrandJavascript size={50}/>
                        <TbBrandHtml5 size={50}/>
                        <TbBrandCss3 size={50}/>
                        <TbBrandLaravel size={50}/>
                        <TbBrandCSharp size={50}/>
                        <TbBrandGit size={50}/>
                     </div>
                  </div>
               </Item>
               <a href={Resume} download="Yaun_Resume" target="_blank">
                  <Fab color="primary" variant="extended" onClick={handleDownloadButton}>
                     <ContactPage className="m-2"/>
                     Download Resume
                  </Fab>
               </a>
            </Grid>
         </Grid>
         <Snackbar anchorOrigin= {{vertical: 'top', horizontal: 'center'}} open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
            <Alert
               onClose={handleCloseSnackbar}
               severity="success"
               variant="filled"
               sx={{ width: '100%' }}
            >
               Resume Downloaded!
            </Alert>
         </Snackbar>
      </Container>
      
   );
}
