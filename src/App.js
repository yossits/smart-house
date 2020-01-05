import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import AddRoom from './components/AddRoom';
import RoomButton from './components/RoomButton';
import Title from './components/Title';
import RoomWindow from './components/RoomWindow';
import AddRoomButton from './components/AddRoomButton';
import AddProduct from './components/AddProduct';
import Home from './components/Home';


const ProductList = ({dataRoom,roomIndex,toggle }) => {
  return <div className="AddProduct">
    {dataRoom[roomIndex].products
      .map((element, index) => <AddProduct
        toggle={toggle}
        productName={element.name}
        state={element.state}
        index={index}
        key={'product-' + index} />)}
  </div>
}

function App() {

  const [dataRoom, setDataRoom] = useState([])
  const [roomIndex, setroomIndex] = useState('')

  const comeFromAddRoom = (roomSelect, roomName, roomColor) => {
    setDataRoom([...dataRoom, { select: roomSelect, name: roomName, color: roomColor, products: [] }])
  }

  const GetProducts = (list) => {
    let temp = [];
    temp = dataRoom;
    temp[roomIndex].products = list
    setDataRoom(temp)
  }

  const toggle = (state, index) => {
    dataRoom[roomIndex].products[index].state = state
    setDataRoom(dataRoom)
  }

  return (
    <div className="App">
      <Title />
      <Router>
        <Route path='/' component={() => <Home />} />
        <Switch>
          <Route exact path='/' component={() => { return <div className="RoomButton">{dataRoom.map((element, index) => <RoomButton quantity={element.products.length} setroomIndex={index => setroomIndex(index)} name={element.name} color={element.color} index={index} key={'room-' + index} />)}</div> }} />
          <Route exact path='/addroom' component={() => <AddRoom setDataRoom={comeFromAddRoom} />} />
          <Route exact path='/room' component={() => <ProductList dataRoom={dataRoom} roomIndex={roomIndex} toggle={toggle}/>} />
        </Switch>
        <Route exact path='/room' component={() => <RoomWindow setDataRoom={GetProducts} dataRoom={dataRoom} index={roomIndex} />} />

        <Route exact path='/' component={() => <AddRoomButton />} />
      </Router>


    </div>
  );
}

export default App;

