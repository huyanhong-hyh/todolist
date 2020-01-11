import React from 'react';


import './index.scss'


export class Ongoing extends React.Component {
    // 点击按钮删除
    handleremove(index) {
        // console.log(index);
        const todo = this.props.text.todo
        console.log(todo);
        todo.splice(index, 1)
        this.setState({
            todo
        })

        localStorage.setItem('todo', JSON.stringify(todo))

    }

    // 改变复选框事件
    changeChecked(index) {
        // console.log(index);

        const todo = this.props.text.todo
        todo[index].checked = !todo[index].checked
        this.setState({
            todo
        })
        localStorage.setItem('todo', JSON.stringify(todo))

    }
    

    render() {
        return (
            <div className="ongoing">
                {/* 正在进行 */}
                <h2>
                    正在进行
                {<span>
                   {this.props.text.todoCont}
                  </span>}
                </h2>

                <ul>
                    {this.props.text.todo.map(
                        (item, index) => {
                            if (!item.checked)
                                return (

                                    <li key={index}>
                                        <input type="checkbox" checked={item.checked}
                                            onChange={this.changeChecked.bind(this, index)} />
                                        <p>{item.title}</p>
                                        <a onClick={this.handleremove.bind(this, index)}></a>
                                    </li>
                                )
                        }
                    )}
                </ul>

              {/* 已经完成 */}
                <h2>
                    已经完成
                <span>
                    {this.props.text.todoCont}
                   
                    </span>
                </h2>

                <ul>
                    {this.props.text.todo.map(
                        (item, index) => {
                            if (item.checked)
                                return (

                                    <li key={index}>
                                        <input type="checkbox" checked={item.checked}
                                            onChange={this.changeChecked.bind(this, index)} />
                                        <p>{item.title}</p>
                                        <a onClick={this.handleremove.bind(this, index)}></a>
                                    </li>
                                )
                        }
                    )}
                </ul>
            </div>
        )
    }
}
