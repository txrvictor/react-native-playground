import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
	// overriding styles (our own internal style "containerStyle") with
	// the style given in props
	return (
		<View style={[styles.containerStyle, props.style]}>
			{props.children}
		</View>
	); 
};

const styles = {
	containerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	}
};

export { CardSection };
