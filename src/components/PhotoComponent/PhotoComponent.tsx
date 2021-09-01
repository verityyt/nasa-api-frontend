import React from "react"

import styles from "./PhotoComponent.module.scss"
import Camera from "../../camera.js";

type Props = {
    url: string
    camera: Camera
    date: string
}
const PhotoComponent: React.FC<Props> = ({url, camera, date}) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={url}/>
        </div>
    )
}

export default PhotoComponent