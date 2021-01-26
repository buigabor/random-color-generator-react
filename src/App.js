import React, { useEffect, useState } from 'react';
import AppHelper from './components/AppHelper';

function App() {
	const [canvas, setCanvas] = useState(false);

	useEffect(() => {
		if (canvas) {
			const FPS = 60;
			const squareSize = 200;
			let squareX, squareY;
			let squareVelocityX, squareVelocityY;
			let viewport, context;

			// load viewport
			viewport = document.getElementById('viewport');
			context = viewport.getContext('2d');

			context.canvas.width = window.innerWidth;
			context.canvas.height = window.innerHeight;

			// set up interval
			// eslint-disable-next-line @typescript-eslint/no-use-before-define
			setInterval(update, 1000 / FPS);

			// square starting position

			squareX = viewport.width / 2;
			squareY = viewport.height / 2;

			// random starting speed (50 - 100)
			squareVelocityX = Math.floor(Math.random() * 101 + 200) / FPS;
			squareVelocityY = Math.floor(Math.random() * 101 + 200) / FPS;

			// random direction

			if (Math.floor(Math.random() * 2) === 0) {
				squareVelocityX = -squareVelocityX;
			}

			if (Math.floor(Math.random() * 2) === 0) {
				squareVelocityY = -squareVelocityY;
			}
			// update function

			function update() {
				// move the ball
				squareX += squareVelocityX;
				squareY += squareVelocityY;
				// bounce ball off the wall

				if (squareX - squareSize / 2 < 0 && squareVelocityX < 0) {
					squareVelocityX = -squareVelocityX;
				}

				if (squareX + squareSize / 2 > viewport.width && squareVelocityX > 0) {
					squareVelocityX = -squareVelocityX;
				}

				if (squareY - squareSize / 2 < 0 && squareVelocityY < 0) {
					squareVelocityY = -squareVelocityY;
				}

				if (squareY + squareSize / 2 > viewport.height && squareVelocityY > 0) {
					squareVelocityY = -squareVelocityY;
				}

				// draw background and square
				context.fillStyle = '#f8f1f1';
				context.fillRect(0, 0, window.innerWidth, window.innerHeight);
				context.fillStyle = '#6a7dfa';
				context.fillRect(
					squareX - squareSize / 2,
					squareY - squareSize / 2,
					squareSize,
					squareSize,
				);
			}
		}
	}, [canvas]);

	return <AppHelper canvas={canvas} onSetCanvas={setCanvas} />;
}

export default App;
