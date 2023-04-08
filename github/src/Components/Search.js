import React from "react";

function Search({ setUsername }) {
    var inputname = "";
    const onChange = () => {
        setUsername(inputname.value)
    }
    return (
        <div className="Search">
            <input
                type="text"
                ref={(a) => {
                    inputname = a;
                }}
                onChange={() => { onChange() }}
                onKeyUp={() => { onChange() }}
                onPaste={() => { onChange() }}
                onInput={() => { onChange() }}
            />
        </div>
    );
}

export default Search;