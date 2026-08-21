**Polaroid Booth**


A browser-based photo booth that captures pictures from your webcam and turns them into realistic Polaroid-style snapshots

**WORKING**


Screen when taking photos:


<img width="958" height="337" alt="og wirh" src="https://github.com/user-attachments/assets/e905b899-0040-41df-9815-1404564a4b06" />

Asking user for camera:

<img width="960" height="494" alt="ask for cam" src="https://github.com/user-attachments/assets/5445fd9b-9597-4b88-a311-86867319a63a" />


Screen when no cam is available:

<img width="958" height="437" alt="no cam" src="https://github.com/user-attachments/assets/cbc64fec-ca3a-4554-b02e-76e923b2e3ad" />




**Tech Stack**

Technology	Purpose
HTML5	Page structure, <video> element for camera feed, <canvas> for capturing frames
CSS3	Polaroid card styling, box-shadows, borders, transform: rotate() for the scattered-photo look, animations/transitions
JavaScript (Vanilla)	Camera access via navigator.mediaDevices.getUserMedia(), drawing video frames to canvas, converting canvas to image, DOM manipulation, randomized rotation logic, download functionality

Note on "ROT": The signature Polaroid look in this project comes from applying a randomized CSS rotate() transform to each photo card when it's generated — giving every snapshot a natural, hand-tossed tilt instead of a perfectly straight, robotic grid.





**Getting Started**
Prerequisites

A modern web browser (Chrome, Firefox, Edge, or Safari) that supports the getUserMedia API
A working webcam
(Optional) A local development server, since some browsers restrict camera access on file:// URLs

**Installation**

Clone the repository

bash
   git clone https://github.com/your-username/polaroid-booth.git
   cd polaroid-booth
   
Run it locally Because browsers often block camera permissions on files opened directly (file://), it's best to serve the project through a local server: Option A — VS Code Live Server extension
Right-click index.html → "Open with Live Server"
Option B — Python simple server
bash
   python3 -m http.server 8000

Then open http://localhost:8000 in your browser.

Option C — Node.js http-server

bash
   npx http-server .
   
Allow camera access when your browser prompts you.

Click the snap button!


**How to Use**
Open the app in your browser and grant camera permissions.
Position yourself in the live preview window.
Click the "Capture" / shutter button.

Your photo is captured from the video feed and drawn onto a canvas.
The canvas image is converted into a polaroid-style card:
White border added

**Limitations**
Camera access must be explicitly granted by the user each session (unless permissions are remembered by the browser).
Some mobile browsers may default to the front-facing camera; switching cameras may require additional facingMode constraints.

No persistent storage — refreshing the page clears all captured polaroids.


⚠️ Camera access requires a secure context — either https:// or localhost. It will not work over plain http:// on most modern browsers.


 
**Contributing**

Contributions are welcome! If you'd like to improve Polaroid Booth:

Fork the repository

Create a new branch (git checkout -b feature/your-feature-name)
Make your changes

Commit (git commit -m "Add your feature")

Push to your branch 
(git push origin feature/your-feature-name)

Open a Pull Request


This project is open source and available for free.

**Credits**

Built with plain HTML, CSS, and vanilla JavaScript

