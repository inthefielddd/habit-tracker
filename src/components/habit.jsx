import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    //Life cycle
    componentDidMount(){
        console.log(`habit ${this.props.habit.name} mounted`)
    }
    componentWillUnmount(){
        console.log(`habit ${this.props.habit.name}will unmounted`)

    }
    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    }
    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    }
    hanldeDelete = () => {
        this.props.onDelete(this.props.habit);
    }

    render() {
        console.log(`habit:${this.props.habit.name}`)
        
        const { name, count } = this.props.habit;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">
                    {count}</span>
                <button
                    className="habit-button habit-increase"
                    onClick={this.handleIncrement} >
                    <i className="fas fa-plus-square"></i>
                </button>
                <button
                    className="habit-button habit-decrease"
                    onClick={this.handleDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button
                    className="habit-button habit-delete"
                    onClick={this.hanldeDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;