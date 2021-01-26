import React, { useEffect, useState } from 'react';
import AppHelper from './components/AppHelper';

function App() {
	const [canvas, setCanvas] = useState(false);

	function generateHexcode() {
		return '#' + Math.floor(Math.random() * 16777215).toString(16);
	}

	useEffect(() => {
		if (canvas) {
			const FPS = 60;
			const squareSize = 200;
			let squareX, squareY;
			let squareVelocityX, squareVelocityY;

			// load viewport
			const viewport = document.getElementById('viewport');
			const context = viewport.getContext('2d');

			context.canvas.width = window.innerWidth;
			context.canvas.height = window.innerHeight;

			// set up interval
			// eslint-disable-next-line @typescript-eslint/no-use-before-define
			setInterval(update, 1000 / FPS);

			// square starting position

			squareX = viewport.width / 2;
			squareY = viewport.height / 2;

			// random starting speed (50 - 100)
			squareVelocityX = Math.floor(Math.random() * 101 + 250) / FPS;
			squareVelocityY = Math.floor(Math.random() * 101 + 250) / FPS;

			// random direction

			if (Math.floor(Math.random() * 2) === 0) {
				squareVelocityX = -squareVelocityX;
			}

			if (Math.floor(Math.random() * 2) === 0) {
				squareVelocityY = -squareVelocityY;
			}
			// update function
			let color = '#6a7dfa';
			function update() {
				// move the ball
				squareX += squareVelocityX;
				squareY += squareVelocityY;
				// bounce ball off the wall

				// draw background and square
				context.fillStyle = '#f8f1f1';
				context.fillRect(0, 0, window.innerWidth, window.innerHeight);

				context.fillStyle = color;
				context.fillRect(
					squareX - squareSize / 2,
					squareY - squareSize / 2,
					squareSize,
					squareSize,
				);

				if (squareX - squareSize / 2 < 0 && squareVelocityX < 0) {
					squareVelocityX = -squareVelocityX;
					color = generateHexcode();
				}

				if (squareX + squareSize / 2 > viewport.width && squareVelocityX > 0) {
					squareVelocityX = -squareVelocityX;
					color = generateHexcode();
				}

				if (squareY - squareSize / 2 < 0 && squareVelocityY < 0) {
					squareVelocityY = -squareVelocityY;
					color = generateHexcode();
				}

				if (squareY + squareSize / 2 > viewport.height && squareVelocityY > 0) {
					squareVelocityY = -squareVelocityY;
					color = generateHexcode();
				}
			}
		}
	}, [canvas]);

	return (
		<AppHelper
			generateHexcode={generateHexcode}
			canvas={canvas}
			onSetCanvas={setCanvas}
		/>
	);
}

export default App;
