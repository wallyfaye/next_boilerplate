import React from 'react'
import css from "./styles.scss"

function Button(props) {
    return (
        <button className={css.example} {...props}>Click Me</button>
    )
}

export default Button