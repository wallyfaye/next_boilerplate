import Head from 'next/head'
import React from 'react'

function HeadHTML({ titleText = '' }) {
    return (
        <Head>
            <title>{titleText}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
    )
}

export default HeadHTML