const TodoItems = (props)=> {
    return (
        <div className="w-full h-full max-h-[450px] overflow-auto">
            <div className="flex flex-col border-t-[1px] border-white-600">
                {/* Todo Item */}
                {props.todoList.length > 0 
                ?
                props.todoList.map((item, index)=> {
                    return (
                        <div key={index} className="select-none w-full border-b-[1px] border-white-600 px-14 group py-3 hover:bg-white-500 transition-all">
                            <div className="w-full flex items-center justify-between">
                                <div onClick={()=> props.toggleIsDone(item.id)} className="flex items-center gap-3 cursor-pointer">
                                    {item.isDone 
                                    ? 
                                    <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-main bg-main">
                                        <div className="animation border-transparent border-b-2 border-r-2 border-main rotate-45 border-white"></div>
                                    </div>
                                    :
                                    <div className="w-5 h-5 rounded-full border-2 border-main"></div>
                                    }
                                    
                                    <div className="flex flex-col items-start">
                                        <div className="flex items-center gap-2">
                                            <h4 className="text-base font-bold text-main">{item.title}</h4>
                                            <p className="text-sm font-light text-black">Today at 14:05</p>
                                        </div>
                                        <p className="text-sm font-medium text-black">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 opacity-0 transition-all group-hover:opacity-100">
                                    <div onClick={()=> props.editTodo(item.id)} className="p-2 group/edit cursor-pointer hover:scale-[1.1] transition-all">
                                        <svg className="" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="fill-yellow-200 group-hover/edit:fill-yellow-400" d="M14.8742 9.84L14.285 9.25083L6.035 17.5008H2.5V13.965L11.9275 4.53667L16.6417 9.25083C16.7979 9.40711 16.8857 9.61903 16.8857 9.84C16.8857 10.061 16.7979 10.2729 16.6417 10.4292L10.75 16.3217L9.57083 15.1433L14.8742 9.84ZM15.4633 2.18L17.8208 4.53667C17.9771 4.69294 18.0648 4.90486 18.0648 5.12583C18.0648 5.3468 17.9771 5.55873 17.8208 5.715L16.6417 6.89417L13.1067 3.35833L14.285 2.18C14.4413 2.02378 14.6532 1.93601 14.8742 1.93601C15.0951 1.93601 15.3071 2.02378 15.4633 2.18Z" fill="#707C80"/>
                                        </svg>
                                    </div>
                                    <div onClick={()=> props.deleteTodo(item.id)} className="p-2 group/edit cursor-pointer hover:scale-[1.1] transition-all">
                                        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="fill-red-300 group-hover/edit:fill-red-500" d="M15.25 4.75834C15.1729 4.68108 15.0813 4.61979 14.9805 4.57798C14.8797 4.53616 14.7716 4.51463 14.6625 4.51463C14.5534 4.51463 14.4453 4.53616 14.3445 4.57798C14.2437 4.61979 14.1521 4.68108 14.075 4.75834L10 8.825L5.925 4.75C5.84785 4.67285 5.75626 4.61165 5.65546 4.5699C5.55465 4.52814 5.44661 4.50665 5.3375 4.50665C5.22839 4.50665 5.12035 4.52814 5.01955 4.5699C4.91875 4.61165 4.82715 4.67285 4.75 4.75C4.67285 4.82715 4.61165 4.91875 4.5699 5.01955C4.52814 5.12035 4.50665 5.22839 4.50665 5.3375C4.50665 5.44661 4.52814 5.55465 4.5699 5.65546C4.61165 5.75626 4.67285 5.84785 4.75 5.925L8.825 10L4.75 14.075C4.67285 14.1522 4.61165 14.2437 4.5699 14.3446C4.52814 14.4454 4.50665 14.5534 4.50665 14.6625C4.50665 14.7716 4.52814 14.8797 4.5699 14.9805C4.61165 15.0813 4.67285 15.1729 4.75 15.25C4.82715 15.3272 4.91875 15.3884 5.01955 15.4301C5.12035 15.4719 5.22839 15.4934 5.3375 15.4934C5.44661 15.4934 5.55465 15.4719 5.65546 15.4301C5.75626 15.3884 5.84785 15.3272 5.925 15.25L10 11.175L14.075 15.25C14.1522 15.3272 14.2437 15.3884 14.3446 15.4301C14.4454 15.4719 14.5534 15.4934 14.6625 15.4934C14.7716 15.4934 14.8797 15.4719 14.9805 15.4301C15.0813 15.3884 15.1729 15.3272 15.25 15.25C15.3272 15.1729 15.3884 15.0813 15.4301 14.9805C15.4719 14.8797 15.4934 14.7716 15.4934 14.6625C15.4934 14.5534 15.4719 14.4454 15.4301 14.3446C15.3884 14.2437 15.3272 14.1522 15.25 14.075L11.175 10L15.25 5.925C15.5667 5.60834 15.5667 5.075 15.25 4.75834Z" fill="#707C80"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                :
                <h4 className="text-center p-12 text-lg font-semibold text-black">No Tasks to show</h4>
                }
                {/* End Todo Item */}
            </div>
        </div>
    )
}
export default TodoItems