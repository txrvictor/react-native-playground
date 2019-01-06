// import libraries
import React from 'react';
import { Text, View } from 'react-native';

// make a component (convention: compnent has the name of the file)
const Header = (props) => {
	const { textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>	
		</View>
	);
};

// Styling
const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative' 
	},
	textStyle: {
		fontSize: 20
	}
};

// make the component available to other parts in the app
export default Header;
