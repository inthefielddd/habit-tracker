import "./app.css";
import React, { Component } from 'react';
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
    state = {
        habits:[
            {id:1, name:"Reading", count:0},
            {id:2, name:"Running", count:0},
            {id:3, name:"Coding", count:0}
        ]
    }
    //해당하는 habit을 받아와서 로직들이 작동하기 떄문에 인자에 habit을 넣어준다
    handleIncrement = (habit) =>{
        console.log(`handleIncrement ${habit.name}`)
        // const habits = [...this.state.habits];
        // const index = habits.indexOf(habit); //인자값을 가져온다
        // habits[index].count++;
        // this.setState({habits : habits})
        const habits =this.state.habits.map((item) =>{
            if(item.id === habit.id){
                return {...habit, count: habit.count + 1}
            }
            return item;
        });
        this.setState({habits});
    }
    handleDecrement = (habit) =>{
        console.log(`handleDecrement ${habit.name}`)
        // const habits = [...this.state.habits];
        // const index = habits.indexOf(habit);
        // const count = habits[index].count -1;
        // habits[index].count = count < 0 ? 0 :count;
        const habits = this.state.habits.map((item)=>{
            if(item.id === habit.id){
                const count = habit.count -1;
                return {...habit, count: count < 0 ? 0 : count}
            }
            return item;
        })
        this.setState({habits})

    }
    hanldeDelete = (habit) =>{
        console.log(`hanldeDelete ${habit.name}`)
        //배열을 돌면서 각각 item.id와  habit id와 같지 않은것만 뽑아다가 새로운 배열을 만든다
        const habits = this.state.habits.filter(item => item.id !== habit.id)
        this.setState({habits})
        }
    
    handleAdd = (name) =>{
        //새로 추가되는 habit
        const habits = [...this.state.habits, {id:Date.now(), name, count:0}]
        this.setState({habits})
    }
    handleReset = () =>{
        const habits = this.state.habits.map((habit)=>{
            if(habit.count !== 0){
                return {...habit, count :0}
            }
            return habit;
        })
            this.setState({habits});
    }
    render() {
        console.log('app')
        return (
            <>
            <Navbar totalCount={this.state.habits.filter(item =>item.count > 0).length }/>
            <Habits 
            habits={this.state.habits} 
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.hanldeDelete}
            onAdd={this.handleAdd}
            onReset={this.handleReset}
            />
            </>
        );
    }
}


export default App;
