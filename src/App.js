import React, { useState } from 'react';
import './css/App.css';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AddRoom from './components/AddRoom';
import RoomButton from './components/RoomButton';
import Title from './components/Title';
import RoomWindow from './components/RoomWindow';
import AddRoomButton from './components/AddRoomButton';
import AddProduct from './components/AddProduct';


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

  const TurnOnOff = (flag,index) => {
    let temp = dataRoom
    if (flag) {
      temp[roomIndex].products[index].mode = 'green'
      temp[roomIndex].products[index].flag = true
      setDataRoom(temp)
    }
    else {
      temp[roomIndex].products[index].mode = 'red'
      temp[roomIndex].products[index].flag = false
      setDataRoom(temp)
    }
  }

  return (
    <div className="App">
      <Title />
      <Router>
        <Route path='/' component={() => <Link to='/'><button>home</button></Link>} />
        <Switch>
          <Route exact path='/' component={() => dataRoom.map((element, index) => <RoomButton setroomIndex={index => setroomIndex(index)} name={element.name} color={element.color} index={index} key={'room-' + index} />)} />
          <Route exact path='/addroom' component={() => <AddRoom setDataRoom={comeFromAddRoom} />} />
          <Route exact path='/room' component={() => <RoomWindow setDataRoom={GetProducts} dataRoom={dataRoom} index={roomIndex} />} />
        </Switch>

        <Route exact path='/room' component={() => dataRoom[roomIndex].products.map((element, index) => <AddProduct TurnOnOff={TurnOnOff} productName={element.name} mode={element.mode} flag={element.flag} index={index} key={'product-' + index} />)} />
        <Route exact path='/' component={() => <AddRoomButton />} />
      </Router>

    </div>
  );
}

export default App;

