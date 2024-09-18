import React from "react";
import { Container } from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent, timelineOppositeContentClasses } from '@mui/lab';
import { Typography } from "@mui/material";

export default function Education(){
   return(
      <div>
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
                     2018 - 2023
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                     <TimelineDot color="primary" variant="outlined"/>
                     <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                     <Typography variant="h6" component="span">
                        University of Immaculate Conception
                     </Typography><br/>                    
                     <Typography variant="caption">
                       Bachelor of Science in Medical Laboratory Science (SY 2018 - 2019)
                     </Typography><br/>
                     <Typography variant="caption">
                       Bachelor of Science in Computer Engineering (SY 2019 - 2023)
                     </Typography>
                  </TimelineContent>
               </TimelineItem>     

               <TimelineItem>
                  <TimelineOppositeContent  sx={{ m: 'auto 0' }}
                     align="right"
                     variant="body2"
                     color="text.secondary">
                     2016 - 2018
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                     <TimelineDot color="primary" variant="outlined"/>
                     <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                     <Typography variant="h6" component="span">
                        Ateneo de Davao University
                     </Typography>
                     <Typography variant="subtitle2">
                        Science, Technology, Engineering, & Mathematics (STEM)
                     </Typography>
                     <Typography variant="caption">Senior High School</Typography>
                  </TimelineContent>
               </TimelineItem>    

               <TimelineItem>
                  <TimelineOppositeContent  sx={{ m: 'auto 0' }}
                     align="right"
                     variant="body2"
                     color="text.secondary">
                     2006 - 2016
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                     <TimelineDot color="primary" variant="outlined"/>
                     <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                     <Typography variant="h6" component="span">
                        Maryknoll High School of Sto. Tomas
                     </Typography><br />
                     <Typography variant="caption">Primary - Seconday</Typography>
                  </TimelineContent>
               </TimelineItem>       

            </Timeline>
         </Container>
      </div>
   );
}