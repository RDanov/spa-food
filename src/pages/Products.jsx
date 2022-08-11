import {useParams, useHistory} from 'react-router-dom'

function Products() {
    const {id} = useParams();
    const value = useHistory();
    return <h1>Hello from products</h1>
}
export {Products};