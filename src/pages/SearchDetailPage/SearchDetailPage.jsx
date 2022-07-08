import { useLocation } from 'react-router-dom'


export default function SearchDetailPage() {
    const location = useLocation()
    const { from } = location.state
    const { tag1 } = location.state
    const { tag2 } = location.state
    const { tag3 } = location.state

    
    return (
        <>
        <h1>search detail page</h1>
        <h1>User {from}</h1>
        <h1>tag1 {tag1}</h1>
        <h1>tag2 {tag2}</h1>
        <h1>tag3 {tag3}</h1>

        </>
    )
}