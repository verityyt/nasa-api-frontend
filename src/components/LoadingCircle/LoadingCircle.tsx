import React, { useEffect, useState } from "react"

import styles from "./LoadingCircle.module.scss"

const LoadingCircleComponent = () => {
    return (
        <div className={styles.container}>
                <div className={styles.circle}/>
                <p className={styles.text}>Loading...</p>
        </div>
    )
}

export default LoadingCircleComponent