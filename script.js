// Existing hamburger menu toggle function
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const aboutMedia = [
    { type: "image", src: "./assets/ProfilePics/about-pic.png" },
    { type: "image", src: "./assets/ProfilePics/pfp.png" },
    { type: "video", src: "./assets/ProfilePics/360.mp4" },  
    { type: "image", src: "./assets/ProfilePics/pfp2.png" },
    { type: "image", src: "./assets/ProfilePics/pfp0.png" },
    { type: "image", src: "./assets/ProfilePics/pfp1.png" },
    { type: "image", src: "./assets/ProfilePics/pfp3.png" },
    { type: "video", src: "./assets/ProfilePics/flag.mp4" },
    { type: "image", src: "./assets/ProfilePics/pfp4.png" },
    { type: "image", src: "./assets/ProfilePics/pfp5.png" },
  ];
  
  let currentAboutMediaIndex = 0;
  
  function cycleAboutMedia() {
    currentAboutMediaIndex = (currentAboutMediaIndex + 1) % aboutMedia.length;
    const container = document.getElementById('about-media-container');
    const media = aboutMedia[currentAboutMediaIndex];
  
    if (media.type === "image") {
      container.innerHTML = `<img id="about-pic" src="${media.src}" alt="About Me picture" />`;
    } else if (media.type === "video") {
      container.innerHTML = `
        <video id="about-video" autoplay loop muted playsinline>
          <source src="${media.src}" type="video/mp4">
          Your browser does not support the video tag.
        </video>`;
    }
  }
  