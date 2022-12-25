import { useState } from "react"

import Header from './components/Header'
import Search from './components/Search'
import Filter from './components/Filter'
import TodoItems from './components/TodoList'
import EditPopup from "./components/EditPopup"
import CreatePopup from './components/CreatePopup'

const ToDoApp = (props) => {
    const todoList = [
        {
            id:0,
            title: "Create ToDo App",
            text: "create todo app in reactJs, must use state and props",
            isDone:false,
        },
        {
            id:1,
            title: "Cinema",
            text: "Going to the cinema with friends",
            isDone:false,
        },
        {
            id:2,
            title: "JS Framework Course",
            text: "Learn Javascript Framework VueJs",
            isDone:true,
        },
    ]

    const [staticTodos, setStaticTodos] = useState(todoList) // for stati list only change when delete todo item from list
    const [todos, setTodos] = useState(todoList)
    const [searchTodos, setSearchTodos] = useState(todoList)
    const [searchAllTodos, setSerchAllTodos] = useState(todoList)
    const [allTodos, setAllTodos] = useState(todoList)

    const [editPopup, setEditPopup] = useState(false)
    const [popupData, setPopupData] = useState(null)

    const [createPopup, setcreatePopup] = useState(false)

    const filterTodo = (e,filterVal)=> {
        document.querySelectorAll('li').forEach(li => {
            li.classList.remove('text-main')
        })
        // document.querySelector('input').value = ''
        e.target.classList.remove('text-black')
        e.target.classList.add('text-main')

        if(filterVal === 'completed') {
            const newAllTodo = allTodos
            const newTodo = newAllTodo.filter(item => {
                if(item.isDone) {
                    return true
                }else {
                    return false
                }
            })
            setTodos(newTodo)
            setSearchTodos(newTodo)
        }else if(filterVal === 'uncompleted') {
           const newAllTodo = allTodos
           const newTodo = newAllTodo.filter(item => {
                if(!item.isDone) {
                    return true
                }else {
                    return false
                }
            })
            setTodos(newTodo)
            setSearchTodos(newTodo)
        }else {
            setTodos(allTodos)
            setSearchTodos(allTodos)
        }
    }

    const filterSearch = (e)=> {
        let value = e.target.value.toLowerCase()
        const newAllTodo = searchTodos
        // const 
        const filterTodo = newAllTodo.filter(item => {
                if(item.title.toLowerCase().includes(value) || item.text.toLowerCase().includes(value)) {
                    return true
                }else {
                    return false
                }
            })
            if(value.length !== 0) {
                setTodos(filterTodo)
                setAllTodos(filterTodo)
            }else {
                if(searchTodos.length !== 0) {
                    setTodos(searchTodos)
                }else {
                    setTodos(staticTodos)
                    setTimeout(()=> {
                        document.getElementById('all').click()
                    },15)
                }
                setAllTodos(searchAllTodos)
            }
    }

    const toggleIsDone = (itemId)=> {
        const newAllTodos = allTodos
        const newAllTodo = newAllTodos.map(item => {
            if(item.id === itemId) {
                item.isDone = !item.isDone
            }
            return item
        })

        setAllTodos(newAllTodo)
        setSerchAllTodos(newAllTodo)

    }

    const editTodo = (itemId)=> {
        setEditPopup(true)
        setPopupData(todos[itemId])
    }

    const deleteTodo = (itemId)=> {
        const newTodo = todos.filter(item => {
            if(item.id === itemId) {
                return false
            }else {
                return true
            }
        })
        setTodos(newTodo)
        setAllTodos(newTodo)
        setSearchTodos(newTodo)
        setSerchAllTodos(newTodo)
        setStaticTodos(newTodo)
    }

    const submitForm = (e, title, text, itemId)=> {
        e.preventDefault();
        if(title.length !== 0 || text.length !== 0) {
            const newTodos = todos.map((item)=> {
                if(item.id === itemId) 
                {
                    item.title = title
                    item.text = text
                }
                return item
            })
            setTodos(newTodos)
            setEditPopup(false)
            setPopupData(null)
        }
    }

    const createTodo = ()=> {
        setcreatePopup(true)
    }
    const submitCreate = (e, title, text)=> {
        e.preventDefault()
        
        let randId = Date.now() + (Math.random() * 100)
        const newTodo = {
            id: randId,
            title: title,
            text:text,
        }

        todos.push(newTodo)
        // allTodos.push(newTodo)
        // searchTodos.push(newTodo)
        // searchAllTodos.push(newTodo)
        // staticTodos.push(newTodo)
        setcreatePopup(false)
    }

    return (
        <div className="w-full h-screen bg-linear flex items-center justify-center">
            <div className="relative w-full max-w-[600px] min-h-[450px] bg-white rounded overflow-hidden">
                {/* Header */}
                <Header total={staticTodos.length} createTodo={createTodo}/>

                {/* Search */}
                <Search filterSearch={filterSearch}/>

                {/* Filter */}
                <Filter filterTodos={filterTodo} todoList={allTodos}/>

                {/* ToDo List */}
                <TodoItems toggleIsDone={toggleIsDone} editTodo={editTodo} deleteTodo={deleteTodo} todoList={todos}/>

                {/* Edit Popup */}
                {editPopup ? <EditPopup itemData={popupData} submitForm={submitForm} /> : ""}
           
                {/* Create Popup */}
                {createPopup ? <CreatePopup submitCreate={submitCreate}/> : ""}
            </div>
        </div>
    )
}
export default ToDoApp