const Filter = (props)=> {
    const completedTodos = ()=>{
        const newTodos = props.todoList.filter(item => {
            if(item.isDone) {
                return item
            }else {
                return false
            }
        })
        return newTodos.length
    }
    const unCompletedTodos = ()=> {
        const newTodos = props.todoList.filter(item => {
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
                <li id="all" onClick={(e)=> props.filterTodos(e,'all')} className="text-base text-main opacity-80 hover:opacity-100 transition-all cursor-pointer">
                    All</li>
                <li onClick={(e)=> props.filterTodos(e,'completed')} className="text-base text-black opacity-80 hover:opacity-100 transition-all cursor-pointer">
                    Completed({completedTodos()})</li>
                <li onClick={(e)=> props.filterTodos(e,'uncompleted')} className="text-base text-black opacity-80 hover:opacity-100 transition-all cursor-pointer">
                    unCompleted({unCompletedTodos()})</li>
            </ul>
        </div>
    )
}
export default Filter