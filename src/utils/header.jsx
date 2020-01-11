import React from 'react';

import './index.scss'

export class Header extends React.Component {

    inputChange(e) {
        const { text } = this.props
        this.setState({
            text: e.target.value
        })
    }

    hanldeKey = (e) => {
        if (e.keyCode === 29) {
            const newTodo = [
                {
                    id: Math.random(),
                    text: this.state.ipttext
                }
            ]

            this.setState({
                todo: newTodo
            })
        }

    }
    render() {
        return (
            <div className="header">

                <div className="container">
                    <p>ToDoList</p>
                    <input placeholder="添加todo" value={this.props.text}
                        onChange={this.inputChange} onKeyUp={this.hanldeKey} />
                </div>

            </div>
        )
    }
}
