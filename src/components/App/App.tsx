import React, { useEffect, useState } from "react"

import styles from "./App.module.scss"
import PhotoComponent from "../PhotoComponent/PhotoComponent";
import Photo from "../../types/photo.js";
import Camera from "../../types/camera.js";
import CameraButton from "../CameraButton/CameraButton";

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
            {(data === undefined) ? <p>NO DATA AVAILABLE</p> :
                <PhotoComponent url={data[cameraView].img_src} cameraAbbreviation={data[cameraView].camera.name as Camera.CameraAbbreviation}
                                cameraFullName={data[cameraView].camera.full_name as Camera.CameraFullName}
                                date={data[cameraView].earth_date}/>
            }
        </div>
    )
}

export default AppComponent

const sampleData: Photo.PhotoList = {
    "FHAZ": {
        "id": 877473,
        "sol": 3223,
        "camera": {
            "id": 20,
            "name": "FHAZ",
            "rover_id": 5,
            "full_name": "Front Hazard Avoidance Camera"
        },
        "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03223/opgs/edr/fcam/FLB_683622269EDR_F0910390FHAZ00341M_.JPG",
        "earth_date": "2021-08-30",
        "rover": {
            "id": 5,
            "name": "Curiosity",
            "landing_date": "2012-08-06",
            "launch_date": "2011-11-26",
            "status": "active"
        }
    },
    "RHAZ": {
        "id": 877475,
        "sol": 3223,
        "camera": {
            "id": 21,
            "name": "RHAZ",
            "rover_id": 5,
            "full_name": "Rear Hazard Avoidance Camera"
        },
        "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03223/opgs/edr/rcam/RLB_683622304EDR_F0910390RHAZ00341M_.JPG",
        "earth_date": "2021-08-30",
        "rover": {
            "id": 5,
            "name": "Curiosity",
            "landing_date": "2012-08-06",
            "launch_date": "2011-11-26",
            "status": "active"
        }
    },
    "NAVCAM": {
        "id": 877500,
        "sol": 3223,
        "camera": {
            "id": 26,
            "name": "NAVCAM",
            "rover_id": 5,
            "full_name": "Navigation Camera"
        },
        "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03223/opgs/edr/ncam/NRB_683606850EDR_M0910390NCAM00580M_.JPG",
        "earth_date": "2021-08-30",
        "rover": {
            "id": 5,
            "name": "Curiosity",
            "landing_date": "2012-08-06",
            "launch_date": "2011-11-26",
            "status": "active"
        }
    },
    "MAST": {
        "id": 877781,
        "sol": 3223,
        "camera": {
            "id": 22,
            "name": "MAST",
            "rover_id": 5,
            "full_name": "Mast Camera"
        },
        "img_src": "https://mars.nasa.gov/msl-raw-images/msss/03223/mcam/3223ML1007100020806816I01_DXXX.jpg",
        "earth_date": "2021-08-30",
        "rover": {
            "id": 5,
            "name": "Curiosity",
            "landing_date": "2012-08-06",
            "launch_date": "2011-11-26",
            "status": "active"
        }
    },
    "CHEMCAM": {
        "id": 877471,
        "sol": 3222,
        "camera": {
            "id": 23,
            "name": "CHEMCAM",
            "rover_id": 5,
            "full_name": "Chemistry and Camera Complex"
        },
        "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03222/soas/rdr/ccam/CR0_683525150PRC_F0910258CCAM02221L1.PNG",
        "earth_date": "2021-08-29",
        "rover": {
            "id": 5,
            "name": "Curiosity",
            "landing_date": "2012-08-06",
            "launch_date": "2011-11-26",
            "status": "active"
        }
    },
    "MAHLI": {
        "id": 877274,
        "sol": 3222,
        "camera": {
            "id": 24,
            "name": "MAHLI",
            "rover_id": 5,
            "full_name": "Mars Hand Lens Imager"
        },
        "img_src": "https://mars.nasa.gov/msl-raw-images/msss/03222/mhli/3222MH0001530001103361R00_DXXX.jpg",
        "earth_date": "2021-08-29",
        "rover": {
            "id": 5,
            "name": "Curiosity",
            "landing_date": "2012-08-06",
            "launch_date": "2011-11-26",
            "status": "active"
        }
    },
    "MARDI": {
        "id": 876957,
        "sol": 3219,
        "camera": {
            "id": 25,
            "name": "MARDI",
            "rover_id": 5,
            "full_name": "Mars Descent Imager"
        },
        "img_src": "https://mars.nasa.gov/msl-raw-images/msss/03219/mrdi/3219MD0012040000202590I01_DXXX.jpg",
        "earth_date": "2021-08-26",
        "rover": {
            "id": 5,
            "name": "Curiosity",
            "landing_date": "2012-08-06",
            "launch_date": "2011-11-26",
            "status": "active"
        }
    }
}