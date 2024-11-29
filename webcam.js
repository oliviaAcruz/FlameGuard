// Get the video element
const video = document.getElementById("webcam");

// Access the webcam
async function startWebcam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (error) {
        console.error("Error accessing webcam:", error);
        alert("Could not access webcam. Make sure to grant permission.");
    }
}

// Stop the webcam
function stopWebcam() {
    const stream = video.srcObject;
    const tracks = stream ? stream.getTracks() : [];
    tracks.forEach(track => track.stop());
    video.srcObject = null;
}

// Start the webcam automatically when the page loads
startWebcam();