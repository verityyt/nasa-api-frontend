import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/index.css"

import PhotoComponent from "./components/PhotoComponent/PhotoComponent"

const test = "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03223/opgs/edr/fcam/FLB_683622269EDR_F0910390FHAZ00341M_.JPG"

ReactDOM.render(
    <React.StrictMode>
        <PhotoComponent url={test} cameraAbbreviation={"FHAZ"} cameraFullName={"Front Hazard Avoidance Camera"} date={"2021-08-30"}/>
    </React.StrictMode>,
    document.getElementById('root')
);