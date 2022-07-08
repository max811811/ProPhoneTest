import { useLocation } from 'react-router-dom'


export default function SearchDetailPage() {
    const location = useLocation()
    const { from } = location.state
    
    return (
        <>
        <h1>NewOrderPage</h1>
        <h1>{location.state}</h1>{}
        </>
    )
}