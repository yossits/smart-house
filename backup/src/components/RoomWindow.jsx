import React from 'react'
import { useState } from 'react'


export default function RoomWindow(props) {

    const [flag, setflag] = useState(false)
    const [ProductList, setProductList] = useState([])
    const [Select, setSelect] = useState('')

    const SetOption = (e) =>{
        setSelect(e.target.value)
        console.log(e.target.value);
    }

    const CheckStereoSystemExsist = () => {
        for (let i = 0; i < ProductList.length; i++) {
            if (ProductList[i] === 'stereo system') {
                return true
            }
        }
    }

    const CheckBoilerExsist = () => {
        for (let i = 0; i < ProductList.length; i++) {
            if (ProductList[i] === 'Boiler') {
                return true
            }
        }
    }

    const ProductStatusCheck = () => {
        
        if(Select === ''){
            console.log('you have to choose a product');
            setflag(false); 
        }
        else if (Select === "stereo system" && CheckStereoSystemExsist()) {
            console.log('already have stereo system');
            setflag(false); 
        }
        else if (Select === 'Boiler' && props.type === 'Bathroom' && CheckBoilerExsist()) {
            console.log('already have Boiler in the Bathroom');
            setflag(false); 
        } else if (ProductList >= 5) {
            console.log('are possible maximum 5 products');
            setflag(false); 
        }
        else {
            setProductList(Select)
            console.log(Select);
            console.log(ProductList);
            // props.sendProduct(Select);
            setflag(false); 
        }
    }
    

    const showAddProduct = () => {
        if (flag) {
            return <div>
                <select onChange={e=>SetOption(e)} >
                    <option value="">--Please choose an option--</option>
                    <option value="Air-Conditioner">Air-Conditioner</option>
                    <option value="Boiler">Boiler</option>
                    <option value="stereo system">stereo system</option>
                    <option value="light">light</option>
                </select>
                <br />
                <button onClick={ProductStatusCheck} >add</button>
            </div>
        } else {
            return <button onClick={() => setflag(!flag)}>add product</button>
        }
    }

    const ShowProduct = () =>{


    }

    return (
        <div>
            room name: {props.name}<br />
            room type: {props.type}<br />


            {showAddProduct()}
            {ShowProduct()}
            {/* {ProductList.map((productName,index) => <button key={ 'product-' + index}>{productName}</button>)} */}
        </div>
    )
}

