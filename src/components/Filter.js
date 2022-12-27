const Filter = (props)=> {
    const completedTodos = ()=>{
        const newTodos = props.todos.filter(item => {
            if(item.isDone) {
                return item
            }else {
                return false
            }
        })
        return newTodos.length
    }
    const unCompletedTodos = ()=> {
        const newTodos = props.todos.filter(item => {
            if(!item.isDone) {
                return true
            }else {
                return false
            }
        })
        return newTodos.length

    }
  

    return (
        <div className="w-full flex items-center justify-center pt-1 pb-6">
            <ul className="flex items-center gap-4">
                <li data-filter="all" onClick={(e)=> props.filterTodo(e,'all')} id="all" className="text-base text-main opacity-80 hover:opacity-100 transition-all cursor-pointer">
                    All({props.todos.length})
                </li>
                <li data-filter="completed" onClick={(e)=> props.filterTodo(e,'completed')} className="text-base text-black opacity-80 hover:opacity-100 transition-all cursor-pointer">
                    Completed({completedTodos()})
                </li>
                <li data-filter="uncompleted" onClick={(e)=> props.filterTodo(e,'uncompleted')} className="text-base text-black opacity-80 hover:opacity-100 transition-all cursor-pointer">
                    unCompleted({unCompletedTodos()})
                </li>
            </ul>
        </div>
    )
}
export default Filter