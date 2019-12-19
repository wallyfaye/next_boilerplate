import { connect } from 'react-redux'

import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

import css from "../styles/index.scss"
import Button from '../components/Button'
import Image from '../components/Image'
import P from '../components/P'
import Head from '../components/Head'

import { loadData } from '../modules'

const Animatable = (props) => {
    return (!props.pid1) ? (<motion.div {...props} />) :(<div {...props} />)
}

const Index = ({ dispatch, router }) => {
    const { pid = 'index', pid1 } = router.query
    const link = (pid === 'about') ? '/test' : '/about'
console.log('pid', pid)
console.log('pid1', pid1)
    return (
        <div className={css.example}>
            <Link href={'/home'} >
                <a>{'/home'}</a>
            </Link>
            <Link href={'/about'} >
                <a>{'/about'}</a>
            </Link>
            <Link href={'/contact'} >
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
                    <Link key={`/${pid}/subpage1`} href={`/${pid}/subpage1`} >
                        <a>{`/${pid}/subpage1`}</a>
                    </Link>
                    <Link key={`/${pid}/subpage2`} href={`/${pid}/subpage2`} >
                        <a>{`/${pid}/subpage2`}</a>
                    </Link>
                    <Link key={`/${pid}/subpage3`} href={`/${pid}/subpage3`} >
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

    // return (
    //     <div className={css.example}>
    //         <Head 
    //             titleText={`Hello World - ${pid}`}
    //         />
    //         <motion.div initial="exit" animate="enter" exit="exit">
    //             <Image src="/cookie.jpg" alt="my image" />
    //             <P>Hello World!</P>
    //             <Link href={link} >
    //                 <a>{link} Page</a>
    //             </Link>
    //             <P>Pid is: {pid}</P>
    //             <Button onClick={() => {
    //                 dispatch(loadData())
    //             }} />
    //         </motion.div>
    //     </div>
    // )
}

export default connect()(Index)
