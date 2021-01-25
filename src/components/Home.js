import React, { useState } from 'react';
import ColorForm from './ColorForm';
import GenerateColorButton from './GenerateColorButton';

function generateHexcode() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export default function ColorGenerator() {
	const [color, setColor] = useState('#6a7dfa');
	const [clicked, setClicked] = useState(false);
	const hex = generateHexcode();

	return (
		<>
			<h2 style={{ color: color }}>{clicked ? hex : ''}</h2>
			<div style={{ backgroundColor: color }} className='square' />
			<GenerateColorButton
				onSetColor={setColor}
				onSetClicked={setClicked}
				color={color}
				hex={hex}
			/>
			<ColorForm onSetColor={setColor} onSetClicked={setClicked} />
		</>
	);
}
