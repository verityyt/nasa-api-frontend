import React from "react"

import styles from "./CameraButton.module.scss"
import Camera from "../../types/camera";
import classNames from "classnames";

type Props = {
    cameraAbbreviation: Camera.CameraAbbreviation
    cameraView: Camera.CameraAbbreviation
    onClick: () => void
}

const CameraButton: React.FC<Props> = ({ cameraAbbreviation, cameraView, onClick }) => {
    return (
        <button onClick={onClick} className={(cameraView == cameraAbbreviation) ? classNames(styles.container, styles.active) : styles.container}>
            {cameraAbbreviation}
        </button>
    )
}

export default CameraButton