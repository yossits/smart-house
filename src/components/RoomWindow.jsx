import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import '../css/RoomWindow.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import DropdownButton  from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from '@material-ui/core/Button';

const RoomWindow = ({ setDataRoom, dataRoom, index, history }) => {

    const [toggle, settoggle] = useState(false)
    const [Select, setSelect] = useState("--Please choose an option--")
    const [show, setShow] = useState(false);

    const products = dataRoom[index].products

    const CheckStereoSystemExsist = () => {
        for (let i = 0; i < products.length; i++) {
            if (products[i].name === 'stereo system') {
                return true
            }
        } return false
    }

    const CheckBoilerExsist = () => {
        for (let i = 0; i < products.length; i++) {
            if (products[i].name === 'Boiler') {
                return true
            }
        } return false
    }

    const ProductStatusCheck = () => {

        if (Select === '--Please choose an option--') {
            console.log('you have to choose a product');
            setShow(true);
            settoggle(false);
        }
        else if (Select === "stereo system" && CheckStereoSystemExsist()) {
            console.log('already have stereo system');
            setShow(true);
            settoggle(false);
        }
        else if (Select === 'Boiler' && dataRoom[index].select === 'Bathroom' && CheckBoilerExsist()) {
            console.log('already have Boiler in the Bathroom');
            setShow(true);
            settoggle(false);
        }
        else if (products.length >= 5) {
            console.log('are possible maximum 5 products');
            setShow(true);
            settoggle(false);
        }
        else {
            setDataRoom([...products, { name: Select, mode: "red", toggle: false }])
            setSelect("--Please choose an option--")
            settoggle(false);
            history.push('/room');
        }
    }


    const showAddProduct = () => {
        if (toggle) {
            return <div>
                <DropdownButton id="dropdown-basic-button" title={Select}>
                    <Dropdown.Item onClick={() => setSelect("Air-Conditioner")} >Air-Conditioner</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSelect("Boiler")} >Boiler</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSelect("stereo system")} >stereo system</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSelect("light")} >light</Dropdown.Item>
                </DropdownButton>

                <Button onClick={ProductStatusCheck} variant="contained" color="primary">add</Button>
            </div>
        } else {
            return <Button onClick={() => settoggle(!toggle)} variant="contained">add product</Button>
            
        }
    }

    const AlertDismissible = () => {

        if (show) {
            return (
                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>You got an error!</Alert.Heading>
                    <p>
                        you have to choose a product<br />
                        already have stereo system<br />
                        already have Boiler in the Bathroom<br />
                        are possible maximum 5 products
              </p>
                </Alert>
            );
        }
    }
    return (
        <div className="RoomWindow">
            room name: {dataRoom[index].name}<br />
            room type: {dataRoom[index].select}<br />
            {showAddProduct()}
            {AlertDismissible()}
        </div>
    )
}
export default withRouter(RoomWindow);
