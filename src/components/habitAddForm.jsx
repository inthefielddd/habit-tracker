import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = (e) =>{
        e.preventDefault();
        const name = this.inputRef.current.value
        name && this.props.onAdd(name);
        // this.inputRef.current.value = "";
        //정석은 formRef를 추가해서
        this.formRef.current.reset()
    }
    render() {
        console.log('add form')
        return (
                <form 
                ref={this.formRef}
                className="add-form"
                 onSubmit={this.onSubmit}>
                <input 
                ref={this.inputRef}
                type="text"
                className="add-input"
                placeholder="Habit"/>
                <button className="add-btn">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;