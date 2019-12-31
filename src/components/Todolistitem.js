import React from 'react'

const Todolistitem=(props)=> {
        const chanegVal =(id)=>{
            props.changeitem(id)
        }
        const removelistitem =(id)=>{
            props.removeitem(id)
        }
        return (
            <div className = "checkbox" >
                <div style={{margin:"10px"}} class = "list-group-item" >
                    <button onClick={(evt)=>props.removeitem(props.item.id)} style={{float:"right"}}><i class="fas fa-trash"></i></button>
                    <input  style={{float:"left",marginTop:"5px"}} 
                    type = "checkbox" 
                    checked = {props.item.completed?"checked":""}
                    onChange = {(evt)=>chanegVal(props.item.id)}></input>
                    <h6 style={props.item.completed?{textDecoration:'line-through',marginLeft:"20px"}:{marginLeft:"20px",}}>{props.item.name}</h6>
                    
                </div>
            </div>
        )
}
export default Todolistitem

