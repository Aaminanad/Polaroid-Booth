
 // --- Webcam setup ---
 const video = document.getElementById('video');
 let stream = null;

 async function startCamera() {
 try {
 stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
 video.srcObject = stream;
 } catch (err) {
 console.warn('Camera access denied or not available — using fallback.');
 // Draw a colorful placeholder so the page still works
 const canvas = document.createElement('canvas');
 canvas.width = 320;
 canvas.height = 240;
 const ctx = canvas.getContext('2d');
 ctx.fillStyle = '#0f0f1a';
 ctx.fillRect(0, 0, 320, 240);
 ctx.fillStyle = '#e94560';
 ctx.font = '20px Caveat';
 ctx.textAlign = 'center';
 ctx.fillText('📷 No camera?', 160, 120);
 video.srcObject = null;
 video.poster = canvas.toDataURL();
 // We'll use a fallback capture method
 }
 }

 startCamera();

 // --- Snap ---
 const snapBtn = document.getElementById('snapBtn');
 const gallery = document.getElementById('gallery');

 function addPolaroid(imgSrc, caption = '') {
 // Remove empty message if present
 const emptyMsg = gallery.querySelector('.empty-msg');
 if (emptyMsg) emptyMsg.remove();

 const polaroid = document.createElement('div');
 polaroid.className = 'polaroid';
 // Random slight rotation
 const rot = (Math.random() * 6 - 3).toFixed(1);
 polaroid.style.setProperty('--rot', rot + 'deg');

 const img = document.createElement('img');
 img.src = imgSrc;
 img.alt = 'Polaroid snap';

 const cap = document.createElement('div');
 cap.className = 'caption';
 cap.textContent = caption || new Date().toLocaleTimeString();

 polaroid.appendChild(img);
 polaroid.appendChild(cap);
 gallery.appendChild(polaroid);
 }

 function capture() {
 const captureCanvas = document.createElement('canvas');
 captureCanvas.width = 320;
 captureCanvas.height = 240;
 const ctx = captureCanvas.getContext('2d');

 if (stream && stream.active) {
 // Draw the video frame
 ctx.drawImage(video, 0, 0, 320, 240);
 } else {
 // Fallback: draw a fun placeholder
 ctx.fillStyle = '#2d2d44';
 ctx.fillRect(0, 0, 320, 240);
 ctx.fillStyle = '#e94560';
 ctx.font = '24px Caveat';
 ctx.textAlign = 'center';
 ctx.fillText('📸 Polaroid!', 160, 120);
 ctx.fillStyle = '#f5e6d3';
 ctx.font = '16px Caveat';
 ctx.fillText('no webcam — still cute', 160, 160);
 }

 const dataUrl = captureCanvas.toDataURL('image/png');
 addPolaroid(dataUrl);
 }

 snapBtn.addEventListener('click', capture);

 // --- Clear ---
 document.getElementById('clearBtn').addEventListener('click', () => {
 gallery.innerHTML = '<div class="empty-msg">✨ Snap a photo to start your wall!</div>';
 });

 // --- Keyboard shortcut: press Space to snap ---
 document.addEventListener('keydown', (e) => {
 if (e.key === ' ' && e.target === document.body) {
 e.preventDefault();
 capture();
 }
 });
