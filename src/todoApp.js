import { useState } from "react"

import Header from './components/Header'
import Search from './components/Search'
import Filter from './components/Filter'
import TodoItems from './components/TodoList'
import EditPopup from "./components/EditPopup"
import CreatePopup from './components/CreatePopup'

const ToDoApp = (props) => {

    const todoArr = [
        {
            id:0,
            title: "Create ToDo App",
            text: "create todo app in reactJs, use states & props",
            isDone:false,
            createdAt: "12/25/2022",
            createdTime: "22:59",
        },
    ]

    const [todoList, setTodos] = useState(todoArr)
    const [allTodoList, setAllTodoList] = useState(todoArr)
    const [currentTodos, setCurrentTodos] = useState(todoArr)
    const [fixedTodos, setFixedTodos] = useState(todoArr)

    const [filter, setFilter] = useState('all') 

    const [editPopup, setEditPopup] = useState([false, ''])
    const [createPopup, setCreatePopup] = useState(false)

    /* Toggle isDone property on todo item click */
    const toggleIsDone = (itemId)=> {
        const updateTodo = todoList.map(item => {
            if(item.id === itemId) {
                item.isDone = !item.isDone
            }
            return item
        })
        setTodos(updateTodo)
    }

    /* Filter Todo on clicking filter items */
    const filterTodo = (e,opt)=> {
        const fixedArr = allTodoList
        // document.querySelector('input').value = ''
        for(let i = 0; i<= e.target.parentElement.children.length - 1; i++) {
            e.target.parentElement.children[i].classList.remove('text-main')
        }
        e.target.classList.remove('text-black')
        e.target.classList.add('text-main')
        setFilter(opt)
        if(opt === 'completed') {
            const newTodos = fixedArr.filter((item, index)=> {
                if(!item.isDone) {
                    return false
                }return true
            })
            setTodos(newTodos)
            setCurrentTodos(newTodos)
        }else if(opt === 'uncompleted') {
            const newTodos = fixedArr.filter((item, index)=> {
                if(item.isDone) {
                    return false
                }return true
            })
            setTodos(newTodos)
            setCurrentTodos(newTodos)
        }else {
            setTodos(allTodoList)
            setCurrentTodos(allTodoList)
        }

    }

    /* Filter Tody on search input change */
    const searchFilter = (value)=> {
        const fixedArr = currentTodos
        const newTodos = fixedArr.filter(item => {
            if(item.title.toLowerCase().includes(value.toLowerCase()) || item.text.toLowerCase().includes(value.toLowerCase())) {
                return true
            }else {
                return false
            }
        })
        if(value.length === 0) {
            setCurrentTodos(allTodoList)
        }else {
            setCurrentTodos(newTodos)
        }
        setTimeout(()=> {
            document.querySelector(`[data-filter="${filter}"]`).click()
        }, 10)
    }

    /* Edit & Delete Todo Task on button click*/
    const editTask = (itemId)=> {
        const currentEditTask = todoList.filter(item => {
            if(item.id === itemId) {
                return true
            }
            return false
        })
        setEditPopup([true, currentEditTask[0]])
    }

    const deleteTask = (itemId)=> {
        const newTodos = fixedTodos.filter((item, index) => {
            if(item.id === itemId) {
                return false
            }
            return item
        })
        setTodos(newTodos)
        setAllTodoList(newTodos)
        setCurrentTodos(newTodos)
        setFixedTodos(newTodos)

        setTimeout(()=> {
            document.querySelector(`[data-filter="${filter}"]`).click()
        }, 15)

    }

    const handleEditSubmit = (e, itemId, title, text)=> {
        e.preventDefault();
        if(title.length === 0 || text.length === 0) {
            alert('please fill the field')
        }else {
            const newTodos = fixedTodos.map((item)=> {
                if(item.id === itemId) {
                    item.title = title
                    item.text = text
                }
                return item
            })
            setTodos(newTodos)
            setAllTodoList(newTodos)
            setCurrentTodos(newTodos)
            setFixedTodos(newTodos)

            setEditPopup([false, ''])
            
            setTimeout(()=> {
                document.querySelector(`[data-filter="${filter}"]`).click()
            }, 15)

        }

    }

    /* Add New Task on button click */
    const openCreatePopup = ()=> {
        setCreatePopup(true)
    }

    const submitCreateTask = (e, title, text)=> {
        e.preventDefault()
        if(title.length === 0 || text.length === 0) {
            alert('please fill both field')
        }else {
            const randId = Date.now() * (Math.random() * 100)
            let date = new Date
            let createdAt = date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear();
            let minutes = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()
            let createdTime = date.getHours() + ":" + minutes

            const newTask = {
                id: randId,
                title: title,
                text:text,
                createdAt: createdAt,
                createdTime: createdTime,
            }

            fixedTodos.push(newTask)

            setCreatePopup(false)
            setTimeout(()=> {
                document.querySelector(`[data-filter="${filter}"]`).click()
            }, 15)
        }
    }

    /* Close Edit, Create Popup */
    const closeEditPopup = ()=> {
        setEditPopup([false, ''])
    }
    const closeCreatePopup = ()=> {
        setCreatePopup(false)
    }

    return (
        <div className="w-full h-screen bg-linear flex items-center justify-center">
            <div className="relative w-full max-w-[600px] min-h-[450px] bg-white rounded overflow-hidden">
                {/* Header */}
               <Header todoLength={fixedTodos.length} openCreatePopup={openCreatePopup}/>

                {/* Search */}
                <Search placeholder="Search Tasks..." searchFilter={searchFilter}/>

                {/* Filter */}
                <Filter todos={fixedTodos} filterTodo={filterTodo}/>

                {/* ToDo List */}
                {/* todos={currentTodos} */}
                <TodoItems filter={filter} todos={currentTodos} toggleIsDone={toggleIsDone} editTask={editTask} deleteTask={deleteTask}/>
            
                {/* Edit Popup */}
                {
                editPopup[0] ? <EditPopup taskData={editPopup[1]} handleEditSubmit={handleEditSubmit} closeEditPopup={closeEditPopup}/> : ""    
                }

                {/* Create Task popup */}
                {
                createPopup ? <CreatePopup submitCreateTask={submitCreateTask} closeCreatePopup={closeCreatePopup}/> : ""
                }
            </div>
        </div>
    )
}
export default ToDoApp