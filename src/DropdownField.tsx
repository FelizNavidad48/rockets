import "./index.css"

function DropdownField(props:{name: string, url: string, id: string, country: string}) {

    return (
        <div className="">
            <button className="bg-black border-2 border-t-0 h-36 px-2 w-250">
                <div className="flex items-center justify-between hover:bg-gradient-to-r hover:to-50% -mx-2 h-full hover:from-transparent hover:to-black">
                    <img src={require("./images/" + props.url + ".png")} id={props.id} alt="Rocket" className="w-128 h-fit" />
                    <div className="w-52 flex flex-col items-center justify-around">
                        <span >{props.name}</span>
                    </div>
                </div>
                
                
            </button>
        </div>
);
}

export default DropdownField;