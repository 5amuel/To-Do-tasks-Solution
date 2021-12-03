import React from "react"

const styles = {
    FormWrapper:{
        paddingBottom:'50px',
        marginLeft:'9%',    
        display:'flex',
        flexDirection:'row',
        
    } as React.CSSProperties,

    InputTask: {
        lineHeight:'2em',
        width:'270px',
        fontSize:21,
        padding:'10px',
        border:'1px solid #7d7a85',
    } as React.CSSProperties,

    InputButton:{
        fontSize:'50px',
        borderRadius:'8px',
        background:'rgb(40, 95, 254)',
        color:'white',
        marginLeft:'1%',
        width:'90px',
        border:'none',
    } as React.CSSProperties,
}

interface IForm {
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void,
    onSubmit:(e: React.FormEvent<HTMLFormElement>) => void,
    newTask:string,
}

export default function InputForm ({onChange, onSubmit, newTask}:IForm) {
    const {InputTask, FormWrapper, InputButton} = styles

    return(
        <form onSubmit={onSubmit}>
            <div style={FormWrapper}>
                <input type="text" value={newTask} onChange={onChange} style={InputTask} required />
                <button style={InputButton}> + </button>
            </div>
        </form>
    )
}