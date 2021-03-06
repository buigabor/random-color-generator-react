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
	cursor: pointer;
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

const IconWrapper = styled.div`
	position: relative;
	left: 11rem;
`;

const ClickMe = styled.span`
	font-size: 1.5rem;
	font-weight: 400;
	display: inline-block;
	transform: rotate(40deg);
	font-family: 'Indie Flower', cursive;
	transition: all 0.55s;
`;

const Icon = styled.i`
	font-size: 2rem;
	position: relative;
	top: 2.2rem;
	right: 4.8rem;
	transform: rotate(-40deg);
	transition: all 0.55s;
`;

const CopiedNotification = styled.div`
	width: 4.5rem;
	border-radius: 8px;
	padding: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	font-size: 14px;
	background-color: #03506f;
	position: absolute;
	top: 9.5rem;
	right: 29.5rem;
`;

const TickIcon = styled.i`
	color: #26d426;
	padding-right: 5px;
`;

export default function Home({ onSetCanvas, generateHexcode }) {
	const [color, setColor] = useState('#6a7dfa');
	const [clicked, setClicked] = useState(false);
	const [size, setSize] = useState('200x200');
	const [alertMode, setAlertMode] = useState('none');
	const [alertText, setAlertText] = useState('');
	const [hexCopied, setHexCopied] = useState(false);

	const width = size.split('x')[0] + 'px';
	const height = size.split('x')[1] + 'px';

	return (
		<>
			<Alert style={{ display: alertMode }}>{alertText}</Alert>
			<H2
				style={{ color: color }}
				onClick={() => {
					navigator.clipboard.writeText(color);
					setHexCopied(true);
					setTimeout(() => {
						setHexCopied(false);
					}, 700);
				}}
			>
				{clicked ? color : ''}
			</H2>
			<CopiedNotification
				style={{ visibility: hexCopied ? 'visible' : 'hidden' }}
			>
				<TickIcon className='far fa-check-circle' />
				Copied!
			</CopiedNotification>
			<IconWrapper>
				<ClickMe style={{ color: clicked ? color : '#ec4646' }}>
					Click Me!
				</ClickMe>
				<Icon
					style={{ color: clicked ? color : '#ec4646' }}
					className='fas fa-long-arrow-alt-left'
				/>
			</IconWrapper>
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
				generateHexcode={generateHexcode}
			/>
			<ColorForm
				size={size}
				onSetSize={setSize}
				onSetColor={setColor}
				onSetClicked={setClicked}
				onSetAlertMode={setAlertMode}
				onSetAlertText={setAlertText}
				generateHexcode={generateHexcode}
			/>
		</>
	);
}
