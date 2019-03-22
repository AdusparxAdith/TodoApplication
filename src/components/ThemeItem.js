import React from 'react'

export default class Header extends React.Component{

    getButtonStyle = () =>{
        const {background} = this.props.theme.header
        return{
            background,
            border: '2px solid white',
            fontSize: '90%',
            height:'20px',
            width:'20px',
            borderRadius: '50%',
            cursor: 'pointer',
            margin: '0 2px',
            boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)',

    }
}
    render(){
        return(

            <button style={this.getButtonStyle()} onClick={this.props.changeTheme.bind(this,this.props.theme.id)}></button>    
        )
    } 
}
