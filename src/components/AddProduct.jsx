import React from 'react';
import { withRouter } from 'react-router-dom'
import '../css/AddProduct.css'

const stateByColor = state => state ? 'green' : 'red';

const AddProduct = ({ toggle, productName, state, index, history }) => {
    const toggleRoom = () => { toggle(!state, index); history.push('/room') }
 
    return <button onClick={toggleRoom} style={{ backgroundColor: stateByColor(state) }}>{productName}</button>
}
export default withRouter(AddProduct)
