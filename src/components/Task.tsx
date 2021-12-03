import React from "react"

interface Item {
    taskTitle: string,
    leftBtnOff: boolean,
    rightBtnOff: boolean,
    leftBtnColor: string,
    rightBtnColor: string,
    onRightClick:() => void,
    onLeftClick:() => void,
}

const styles = {
    task: {
        display:'flex',
        justifyContent:'space-evenly',
        height:'100px',
        boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.3)',
        alignItems:"center",
        borderRadius:'12px',
        marginTop:'10px',
    } as React.CSSProperties,

    container:{
        listStyleType: 'none', 
        padding:'0px 30px 0px 30px',
    } as React.CSSProperties,

    button:{
        padding: '20px',
        border: 'none',
        color:'white',
        borderRadius: 10,
        fontSize: 30,
        margin: '10px',
    } as React.CSSProperties,
    
    content:{
        overflowX:'auto', 
        margin:'30px auto'
    } as React.CSSProperties,
}


export default function Task({taskTitle, leftBtnOff, rightBtnOff, leftBtnColor, rightBtnColor, onRightClick, onLeftClick}:Item){

    return(
        <li style={styles.container}>
            <div style={styles.task}>
                <button 
                    disabled={leftBtnOff} 
                    onClick={onLeftClick} 
                    style={Object.assign({background:`${leftBtnColor}`}, styles.button) } 
                    >&#8676;
                </button>

                <h3 style={styles.content}>{taskTitle}</h3>
                
                <button 
                    disabled={rightBtnOff} 
                    onClick={onRightClick}
                    style={Object.assign({background:`${rightBtnColor}`}, styles.button) }
                    >&#8677;
                </button>
            </div>
        </li>
    )
}
