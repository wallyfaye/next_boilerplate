import { useRouter } from 'next/router'
import Main from '../containers/Main'

export default () => {
    const router = useRouter()
    
    return (
        <Main 
            query={router.query}
        />
    )
}
