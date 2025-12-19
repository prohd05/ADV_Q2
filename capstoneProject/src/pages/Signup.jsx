import logo from "../assets/logo.png";
function Signup(){
    return(
        <div style={{margin:"auto"}}>
            <img src={logo} />
            <br/>

            <h5 style={{marginBottom:"0px", textAlign:"left"}}> Name </h5>
            <input type="text" style={{width:"100%", backgroundColor:"white", border:"1px solid black", borderRadius:"10px"}}/> 

            <h5 style={{marginBottom:"0px", textAlign:"left"}}> Email </h5>
            <input type="email" style={{width:"100%", backgroundColor:"white", border:"1px solid black", borderRadius:"10px"}}/> 

            <h5 style={{marginBottom:"0px", textAlign:"left"}}> Password </h5>
            <input type="password" style={{width:"100%", backgroundColor:"white", border:"1px solid black", borderRadius:"10px"}}/> 

            <br/>  <br/>

            <button style={{backgroundColor:"white", color:"black", border:"1px solid black"}}> Create Account </button>
        </div>
    )
}

export default Signup