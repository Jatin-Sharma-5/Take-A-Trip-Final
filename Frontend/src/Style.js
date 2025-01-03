 export default function Style(){
 var obj={
    height:"200px",
    width:"200px",
    backgroundColor:"green"
 }
    return(<div>
        <div  style={{height :"200px", width:"200px",backgroundColor:"red", border:"2px solid black"}} ></div>
               <div style={obj}></div>
                </div>
                
    )
}