import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function RoomWindow({ setDataRoom, dataRoom, index }) {

    const [flag, setflag] = useState(false)
    const [Select, setSelect] = useState("")

    const products = dataRoom[index].products

    const SetOption = (e) => {
        setSelect(e.target.value)
    }

    const CheckStereoSystemExsist = () => {
        for (let i = 0; i < products.length; i++) {
            if (products[i].name === 'stereo system') {
                return true
            }
        }return false
    }

    const CheckBoilerExsist = () => {
        for (let i = 0; i < products.length; i++) {
            if (products[i].name === 'Boiler') {
                return true
            }
        }return false
    }

    const ProductStatusCheck = () => {

        if(Select === ''){
            console.log('you have to choose a product');
            alert('you have to choose a product');
            setflag(false); 
        }
        else if (Select === "stereo system" && CheckStereoSystemExsist()) {
            console.log('already have stereo system');
            alert('already have stereo system');
            setflag(false); 
        }
        else if (Select === 'Boiler' && dataRoom[index].select === 'Bathroom' && CheckBoilerExsist()) {
            console.log('already have Boiler in the Bathroom');
            alert('already have Boiler in the Bathroom');
            setflag(false); 
        }
        else if (products.length >= 5) {
            console.log('are possible maximum 5 products');
            alert('are possible maximum 5 products');
            setflag(false); 
        }
        else {
            setDataRoom([...products, { name: Select, mode: "red", flag: false }])
            setSelect("")
            setflag(false);
        }
    }


    const showAddProduct = () => {
        if (flag) {
            return <div>
                <select onChange={e => SetOption(e)} >
                    <option value="">--Please choose an option--</option>
                    <option value="Air-Conditioner">Air-Conditioner</option>
                    <option value="Boiler">Boiler</option>
                    <option value="stereo system">stereo system</option>
                    <option value="light">light</option>
                </select>
                <br />
                <Link to="/room"><button onClick={ProductStatusCheck} >add</button></Link>
            </div>
        } else {
            return <button onClick={() => setflag(!flag)}>add product</button>
        }
    }

    return (
        <div>
            room name: {dataRoom[index].name}<br />
            room type: {dataRoom[index].select}<br />
            {showAddProduct()}
        </div>
    )
}

