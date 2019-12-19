import React from 'react'
import css from "./styles.scss"

function P(props) {
    return (
        <p className={css.example} {...props} />
    )
}

export default P