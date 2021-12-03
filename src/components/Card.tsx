import React from "react";

interface IProps{
    title:string
    children:React.ReactNode //ReactChild will not work with arrays that is why I use ReactNode as type
}

const styles = {
  card:{
    textAlign: 'center',
    width: '400px',
    background:'#fcfcfc',
    border:'1px solid #808080',
    height:'530px',
    borderRadius:'15px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.7)',
    overflowY: 'auto',
  } as React.CSSProperties,
} 

export default function Card ({title, children}:IProps) {
  return(
    <div style={styles.card}>
        <h1>{title}</h1>
        <div>
            <ul style={{padding: '0px'}}>
                {children}
            </ul>
        </div>
    </div>
  )
}

