import "../styles/List.css";

import React, { useState } from "react";
import { connect } from "react-redux";
import { Droppable, Draggable } from "react-beautiful-dnd";

import Card from "./Card";
import CardEditor from "./CardEditor";

import shortid from "shortid";

const List = (props) => {
  const [addingCard, setAddingCard] = useState(false);

  const toggleAddingCard = () => setAddingCard(!addingCard);

  const addCard = async (card) => {
    const { listId, dispatch } = props;

    toggleAddingCard();

    const cardId = shortid.generate();

    dispatch({
      type: "ADD_CARD",
      payload: { ...card, cardId, listId },
    });
  };

  const deleteList = async () => {
    const { listId, list, dispatch } = props;

    dispatch({
      type: "DELETE_LIST",
      payload: { listId, cards: list.cards },
    });
  };

  return (
        <div
          className="List"
        >
          <div className="List-Title">
            <div>{props.list.title}</div>
            <div onClick={deleteList}>
              <ion-icon name="close" />
            </div>
          </div>

          <Droppable droppableId={props.list._id}>
            {(provided, _snapshot) => (
              <div ref={provided.innerRef} className="Lists-Cards">
                {props.list.cards &&
                  props.list.cards.map((cardId, index) => (
                    <Card
                      key={cardId}
                      cardId={cardId}
                      index={index}
                      listId={props.list._id}
                    />
                  ))}

                {provided.placeholder}

                {addingCard ? (
                  <CardEditor
                    card={{}}
                    onSave={addCard}
                    onCancel={toggleAddingCard}
                    adding
                  />
                ) : (
                  <div className="Toggle-Add-Card">
                    <button type="button" onClick={toggleAddingCard}>
                      <ion-icon name="add" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </Droppable>
        </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  list: state.listsById[ownProps.listId],
});

export default connect(mapStateToProps)(List);
