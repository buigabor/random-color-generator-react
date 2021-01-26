import React, { useState } from 'react';
import styled from 'styled-components';
import ColorForm from './ColorForm';
import GenerateColor from './GenerateColor';

const Square = styled.div`
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	margin-top: 1.5rem;
	margin-bottom: 3rem;
	transition: all 0.55s;
	cursor: pointer;
`;

const H2 = styled.h2`
	height: 1rem;
	font-size: 2rem;
	transition: all 0.55s;
`;

const Alert = styled.div`
	position: fixed;
	top: 0;
	left: 50%;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
	z-index: 9999;
	color: #fff;
	background-color: #eb4d4b;
	font-size: 1.3rem;
	font-weight: 400;
	text-align: center;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	padding: 0.8rem 3rem;
	-webkit-box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.25);
	box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.25);
`;

// function generateHexcode() {
// 	return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }

export default function Home({ onSetCanvas, generateHexcode }) {
	const [color, setColor] = useState('#6a7dfa');
	const [clicked, setClicked] = useState(false);
	const [size, setSize] = useState('200x200');
	const [alertMode, setAlertMode] = useState('none');
	const [alertText, setAlertText] = useState('');

	const hex = generateHexcode();
	const width = size.split('x')[0] + 'px';
	const height = size.split('x')[1] + 'px';

	return (
		<>
			<Alert style={{ display: alertMode }}>{alertText}</Alert>
			<H2 style={{ color: color }}>{clicked ? hex : ''}</H2>
			<Square
				style={{ backgroundColor: color, width: width, height: height }}
				onClick={() => {
					onSetCanvas(true);
				}}
			/>
			<GenerateColor
				onSetColor={setColor}
				onSetClicked={setClicked}
				color={color}
				hex={hex}
			/>
			<ColorForm
				size={size}
				onSetSize={setSize}
				onSetColor={setColor}
				onSetClicked={setClicked}
				onSetAlertMode={setAlertMode}
				onSetAlertText={setAlertText}
			/>
		</>
	);
}
