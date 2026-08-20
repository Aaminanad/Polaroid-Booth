Polaroid Booth

A fun, browser-based photo booth that captures pictures from your webcam and instantly turns them into realistic Polaroid-style snapshots — complete with the classic white border, a tilted (rotated) frame, subtle shadows, and a vintage feel. Built entirely with HTML, CSS, and vanilla JavaScript — no frameworks, no backend, no dependencies.

✨ Features
🎥 Live webcam preview using the getUserMedia API
📷 One-click photo capture rendered onto an HTML5 <canvas>
🖼️ Instant Polaroid framing — white border, bottom caption strip, and drop shadow
🔄 Randomized rotation effect so each captured photo lands on the "table" at a slightly different angle, just like tossing real polaroids into a pile
🎞️ Countdown timer / shutter animation before the photo is taken (optional flash effect)
🎨 Filter options (e.g., black & white, sepia/vintage, warm tone) applied via CSS filters or canvas pixel manipulation
📝 Editable captions — type a little note under each polaroid, just like writing on the white strip with a marker
💾 Download / Save captured polaroids as PNG images
🗑️ Delete / retake individual photos
📱 Responsive design — works on desktop and mobile browsers with camera access
🖱️ Drag-and-drop rearranging of polaroids on the "corkboard" (optional feature, if implemented)
⚡ Zero dependencies — pure HTML/CSS/JS, runs entirely client-side
🛠️ Tech Stack
Technology	Purpose
HTML5	Page structure, <video> element for camera feed, <canvas> for capturing frames
CSS3	Polaroid card styling, box-shadows, borders, transform: rotate() for the scattered-photo look, animations/transitions
JavaScript (Vanilla)	Camera access via navigator.mediaDevices.getUserMedia(), drawing video frames to canvas, converting canvas to image, DOM manipulation, randomized rotation logic, download functionality

Note on "ROT": The signature Polaroid look in this project comes from applying a randomized CSS rotate() transform to each photo card when it's generated — giving every snapshot a natural, hand-tossed tilt instead of a perfectly straight, robotic grid.

📁 Project Structure
polaroid-booth/
│
├── index.html          # Main HTML page — camera view, capture button, gallery container
├── style.css            # All styling — polaroid card design, rotation, shadows, animations
├── script.js             # Core logic — camera access, capture, rendering, rotation, download
│
├── assets/
│   ├── shutter-sound.mp3    # (optional) camera click sound effect
│   ├── flash-overlay.png    # (optional) flash animation asset
│   └── fonts/                # (optional) handwriting-style font for captions
│
└── README.md            # You're reading it!
🚀 Getting Started
Prerequisites
A modern web browser (Chrome, Firefox, Edge, or Safari) that supports the getUserMedia API
A working webcam
(Optional) A local development server, since some browsers restrict camera access on file:// URLs
Installation
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
Click the capture button 📸 and watch your photo transform into a polaroid!
🎮 How to Use
Open the app in your browser and grant camera permissions.
Position yourself in the live preview window.
Click the "Capture" / shutter button.
A short countdown or flash animation plays (if enabled).
Your photo is captured from the video feed and drawn onto a canvas.
The canvas image is converted into a polaroid-style card:
White border added
Random rotation angle applied (e.g., between -8° and +8°)
Drop shadow for depth
Optional caption input appears below the image
The new polaroid is added to the gallery/board area.
Click Download to save the polaroid as a .png, or Delete to discard it and try again.
🧩 How It Works (Under the Hood)
1. Accessing the Camera
javascript
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => console.error("Camera access denied:", err));
2. Capturing a Frame

The live <video> feed is drawn onto a hidden <canvas> element at the moment of capture:

javascript
canvas.width = video.videoWidth;
canvas.height = video.videoHeight;
context.drawImage(video, 0, 0, canvas.width, canvas.height);
const imageDataURL = canvas.toDataURL("image/png");
3. Creating the Polaroid Card

A new <div> (the polaroid frame) is generated dynamically and injected into the gallery, with the captured image set as its background or an <img> child element.

4. Applying the Rotation Effect

Each polaroid gets a small random rotation so the collection looks naturally scattered:

javascript
const randomAngle = Math.floor(Math.random() * 16) - 8; // between -8deg and +8deg
polaroidElement.style.transform = `rotate(${randomAngle}deg)`;
5. Styling the Frame (CSS)
css
.polaroid {
  background: #fff;
  padding: 12px 12px 40px 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.polaroid:hover {
  transform: rotate(0deg) scale(1.05);
  z-index: 10;
}
🎨 Customization

You can easily tweak the look and feel:

What to change	Where
Rotation range (e.g., -8° to 8°)	script.js → the randomAngle calculation
Polaroid border thickness/color	style.css → .polaroid padding & background
Filters (B&W, sepia, vintage)	style.css → filter: grayscale(1); or filter: sepia(0.6);
Caption font (handwriting style)	style.css → @font-face + .caption font-family
Countdown duration	script.js → countdown timer logic
Shutter sound	assets/shutter-sound.mp3 + Audio object in script.js
🌐 Browser Compatibility
Browser	Supported
Chrome	✅
Firefox	✅
Edge	✅
Safari	✅ (may require HTTPS or localhost)
Mobile browsers	✅ (camera permissions vary by device)

⚠️ Camera access requires a secure context — either https:// or localhost. It will not work over plain http:// on most modern browsers.

🐞 Known Issues / Limitations
Camera access must be explicitly granted by the user each session (unless permissions are remembered by the browser).
Some mobile browsers may default to the front-facing camera; switching cameras may require additional facingMode constraints.
Downloaded images are limited to the resolution of the webcam feed.
No persistent storage — refreshing the page clears all captured polaroids (unless localStorage or IndexedDB support is added).
🗺️ Roadmap / Future Improvements
 Add localStorage support to persist polaroids between sessions
 Add drag-and-drop rearranging of polaroids on a virtual corkboard
 Add more filter presets (retro, faded, high-contrast)
 Add ability to switch between front/rear camera on mobile
 Add print-friendly layout for exporting a full "polaroid sheet"
 Add sound toggle and customizable shutter sound
 Add sharing options (copy to clipboard, share via Web Share API)
🤝 Contributing

Contributions are welcome! If you'd like to improve Polaroid Booth:

Fork the repository
Create a new branch (git checkout -b feature/your-feature-name)
Make your changes
Commit (git commit -m "Add your feature")
Push to your branch (git push origin feature/your-feature-name)
Open a Pull Request
📄 License

This project is open source and available under the MIT License. Feel free to use, modify, and distribute it for personal or commercial projects.

🙌 Credits

Built with plain HTML, CSS, and JavaScript — no libraries, no frameworks, just the browser's native Web APIs (getUserMedia, Canvas, and CSS transform) doing all the heavy lifting.

Inspired by the timeless charm of instant film photography. 🎞️

Enjoy snapping memories, one polaroid at a time! 📸✨
