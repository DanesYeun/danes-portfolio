import * as React from "react";
import Sidebar from "../components/Sidebar";
import { Tab, Tabs, Divider } from "@mui/material";
import AboutMe from "../components/AboutMe";
import Education from "../components/Educaction";
import WorkExperience from "../components/WorkExperience";

export default function LandingPage(){
   const [tabValue, setTabValue] = React.useState(0);

   const handleTabChange = (event, newTabValue) => {
      setTabValue(newTabValue);
   };

   return(
      <div className="w-full h-full md:py-20 md:px-40 flex flex-row justify-center items-center bg-gray-200">
         <div className="w-full h-full md:rounded-md md:grid md:grid-cols-3 shadow-md bg-white overflow-hidden">
            <Sidebar/>
            <div className="px-2 border-2 rounded-lg col-span-2 m-2 flex flex-col flex-grow bg-gray-100 overflow-hidden">
               <div className="flex flex-col flex-grow">
                  <Tabs value={tabValue} onChange={handleTabChange} centered>
                     <Tab label="About Me" value={0}/>
                     <Tab label="Education" value={1}/>
                     <Tab label="Work Experience" value={2}/>
                  </Tabs>
                  <Divider/>
                  <div className="flex-grow w-full">
                     {tabValue === 0 && <AboutMe/>}
                     {tabValue === 1 && <Education/>}
                     {tabValue === 2 && <WorkExperience/>}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}