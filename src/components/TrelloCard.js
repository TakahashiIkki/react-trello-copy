import React from "react";

const TrelloList = ({title}) => {
    return (
        <div style={style.container}>
            <h4>{title}</h4>
        </div>
    )
}

const style = {
    container: {
        backgroundColor: "#ccc",
        borderRadius: 3,
        width: 300,
    }
}

export default TrelloList