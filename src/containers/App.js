import React,{useState,useEffect} from 'react'
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList';
import Scroll from '../components/Scroll'
import reportWebVitals from '../reportWebVitals';

import 'tachyons';
import './App.css';

function App (){


const [robots,SetRobots]=useState([]);
const [searchField,setSearchField]=useState('');

const onSearchChange=(event)=>{
	setSearchField(event.target.value);
}

useEffect(()=>{

	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json() )
	.then(users => SetRobots(users));
},[])



const filteredRobots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
 		 })


		return !robots.length ?
			<h1>Loading</h1> :
					 (
					  <div className='tc'>
						  <h1 className='f1'>RoboFriends</h1>
						        
						  <SearchBox searchChange={onSearchChange}/>
						   <Scroll>
						         <CardList robots={filteredRobots} />
						   </Scroll>
					   </div>
					    );		
				}




export default App;