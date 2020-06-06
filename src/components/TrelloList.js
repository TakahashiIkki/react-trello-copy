import React from "react";
import TrelloCard from "./TrelloCard";

const TrelloList = ({title, cards}) => {
    return (
        <div style={style.container}>
            <h4>{title}</h4>
            {cards.map(card =>
                <TrelloCard text={card.text}/>
            ) }
        </div>
    )
}

const style = {
    container: {
        backgroundColor: "#dfe3e6",
        borderRadius: 3,
        width: 300,
        padding: 8,
        marginRight: 8,
    }
}

export default TrelloList