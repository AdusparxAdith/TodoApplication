import React from 'react'

export default function Footer(){
    return(
        <div style={footerStyle}>
            <p>~Made with love, by Adusparx ~ v1.0</p>
        </div>
        
    )
}

const footerStyle ={
    textAlign: 'center',
    fontStyle:'oblique',
    position: 'absolute',
    bottom: '0',
    right: '0',
    left: '0',
}