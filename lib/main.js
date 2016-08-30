import React from 'react'

export default React.createClass({
  onSubmitClickHandler(e) {
    e.preventDefault()
    var todoValue = this.refs.myTodoInput.value;
    if (todoValue.length > 2) {
      var tdListElement = this.refs.todoList;
      var todoItemTemp =
        <li className="listUnderline">
        <div className="circleOutline"
           data-js="itemComplete">
        <span className="checkMark">
           &#10003;
        </span>
        </div>
        <p className="todo__item"
          data-js="todo__item">
          {this.refs.todoList.value()}
        </p>
        <mark className="todo__itemDelete"
            data-js="todo__itemDelete">
            X
        </mark>
        </li>;
      tdListElement.innerHTML += todoItemTemp;
    }
  },
  todoItemTemplate(string) {

  },
  render() {
    return (
      <section className="listSection">
      <h1 className="todoHeader">todos</h1>
      <div className="listDiv">
        <ul className="todoList">
          <form className=""
                data-js="todoForm">
            <input type="text"
                   name="nextTodo"
                   placeholder="type todo item here"
                   className="todoList__text"
                   ref="myTodoInput"
                   autoComplete="off"/>
            <input className="listSubmit"
                   onClick={this.onSubmitClickHandler}
                   type="submit"
                   name="submit"
                   value="s"/>
          </form>
          <div className="todo__items"
               ref="todoList">

          </div>
          <div className="">
            <footer className="todo__footer"
                    data-js="completedCounter">
                    <span>0</span> Completed
            </footer>
          </div>
        </ul>
      </div>
    </section>
    )
  }
})
