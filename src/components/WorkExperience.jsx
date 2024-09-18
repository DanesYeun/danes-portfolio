import React from "react";
import { Container } from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent, timelineOppositeContentClasses } from '@mui/lab';
import { Typography } from "@mui/material";

export default function WorkExperience(){
   return(
      <div className="overflow-hidden">
         <Container className="w-full h-full p-2" fixed>
            <Timeline
               sx={{
                  [`& .${timelineOppositeContentClasses.root}`]: {
                  flex: 0.2,
                  },
               }}>

               <TimelineItem>
                  <TimelineOppositeContent  sx={{ m: 'auto 0' }}
                     align="right"
                     variant="body2"
                     color="text.secondary">
                     JAN 2024 - Present
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                     <TimelineDot color="primary" variant="outlined"/>
                     <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                     <Typography variant="h6" component="span">
                        CoreDev Solutions Inc.
                     </Typography><br/>                    
                     <Typography variant="subtitle2">
                        Software Engineer
                     </Typography>  
                     <Typography variant="caption">
                        Laravel, JQuery, MySQL, HTML, CSS, JavaScript, PHP, & Software Maintenance.
                     </Typography> 
                  </TimelineContent>
               </TimelineItem>     

               <TimelineItem>
                  <TimelineOppositeContent  sx={{ m: 'auto 0' }}
                     align="right"
                     variant="body2"
                     color="text.secondary">
                     JUL 2023 - JAN 2024
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                     <TimelineDot color="primary" variant="outlined"/>
                     <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                     <Typography variant="h6" component="span">
                        CoreDev Solutions Inc.
                     </Typography>
                     <Typography variant="subtitle2">
                       Software Implementor
                     </Typography>
                     <Typography variant="caption">
                       MySQL, Database Analysis, Customer Support, & SeleniumIDE.
                     </Typography>
                  </TimelineContent>
               </TimelineItem>    

               <TimelineItem>
                  <TimelineOppositeContent  sx={{ m: 'auto 0' }}
                     align="right"
                     variant="body2"
                     color="text.secondary">
                     FEB - MAY 2023
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                     <TimelineDot color="primary" variant="outlined"/>
                     <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                     <Typography variant="h6" component="span">
                        Netzon Global Technologies Inc.
                     </Typography><br />
                     <Typography variant="subtitle2">Intern Software Developer</Typography>
                     <Typography variant="caption">C#, PostgreSQL, React, & Figma.</Typography>
                  </TimelineContent>
               </TimelineItem>       

            </Timeline>
         </Container>
      </div>
   );
}