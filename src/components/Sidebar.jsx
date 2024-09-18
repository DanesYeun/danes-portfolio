import React from "react";
import Picture from "../assets/pictures/picture.jpg";
import { Typography } from "@mui/material";

export default function Sidebar(){
   return(
      <div className="grid grid-rows-6 rounded-b-lg md:rounded-none p-2 bg-indigo-950 text-white">
         <div className="border-4 border-white row-span-4 w-full h-64 rounded-lg overflow-hidden relative">
            <img src={Picture} alt="ProfilePicture" className="w-full h-full object-cover absolute left-0"/>
         </div>
         <div className="flex justify-center items-center">
            <Typography variant="h5">
               CLIFFORD DANES YAUN
            </Typography>
         </div>
         <div>
            <Typography variant="subtitle1">
               COMPUTER ENGINEER
            </Typography>
         </div>
      </div> 
   );
}