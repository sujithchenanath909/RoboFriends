import React,{Component} from 'react'
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList';
import Scroll from '../components/Scroll'
import reportWebVitals from '../reportWebVitals';

import 'tachyons';
import './App.css';

class App extends Component{

	constructor(){
		super()
		this.state={
			robots:[],
			searchfeild:''
		}
	}

onSearchChange=(event)=>{

this.setState({searchfeild:event.target.value})

}

componentDidMount() {

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json() )
.then(users => this.setState({robots:users}));

}

onsearchClick(event){
console.log('clicked')
console.log(event.target.value)

}

	render(){
		const filteredRobots= this.state.robots.filter(robot=>{

	return robot.name.toLowerCase().includes(this.state.searchfeild.toLowerCase());
})

if(this.state.robots.length === 0){

	return <h1>loading..</h1>

}else{

		return(
			<div className='tc'>
			<h1>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange } searchClick={this.onsearchClick}/>
			<Scroll>
				<CardList robots={filteredRobots}/>
			</Scroll>
			</div>
		);
		}		
	}


}

export default App;