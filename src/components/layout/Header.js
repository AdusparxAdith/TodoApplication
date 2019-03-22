import React from 'react'
import ThemeBar from '../ThemeBar'

export default class Header extends React.Component{
    // state={
    //     display: 'visible'
    // } 
    
    // toggleBar = () =>{
    //     this.setState({display:'none'})
    // }
    
 
    getStyle = () => {
        const {background,color} = this.props.theme
       return {
            background,
            color,
            textAlign: 'center',
            padding: '10px',
            cursor: 'pointer',
            transition: '0.9s'   
        }
    }
    
    render(){
        const themeArr = require('../../resources/themes')
        return (
            
            <div>                
                <div className="themeBar" style={themeBarStyle}>
                <ThemeBar themeArr={themeArr} changeTheme={this.props.changeTheme} />
                </div>
                <header style={this.getStyle()}>
                    <h1>TodoList</h1>
                </header>  
            </div>
            
        )
    } 
}

const themeBarStyle = {
    textAlign: 'center',
    fontStyle:'oblique',
    position: 'absolute',
    bottom: '50px',
    right: '0',
    left: '0',
}