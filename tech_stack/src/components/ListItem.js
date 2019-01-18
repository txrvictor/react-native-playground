import React, { Component } from 'react';
import { 
    Text, 
    TouchableWithoutFeedback, 
    View,
    NativeModules,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions'; // will import index.js there as default

// workaround for sprint to work in Android 
// (use && to make sure it exists before executing)
const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental 
    && UIManager.setLayoutAnimationEnabledExperimental(true);
 
class ListItem extends Component {
    componentDidUpdate() {
        LayoutAnimation.spring();
    }
 
    renderDescription() {
        const { library, expanded } = this.props; 
        if (expanded) {
            return ( 
                <CardSection>
                    <Text style={{ flex: 1 }}>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;

        return ( 
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection> 
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()} 
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

// the logic should be here and not in the component rendering!
const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
};

// will pass all "actions" as props to the component, 
// in this case, a lot of functions from the actions/index.js file
export default connect(mapStateToProps, actions)(ListItem);
