import React from "react"

import styles from "./PhotoComponent.module.scss"
import Camera from "../../types/camera.js";

type Props = {
    url: string
    cameraAbbreviation: Camera.CameraAbbreviation
    cameraFullName: Camera.CameraFullName
    date: string
}
const PhotoComponent: React.FC<Props> = ({ url, cameraAbbreviation, cameraFullName, date }) => {

    function formatDate(date: string): string {
        return date.replaceAll("-", "/")
    }

    return (
        <div className={styles.container}>
            <div className={styles.data}>
                <p><strong>Rover</strong>: <span className={styles.value}>Curiosity</span></p>
                <p><strong>Date</strong>: <span className={styles.value}>{formatDate(date)}</span></p>
                <p><strong>Camera</strong>: <span className={styles.value}>{cameraFullName} ({cameraAbbreviation})</span></p>
            </div>
            <img className={styles.image} src={url}/>
        </div>
    )
}

export default PhotoComponent