import React, { useEffect, useState } from "react"

import styles from "./App.module.scss"
import PhotoComponent from "../PhotoComponent/PhotoComponent";
import Photo from "../../types/photo.js";
import Camera from "../../types/camera.js";

const AppComponent = () => {
    const [executed, setExecuted] = useState(false)
    const [cameraView, setCameraView] = useState<Camera.CameraAbbreviation>("FHAZ")
    const [data, setData] = useState<undefined | Photo.PhotoList>(undefined)

    useEffect(() => {
        if (!executed) {
            console.log("Fetching...")
            setData(sampleData)

            setExecuted(true)
        }
    })

    return (
        <div className={styles.container}>
            {(data === undefined) ? <p>NO DATA AVAILABLE</p> :
                <PhotoComponent url={data[cameraView].img_src} cameraAbbreviation={data[cameraView].camera.name as Camera.CameraAbbreviation}
                                cameraFullName={data[cameraView].camera.full_name as Camera.CameraFullName}
                                date={data[cameraView].earth_date}/>
            }
            <button onClick={() => {
                console.log(data)
            }
            }>Print Data
            </button>
        </div>
    )
}

export default AppComponent