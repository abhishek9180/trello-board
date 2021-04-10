import "../styles/Card.css";

import React from "react";
import { connect } from "react-redux";
import { Draggable } from "react-beautiful-dnd";

const Card = (props) => {
  const deleteCard = async () => {
    const { listId, card, dispatch } = props;
    dispatch({
      type: "DELETE_CARD",
      payload: { cardId: card._id, listId },
    });
  };

  return (
    <Draggable draggableId={props.card._id} index={props.index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="Card"
        >
          <div className="Card-Icons">
            <div className="Card-Icon" onClick={deleteCard}>
              <ion-icon name="close" />
            </div>
          </div>
          <div className="Card-Title">{props.card.title}</div>
          <div className="Card-Description">{props.card.description}</div>
        </div>
      )}
    </Draggable>
  );
};

const mapStateToProps = (state, ownProps) => ({
  card: state.cardsById[ownProps.cardId],
});

export default connect(mapStateToProps)(Card);
