import React, {Component} from 'react'
import PropTypes from 'prop-types'



class TodoItem extends Component{
    
    getCrossStyle = () => {
        const {background,color} = this.props.theme
        return{
            background,
            color,
            border: 'none',
            fontSize: '90%',
            padding: '1px 7px',
            borderRadius: '50%',
            cursor: 'pointer',
            float: 'right',
            transition: '1.1s',  
        }
    }

    getTodoStyle = () => {
  
        return{
            background: '#f1f2f6',
            padding: '2px 12px',
            borderBottom: '1px #ccc dotted',
            color: this.props.todo.completed ? this.props.theme.line : 'black',
            textDecoration : this.props.todo.completed ? 'line-through' : 'none',
            fontSize: '110%',
            fontFamily: 'Overlock',
            transition: '1s',   
        }   
    }

    render(){
        const {id,task} = this.props.todo

        return(
            <div style={this.getTodoStyle()}>
                <p><input type="checkbox" defaultChecked={this.props.todo.completed} onChange={this.props.markComplete.bind(this, id)}/> {' '}
                {task}
                <button style={this.getCrossStyle()} onClick={this.props.delTask.bind(this,id)}>-</button>
                </p>
            </div>
        )
    }
}



TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
}

export default TodoItem;