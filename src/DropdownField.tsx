function DropdownField(props:{name: string, url: string, id: string}) {
    

    return (
        <div className="">
            <button className="bg-black flex border-2 border-t-0 h-36 px-2 w-250 items-center justify-center">
                <img src={require("./images/" + props.url + ".png")} id={props.id} alt="Icon" className=" h-full" />
                <span className="grow">{props.name}</span>
            </button>
        </div>
);
}

export default DropdownField;