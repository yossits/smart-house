import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom'
import AddRoom from './components/AddRoom';
import RoomButton from './components/RoomButton';
import Title from './components/Title';
import RoomWindow from './components/RoomWindow';
import AddRoomButton from './components/AddRoomButton';
// import AddProduct from './components/AddProduct';


function App() {

  const [dataRoom, setDataRoom] = useState([])
  const [roomWindow, setRoomWindow] = useState([])
  const [list,setlist] = useState('')

  const comeFromAddRoom = (roomSelect, roomName, roomColor) => {
    setDataRoom([{ select: roomSelect, name: roomName, color: roomColor }, ...dataRoom])
  }

  const BringInfoForRoomWindow = (type, name, color) => {
    setRoomWindow({ type, name, color })
  }

  return (
    <div className="App">
      <Title />
      <Router>

        <Switch>
          <Route exact path='/' component={() => dataRoom.map((element, index) => <RoomButton sendToRoom={BringInfoForRoomWindow} type={element.select} name={element.name} color={element.color} index={index} key={'room-' + index} />)} />
          <Route exact path='/addroom' component={() => <AddRoom RoomData={comeFromAddRoom} />} />
          <Route exact path='/room' component={() => <RoomWindow  sendProduct={thePlist =>setlist(thePlist)} type={roomWindow.type} name={roomWindow.name} />} />
          
        </Switch>
        <Route path='/' component={() => <Link to='/'><button>home</button></Link>} />
        {/* <Route exact path='/room' component={() => <AddProduct/> } /> */}
        
        <Route exact path='/' component={() => <AddRoomButton />} />
        
      </Router>

    </div>
  );
}

export default App;

