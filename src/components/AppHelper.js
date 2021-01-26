import React from 'react';
import styled from 'styled-components';
import Canvas from './Canvas';
import Home from './Home.js';

const H1 = styled.h1`
	font-size: 3.4rem;
	margin-top: -3rem;
	margin-left: 1.3rem;
`;

const StyledApp = styled.div`
	height: 100vh;
	background-color: #f8f1f1;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	z-index: -1;
`;

const StyledSpan = styled.span`
	color: ${(props) => props.color};
	margin: ${(props) => (props.margin ? props.margin : '0px')};
`;

export default function AppHelper({ onSetCanvas, canvas, generateHexcode }) {
	if (canvas) {
		return <Canvas />;
	}
	return (
		<StyledApp>
			<H1>
				<StyledSpan color='#ec4646'>Random</StyledSpan>
				<StyledSpan color='#6930c3' margin='0px 18px'>
					Color
				</StyledSpan>
				<StyledSpan color='#51c2d5'>Generator</StyledSpan>
			</H1>
			<Home generateHexcode={generateHexcode} onSetCanvas={onSetCanvas} />
		</StyledApp>
	);
}
