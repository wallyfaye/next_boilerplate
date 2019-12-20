import { connect } from 'react-redux'

import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

import css from "../styles/index.scss"
import Button from '../components/Button'
import Image from '../components/Image'
import P from '../components/P'
import Head from '../components/Head'

import { startStopwatch, stopStopwatch } from '../modules/stopwatch'

const Animatable = (props) => {
    return (!props.pid1) ? (<motion.div {...props} />) :(<div {...props} />)
}

const Index = ({ dispatch, router, stopwatch }) => {
    const { pid = 'index', pid1 } = router.query

    return (
        <div className={css.example}>
            <Head 
                titleText={`Hello World - ${pid}`}
            />
            <Image src="/cookie.jpg" alt="my image" />
            <P>start time: {stopwatch.startTime}</P>
            <P>stop time: {stopwatch.stopTime}</P>
             <Button onClick={() => {
                dispatch(startStopwatch())
            }}>
                Start Stopwatch
            </Button>
            <Button onClick={() => {
                dispatch(stopStopwatch())
            }}>
                Stop Stopwatch
            </Button>
            <Link href={'/[pid]'} as={'/home'} >
                <a>{'/home'}</a>
            </Link>
            <Link href={'/[pid]'} as={'/about'} >
                <a>{'/about'}</a>
            </Link>
            <Link href={'/[pid]'} as={'/contact'} >
                <a>{'/contact'}</a>
            </Link>
            <Animatable 
                key="nested0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                pid1={pid1}
            >
                <P>Pid is: {pid}</P>
                <AnimatePresence exitBeforeEnter>
                    <Link key={`/${pid}/subpage1`} href={`/[pid]/[pid1]`} as={`/${pid}/subpage1`} >
                        <a>{`/${pid}/subpage1`}</a>
                    </Link>
                    <Link key={`/${pid}/subpage2`} href={`/[pid]/[pid1]`} as={`/${pid}/subpage2`} >
                        <a>{`/${pid}/subpage2`}</a>
                    </Link>
                    <Link key={`/${pid}/subpage3`} href={`/[pid]/[pid1]`} as={`/${pid}/subpage3`} >
                        <a>{`/${pid}/subpage3`}</a>
                    </Link>
                    <motion.div
                        key="nested.motion.div"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <P>Pid1 is: {pid1 || 'none'}</P>
                    </motion.div>
                </AnimatePresence>

            </Animatable>
        </div>
    )
}

function mapStateToProps(state) {
    const { stopwatch } = state
    return { stopwatch }
}

export default connect(mapStateToProps)(Index)
