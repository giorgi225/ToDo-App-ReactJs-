import { useState } from "react"

const EditPopup = (props)=> {
    const [titleInput, setTitleInput] = useState(props.itemData.title)
    const [textInput, setTextInput] = useState(props.itemData.text)
    const handleTitle = (e)=> {
        setTitleInput(e.target.value)
    }
    const handleText = (e)=> {
        setTextInput(e.target.value)
    }

    return (
        <div className="absolute top-0 left-0 w-full h-full bg-white">
            <div className="w-full h-full flex items-center justify-center">
            <form onSubmit={(e)=> props.submitForm(e,titleInput, textInput, props.itemData.id)} className="w-full flex flex-col gap-4 max-w-[60%]" method="POST" action="#">
                <div className="flex flex-col gap-2">
                <label className="text-black">Edit Title</label>
                <input onChange={(e)=> handleTitle(e)}
                className="p-2 border-2 border-white-600 text-black focus:border-black outline-none rounded w-full" placeholder="edit todo title" defaultValue={props.itemData.title}/>
                </div>

                <div className="flex flex-col gap-2">
                <label className="text-black">Edit Text</label>
                <textarea onChange={(e)=> handleText(e)}
                className="p-2 border-2 border-white-600 text-black focus:border-black outline-none rounded w-full" defaultValue={props.itemData.text} placeholder="edit todo title"></textarea>
                </div>

                <button className="px-4 py-2 bg-main opacity-80 hover:opacity-100 transition-all text-white cursor-pointer">Submit</button>
            </form>
            </div>
        </div>
    )
}
export default EditPopup