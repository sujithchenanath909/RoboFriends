import React,{Component}from 'react';
import SendMail from './SendMail'
import 'tachyons';

class Card extends Component{

onmailClick(event){
console.log('clicked')
}


render(){

return(

		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' >
			<img alt='robo' src={`https://robohash.org/${this.props.id}?200x200`} />
			<h2>{this.props.name}</h2>
			<h3>{this.props.email}</h3>
			<SendMail mailClick={this.onmailClick}/>
		</div>

	)

}



}



export default Card;