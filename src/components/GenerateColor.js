import React from 'react';
import styled from 'styled-components';

const GenerateColorButton = styled.button`
	color: #433d3c;
	text-transform: uppercase;
	background: #ffffff;
	padding: 20px;
	border: 4px solid #433d3c;
	border-radius: 6px;
	display: inline-block;
	cursor: pointer;
	outline: none;
	font-weight: bold;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	transition: all 0.55s;
`;

export default function GenerateColor({
	color,
	onSetClicked,
	onSetColor,
	generateHexcode,
}) {
	return (
		<GenerateColorButton
			className='generate-color'
			style={{ borderColor: color, color: color }}
			onClick={() => {
				// onSetHex();
				onSetColor(generateHexcode());
				onSetClicked(true);
			}}
		>
			Generate Random Color
		</GenerateColorButton>
	);
}
