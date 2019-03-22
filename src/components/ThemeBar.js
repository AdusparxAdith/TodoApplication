import React from 'react'
import ThemeItem from './ThemeItem'


export default class Header extends React.Component{
      
    
    render(){
        
        return this.props.themeArr.map( theme => (
                <ThemeItem key={theme.id} theme={theme} changeTheme={this.props.changeTheme}/>        
        ));
    } 
}
