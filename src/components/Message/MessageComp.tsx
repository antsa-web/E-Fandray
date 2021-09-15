import React, {useState, useRef} from "react";

let tableau: any=[''];

const Message = ()=>{
    const scroll = useRef()
    const [msg, setMsg] = useState('');
    const [allMsg, setAllMsg] = useState(['']);
   

    const sendMsg = (e: any) => {
		e.preventDefault();
		console.log(tableau);
        if(msg) {
            tableau.push(msg);
		    setAllMsg(tableau);
        }
		
		setMsg("");
	}

    const msgRecup = (e: any) =>{
        setMsg(e.target.value);
    }
    
    return(
      <div>
          <div className="msg">
          {allMsg.map(function(message) {
                   return <li key= {message}>{message}</li>              
                              
          })}
          </div>
         
         <div>
            <form>
                <input className="mess" type="text" placeholder="Aa" value={msg} onChange={msgRecup} />
                <button className="mess" type="submit" onClick={sendMsg}>Send</button>
            </form>
        </div>
        
      </div>     
      
    )
}

export default Message;
