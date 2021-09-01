import React, { useEffect, useState } from "react"

import styles from "./App.module.scss"
import PhotoComponent from "../PhotoComponent/PhotoComponent";
import LoadingCircleComponent from "../LoadingCircle/LoadingCircle";
import Photo from "../../types/photo.js";
import Camera from "../../types/camera.js";
import CameraButton from "../CameraButton/CameraButton";

const AppComponent = () => {
    const [executed, setExecuted] = useState(false)
    const [cameraView, setCameraView] = useState<Camera.CameraAbbreviation>("FHAZ")
    const [data, setData] = useState<undefined | Photo.PhotoList>(undefined)

    useEffect(() => {
        if (!executed) {
            async function fetchBackend() {
                console.log("Fetching...")

                const response = await fetch("https://nasa-backend.verity-network.de/rover/photos")
                const json = await response.json() as Photo.PhotoList
                setData(json)

                console.log(json)
            }

            fetchBackend()
            setExecuted(true)
        }
    })

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.title}>EASY NASA API ACCESS</p>
                <p className={styles.subtitle}>DESIGNED AND DEVELOPED BY <strong>VERITY</strong></p>
            </div>
            <div className={styles.buttons}>
                <CameraButton onClick={() => setCameraView("FHAZ")} cameraView={cameraView} cameraAbbreviation={"FHAZ"}/>
                <CameraButton onClick={() => setCameraView("RHAZ")} cameraView={cameraView} cameraAbbreviation={"RHAZ"}/>
                <CameraButton onClick={() => setCameraView("MAST")} cameraView={cameraView} cameraAbbreviation={"MAST"}/>
                <CameraButton onClick={() => setCameraView("MAHLI")} cameraView={cameraView} cameraAbbreviation={"MAHLI"}/>
                <CameraButton onClick={() => setCameraView("MARDI")} cameraView={cameraView} cameraAbbreviation={"MARDI"}/>
                <CameraButton onClick={() => setCameraView("CHEMCAM")} cameraView={cameraView} cameraAbbreviation={"CHEMCAM"}/>
                <CameraButton onClick={() => setCameraView("NAVCAM")} cameraView={cameraView} cameraAbbreviation={"NAVCAM"}/>
            </div>
            {(data === undefined) ? <LoadingCircleComponent /> :
                <PhotoComponent url={data[cameraView].img_src} cameraAbbreviation={data[cameraView].camera.name as Camera.CameraAbbreviation}
                                cameraFullName={data[cameraView].camera.full_name as Camera.CameraFullName}
                                date={data[cameraView].earth_date}/>
            }
        </div>
    )
}

export default AppComponent