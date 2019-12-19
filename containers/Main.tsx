import { connect } from 'react-redux'

import { loadData } from '../modules'
import css from "../styles/index.scss"
import Button from '../components/Button'
import Image from '../components/Image'
import P from '../components/P'
import Head from '../components/Head'

const Index = ({ dispatch, query }) => {
    const { pid = 'index', pid1 } = query

    console.log('pid', pid)
    console.log('pid1', pid1)

    return (
        <div className={css.example}>
            <Head 
                titleText={`Hello World - ${pid}`}
            />
            <Image src="/cookie.jpg" alt="my image" />
            <P>Hello World!</P>
            <P>Pid is: {pid}</P>
            <Button onClick={() => {
                dispatch(loadData())
            }} />
        </div>
    )
}

export default connect()(Index)
