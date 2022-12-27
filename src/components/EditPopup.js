import { useState } from "react"

const EditPopup = (props)=> {
    const [titleInput, setTitleInput] = useState(props.taskData.title)
    const [textInput, setTextInput] = useState(props.taskData.text)

    const handleTitle = (value)=> {
        setTitleInput(value)
    }
    const handleText = (value)=> {
        setTextInput(value)
    }

    return (
        <div className="absolute top-0 left-0 w-full h-full bg-white">
            <div onClick={()=> props.closeEditPopup()} className="absolute right-2 top-2 opacity-80 flex items-center cursor-pointer group">
                <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-main opacity-60 group-hover:opacity-100" d="M25.5737 15.6742L21.449 19.799L25.5737 23.9238C26.0275 24.3775 26.0275 25.12 25.5737 25.5737C25.12 26.0274 24.3776 26.0274 23.9238 25.5737L19.799 21.4489L15.6743 25.5737C15.2205 26.0274 14.4781 26.0274 14.0243 25.5737C13.5706 25.12 13.5706 24.3775 14.0243 23.9238L18.1491 19.799L14.0243 15.6742C13.5706 15.2205 13.5706 14.478 14.0243 14.0243C14.4781 13.5705 15.2205 13.5705 15.6743 14.0243L19.799 18.1491L23.9238 14.0243C24.3776 13.5705 25.12 13.5705 25.5737 14.0243C26.0275 14.478 26.0275 15.2205 25.5737 15.6742Z" fill="white"/>
                </svg>
            </div>
            <div className="w-full h-full flex items-center justify-center">
            <form onSubmit={(e)=> props.handleEditSubmit(e, props.taskData.id, titleInput, textInput)} className="w-full flex flex-col gap-4 max-w-[60%]" method="GET" action="#">
                <div className="flex flex-col gap-2">
                <label className="text-black">Edit Title</label>
                <input onChange={(e)=> handleTitle(e.target.value)}
                className="p-2 border-2 border-white-600 text-black focus:border-black outline-none rounded w-full" defaultValue={props.taskData.title} placeholder="edit todo title"/>
                </div>

                <div className="flex flex-col gap-2">
                <label className="text-black">Edit Text</label>
                <textarea onChange={(e)=> handleText(e.target.value)}
                className="max-h-[150px] p-2 border-2 border-white-600 text-black focus:border-black outline-none rounded w-full" defaultValue={props.taskData.text}  placeholder="edit todo title"></textarea>
                </div>

                <button className="px-4 py-2 bg-main opacity-80 hover:opacity-100 transition-all text-white cursor-pointer">Submit</button>
            </form>
            </div>
        </div>
    )
}
export default EditPopup