import { useState } from "react";

const Header = (props)=> {
    const [date, updateDate] = useState(new Date)
    setInterval(()=> {
        updateDate(new Date)
    }, 100000) // no need to update it in 1000 ms because its we need only return from this function only day, month and date.

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oqc', 'Nov', 'Dec']

    return (
        <div className="w-full bg-white-500 border-b-[1px] border-white-600 flex items-center justify-between px-14 py-4">
            <div className="flex flex-col items-start">
                <div className="flex items-center">
                    <h3 className="text-main font-bold text-lg">{days[date.getDay()]}, <span className="text-black text-sm font-medium">{date.getDate()} {months[date.getMonth()]}</span></h3>
                </div>
                <p className="text-black font-medium text-sm">{props.total} Tasks</p>
            </div>
            <div onClick={props.createTodo} className="flex items-center justify-center bg-main rounded-full p-2 cursor-pointer opacity-80 hover:opacity-100 transition-all">
                <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15.1667H15.1667V21C15.1667 21.6417 14.6417 22.1667 14 22.1667C13.3583 22.1667 12.8333 21.6417 12.8333 21V15.1667H6.99999C6.35833 15.1667 5.83333 14.6417 5.83333 14C5.83333 13.3583 6.35833 12.8333 6.99999 12.8333H12.8333V7.00001C12.8333 6.35834 13.3583 5.83334 14 5.83334C14.6417 5.83334 15.1667 6.35834 15.1667 7.00001V12.8333H21C21.6417 12.8333 22.1667 13.3583 22.1667 14C22.1667 14.6417 21.6417 15.1667 21 15.1667Z" fill="white"/>
                </svg>
            </div>
        </div>
    )
}
export default Header