const Search = (props)=> {
    return (
        <div className="w-full px-14 pt-8 pb-4">
            <form className="w-full">
                <div className="flex items-center rounded-full border-2 border-main px-2">
                    <svg className="cursor-pointer opacity-80 hover:opacity-100 transtion-all" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5 10C5 8.67392 5.52679 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52679 12.5979 5 11.3261 5 10ZM10 3C8.89126 3 7.79838 3.26338 6.81136 3.76843C5.82433 4.27349 4.97139 5.00578 4.32278 5.90501C3.67417 6.80423 3.24844 7.84467 3.08064 8.94064C2.91285 10.0366 3.00779 11.1568 3.35765 12.2089C3.70752 13.2609 4.30229 14.2149 5.093 14.9921C5.88371 15.7693 6.84773 16.3476 7.90568 16.6794C8.96363 17.0111 10.0853 17.0868 11.1782 16.9001C12.2711 16.7135 13.3041 16.27 14.192 15.606L19.292 20.707C19.4795 20.8946 19.7339 21.0001 19.9991 21.0002C20.2644 21.0003 20.5189 20.895 20.7065 20.7075C20.8941 20.52 20.9996 20.2656 20.9997 20.0004C20.9998 19.7351 20.8945 19.4806 20.707 19.293L15.607 14.193C16.3853 13.1525 16.8587 11.9159 16.9741 10.6217C17.0895 9.32741 16.8424 8.02658 16.2604 6.86481C15.6784 5.70304 14.7846 4.72618 13.6789 4.0436C12.5732 3.36103 11.2994 2.99967 10 3Z" fill="#00AECB"/>
                    </svg>
                    <input onChange={(e)=>props.searchFilter(e.target.value)} className="p-2 w-full h-ful outline-0 bg-transparent text-base text-black" type='search' placeholder={props.placeholder ? props.placeholder : "search todo tasks"} />
                </div>
            </form>
        </div>
    )
}
export default Search