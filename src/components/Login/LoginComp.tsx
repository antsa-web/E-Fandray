import React, {useState} from "react";
import Message from "../Message/MessageComp";
 

const user=[{
    "email": "Antsa",
    "username": "King",
    "password": "test"
},
{
    "email": "Rapa",
    "username": "petit",
    "password": "test"
}]



const Login = ()=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pseudo, setPseudo] = useState('');
    const [connected, setConnected] = useState(false);

    const emailRecup = (e: any)=>{
        setEmail(e.target.value);
    }
    const passwordRecup = (e:any)=>{
        setPassword(e.target.value);
    }

    const connexion = (e: any) =>{
        e.preventDefault();
        user.map(function(u) {
            if(u.email === email && u.password === password) {
                console.log(`connected`);
                setPseudo(u.username)
                setConnected(true);
                return
            }
        })
    }

    if(connected){
        return(
            <Message />
        )
    }else{
        return(
            <div className="wrapper fadeInDown">
                  <div id="formContent">
                     <h2 className="active">Sign In</h2>
                     <h2 className="inactive underlineHover">Sign Up</h2>

                     <div id="titleContent">
                         <img src="./LOGO_ISPM.jpg" id="icon" alt="UserIcon"/>
                         <h4>E-fandray</h4>
                     </div>

                     <form>
                         <input type="text" id="login" className="fadeIn second" name="login" placeholder="Enter your e-mail" value={email} onChange={emailRecup}/>
                         <input type="password" id="password" className="fadeIn third" name="login" placeholder="Password" value={password} onChange={passwordRecup}/>
                         <button type="submit" onClick={connexion}>Log In</button>
                     </form>

                     <div id="formFooter">
                         <a className="underlineHover" href="#">Forgot password ?</a>
                     </div>
                  </div>
            </div>
          
        )
    }
    
    }
export default Login;