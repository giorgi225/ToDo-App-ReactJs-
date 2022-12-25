import { useState } from "react"

const CreatePopup = (props)=> {
    const [titleInput, setTitleInput] = useState('')
    const [textInput, setTextInput] = useState('')
    const handleTitle = (e)=> {
        setTitleInput(e.target.value)
    }
    const handleText = (e)=> {
        setTextInput(e.target.value)
    }
    return (
        <div className="absolute top-0 left-0 w-full h-full bg-white">
            <div className="w-full h-full flex flex-col gap-8 items-center justify-center">
                <h4 className="text-lg text-center text-main">Create New Todo</h4>
            <form onSubmit={(e)=> props.submitCreate(e, titleInput, textInput)} className="w-full flex flex-col gap-4 max-w-[60%]" method="POST" action="#">
                <div className="flex flex-col gap-2">
                <label className="text-black">add Title</label>
                <input onChange={(e)=> handleTitle(e)}
                className="p-2 border-2 border-white-600 text-black focus:border-black outline-none rounded w-full" placeholder="add todo title"/>
                </div>

                <div className="flex flex-col gap-2">
                <label className="text-black">add Text</label>
                <textarea onChange={(e)=> handleText(e)}
                className="p-2 border-2 border-white-600 text-black focus:border-black outline-none rounded w-full" placeholder="add todo title"></textarea>
                </div>

                <button className="px-4 py-2 bg-main opacity-80 hover:opacity-100 transition-all text-white cursor-pointer">Create</button>
            </form>
            </div>
        </div>
    )
}

export default CreatePopup