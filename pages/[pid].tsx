import Head from 'next/head'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'

import { loadData } from '../actions'
import css from "../styles/index.scss"
import Button from '../components/Button'

const Index = ({ dispatch }) => {
    const router = useRouter()

    const { pid = 'index', pid1 } = router.query

    console.log('pid', pid)
    console.log('pid1', pid1)

    return (
        <div className={css.example}>
            <Head>
                <title>Hello World - {pid}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <img src="/cookie.jpg" alt="my image" />
            <p>Hello World!</p>
            <p>Pid is: {pid}</p>
            <Button onClick={() => {
                dispatch(loadData())
            }} />
        </div>
    )
}

export default connect()(Index)
