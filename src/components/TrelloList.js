import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import {Droppable, Draggable} from "react-beautiful-dnd";
import styled from "styled-components";

const ListContainer = styled.div`
    background-color: #dfe3e6;
    border-radius: 3px;
    width: 300px;
    padding: 8px;
    height: 100%;
    margin-right: 8px;
`;

const TrelloList = ({title, cards, listID, index}) => {
    return (
        <Draggable draggableId={String(listID)} index={index}>
            {provided => (
                <ListContainer
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <Droppable droppableId={String(listID)} type="card">
                        {provided => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                <h4>{title}</h4>
                                {cards.map((card, index) => (
                                    <TrelloCard
                                        key={card.id}
                                        text={card.text}
                                        index={index}
                                        id={card.id}
                                        listID={listID}
                                    />
                                ))}
                                <TrelloActionButton listID={listID}/>
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </ListContainer>
            )}
        </Draggable>
    )
}

export default TrelloList