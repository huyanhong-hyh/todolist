import React from 'react';

// import { Header } from './utils/header'
import { Ongoing } from './utils/ongoing'

class App extends React.Component {

  state = {
    todo: [],
    ipttext: '',
    // 未完成计数
    todoCont: 0,
    // 已完成计数
    doneCont: 0
  }

  componentDidMount() {
    //  获取数据，字符串转为JSON
    const todo = JSON.parse(localStorage.getItem('todo'))
    // console.log(todo);

    if (todo) {
      this.setState({
        todo
      })
    }

  }

  // 给表单元素绑定change事件，将表单元素的值设置为state的值
  inputChange = e => {
    // console.log(e.target);
    this.setState({
      ipttext: e.target.value
    })
  }

  // 未完成计数
  // todototal() {
  //   var sum = 0

  //   this.state.todo.map(item => {
  //     if (item.checked === 'false') {
  //       sum++;
  //     }
  //   })
  //   this.setState({
  //     todoCont: sum
  //   })
  //   console.log(sum);
  // }

  // 按下回车键 增加待办事项
  handleClick = (event) => {
    var keyCode = event.keyCode
    const { todo } = this.state

    if (keyCode === 13) {
      const newTodo = [
        {
          title: this.state.ipttext,
          checked: false
        }, ...todo]
      this.setState({
        todo: newTodo,
        // 表单置空
        ipttext: ''
      })
      // 使用storage缓存数据，只能存字符串
      localStorage.setItem('todo', JSON.stringify(newTodo))


    }

  }

  render() {
    return (
      <div className="App">
        {/* 顶部标题 */}
        <div className="header">

          <div className="container">
            <p>ToDoList</p>
            <input type="text" placeholder="添加todo" value={this.state.ipttext}
              onChange={this.inputChange} onKeyUp={this.handleClick} />
          </div>

        </div>

        <Ongoing
          text={this.state}
        ></Ongoing>



      </div>
    );
  }
}

export default App;
