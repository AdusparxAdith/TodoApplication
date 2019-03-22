import React from 'react'

export default class AddTodo extends React.Component{
state = {
    title: '',
    placeholder: 'Add Todo..',
}

getSubmitStyle = () => {
    const {background,color} = this.props.theme
    return{
        background,
        color,
        flex: '1',
        display: 'inline-block',
        border: 'none',
        fontSize: '120%',
        padding: '7px 20px',
        cursor: 'pointer',
        fontFamily: 'Overlock',
        transition: '1s',
    }
}

onSubmit = (e) => {
    e.preventDefault();
    if(this.state.title !== ''){
        errorstyle=''
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
        this.setState({placeholder: 'Add Todo..'})
    }
    else{
        
        this.setState({
            placeholder: 'Add a valid Todo and try again..'
        })
        errorstyle = 'addtodo'
    }
    
    
}

takeInput = (e) =>{
    
    return this.setState(
        {
            [e.target.name]: e.target.value 
        }
    )
}
    render(){
        return(
            <form style={{display: 'flex'}}>
            <input 
                type="text"
                name="title"
                style={{flex: '10', padding:'15px'}}
                placeholder= {this.state.placeholder}
                className={errorstyle}
                value = {this.state.title}
                onChange = {this.takeInput}
            />
            <input type="submit" value="submit" className={'btn'} style={this.getSubmitStyle()} onClick={this.onSubmit}/>
        </form>
        )       
    }
}

let errorstyle = '';