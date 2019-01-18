import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    renderItem(obj) {
        return <ListItem library={obj.item} />; 
    }
    
    render() {
        return ( 
            <FlatList 
                data={this.props.libraries}
                renderItem={this.renderItem}
                keyExtractor={(library) => `${library.id}`}
            />
        );
    }
}

// what returns from this method will be passed as "props"
// to the connected Component (i.e. LibrayList in this case)
const mapStateToProps = state => {
    return {
        libraries: state.libraries
    };
};

export default connect(mapStateToProps)(LibraryList); // gives access to Store from inside component
