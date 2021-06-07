import React from 'react'
import 'tachyons'
const SendMail=({mailClick})=>{
	
return(
	
<div className="ph3 mt4">
  <a className="f6 link dim ba ph3 pv2 mb2 dib mid-gray" href="#0" 
 onClick={mailClick}>Send Mail</a>
</div>
)


}

export default SendMail;