import React from "react";
import "./listTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Doing Homework" },
      { id: "todo2", title: "Making Vidoe" },
      { id: "todo3", title: "Fixing Bug" },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Wow so easy!");
  };

  handleDeleteTodo = (todo) => {
    let currentTodo = this.state.listTodos;
    currentTodo = currentTodo.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentTodo,
    });
    toast.success("Delete Success!");
  };

  handleOnClickEdit = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;

    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodoCopy = [...listTodos];
      let objIndex = listTodoCopy.findIndex((item) => item.id === todo.id);
      listTodoCopy[objIndex].title = editTodo.title;
      this.setState({
        listTodos: listTodoCopy,
        editTodo: {},
      });
      toast.success("Update Todo Success!");

      return;
    }

    this.setState({
      editTodo: todo,
    });
  };

  handleEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({ editTodo: editTodoCopy });
  };

  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log(isEmptyObj);
    return (
      <div className="list-todo-container">
        <AddTodo addNewTodo={this.addNewTodo} />
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {isEmptyObj === true ? (
                    <span>
                      {index} - {item.title}
                    </span>
                  ) : (
                    <>
                      {item.id === editTodo.id ? (
                        <span>
                          {index + 1} -
                          <input
                            value={editTodo.title}
                            onChange={(event) => this.handleEditTodo(event)}
                          />
                        </span>
                      ) : (
                        <span>
                          {index} - {item.title}
                        </span>
                      )}
                    </>
                  )}
                  <> </>
                  <button
                    className="edit"
                    onClick={() => this.handleOnClickEdit(item)}
                  >
                    {isEmptyObj === false && item.id === editTodo.id
                      ? "Save"
                      : "Edit"}
                  </button>
                  <button
                    onClick={() => {
                      this.handleDeleteTodo(item);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListTodo;
