import React, {Component} from 'react';
import TrelloList from "./TrelloList";
import {connect} from "react-redux";

class App extends Component {

    render() {
        const {lists} = this.props;

        return (
            <div className="App">
                <h2>Trello Like</h2>
                <div style={styles.listsContainer}>
                    {lists.map(list => (
                        <TrelloList title={list.title} cards={list.cards} />
                    ))}
                </div>
            </div>
        );
    }
}

const styles = {
    listsContainer: {
        display: "flex",
        flexDirection: "row",
        marginRight: 8
    }
}

const mapStateToProps = state => ({
    lists: state.lists,
});

export default connect(mapStateToProps)(App);
