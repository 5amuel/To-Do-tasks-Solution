import React from "react";
interface MyProps {
    children: React.ReactNode
}

const styles ={
    container : {
        position:'relative', 
        width:'100%', 
        display:'flex', 
        height:'600px', 
        justifyContent:'space-evenly', 
        alignItems:'center', 
        minWidth:'1300px'
    } as React.CSSProperties,
}

export default function CardsWrapper ({children}:MyProps){
    return(
        <div style={styles.container}>
            {children}
        </div>
    )
}
