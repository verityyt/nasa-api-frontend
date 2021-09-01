import React from "react"

import styles from "./App.module.scss"
import PhotoComponent from "../PhotoComponent/PhotoComponent.js";

const test = "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03223/opgs/edr/fcam/FLB_683622269EDR_F0910390FHAZ00341M_.JPG"

const AppComponent = () => {
    return (
        <div className={styles.container}>
            <PhotoComponent url={test} cameraAbbreviation={"FHAZ"} cameraFullName={"Front Hazard Avoidance Camera"} date={"2021-08-30"}/>
        </div>
    )
}

export default AppComponent