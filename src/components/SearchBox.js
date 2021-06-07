import React from 'react';
import 'tachyons'

const SearchBox=({searchFeild,searchChange,searchClick})=>{

	return(
		<div className='pa2'>

		<input className='tc pa3 ba b--green bg-lightest-blue '
			    type='search' 
			    placeholder='search robots' 
			    onChange ={searchChange}
			    onClick={searchClick} />

		</div>


		)


}

export default SearchBox;