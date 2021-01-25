import React from 'react';
import styled from 'styled-components';

const Button = styled.button``;

export default function GenerateColorButton(props) {
	return (
		<button
			className='generate-color'
			style={{ borderColor: props.color, color: props.color }}
			onClick={() => {
				props.onSetColor(props.hex);
				props.onSetClicked(true);
			}}
		>
			Generate Random Color
		</button>
	);
}
