
(() => {

  //h2 tags and p tags will get data from this variable
  const hotspotData = [
    { 
      title: "Ear Tip",
      text: "Crafted with precision, our ear tips provide a snug fit, ensuring maximum comfort and exceptional sound isolation. Say goodbye to discomfort and hello to immersive audio!",
      image: "../images/eartip.jpeg"
    },
    {
      title: "Charging Points",
      text: "Our earbuds feature hassle-free magnetic charging points. Simply snap them into place, and they'll charge effortlessly. It's convenience redefined!",
      image: ""
    },
    {
      title: "Battery",
      text: "Experience all-day listening with our long-lasting battery. From your morning commute to late-night workouts, our earbuds keep the music playing.",
      image: "../images/battery.png"
    },
    {
      title: "Active Noise Cancellation",
      text: "Escape into your own world with our advanced Active Noise Cancellation technology. Block out distractions and immerse yourself in your favorite tunes or podcasts.",
      image: "../images/anc.jpeg"
    },
    {
      title: "Multi-Function Button",
      text: "Control everything with a simple touch. Play, pause, skip tracks, and even answer calls without reaching for your phone. It's music control at your fingertips!",
      image: ""
    },
    {
      title: "Speaker",
      text: "Our earbuds feature high-quality speakers that deliver crystal-clear sound with deep bass. Get ready to be blown away by the richness and depth of your music.",
      image: ""
    },
  ];
// this is is the function to give data to h2 and p tag
function populateHotspotContent() {
  hotspotData.forEach((data, index) => {
    const hotspotTitle = document.getElementById(`hotspot-title-${index + 1}`); // it will increment h2 id by 1 
    const hotspotText = document.getElementById(`hotspot-text-${index + 1}`);   // it will increment text id by 1
    const hotspotImage = document.getElementById(`hotspot-img-${index + 1}`);   //it will increment image id by 1 
    if (hotspotTitle && hotspotText) {
      hotspotTitle.textContent = data.title;
      hotspotText.textContent = data.text;
      hotspotImage.src = data.image;
    }
  });
}

//event listener to load hotspot content when the page is ready
document.addEventListener("DOMContentLoaded", populateHotspotContent);

// target all hotspot elements
const hotspots = document.querySelectorAll('.Hotspot');
//the code below is without GSAP
// Attached hover event listeners to each hotspot
hotspots.forEach((hotspot, index) => {
    hotspot.addEventListener('mouseover', () => {
        const annotation = hotspot.querySelector('.HotspotAnnotation');
        annotation.style.display = 'block';
    });

    hotspot.addEventListener('mouseout', () => {
        const annotation = hotspot.querySelector('.HotspotAnnotation');
        annotation.style.display = 'none';
    });
}); 

//the code below uses GSAP for duration

hotspots.forEach((hotspot, index) => {
  const annotation = hotspot.querySelector('.HotspotAnnotation');
  
  // Initial state
  gsap.set(annotation, { display: 'none' });

  hotspot.addEventListener('mouseover', () => {
      gsap.to(annotation, { display: 'block', duration: 0.5 });
  });

  hotspot.addEventListener('mouseout', () => {
      gsap.to(annotation, { display: 'none', duration: 0.5 });
  });
});

// hotspots.forEach((hotspot, index) => {
//   const annotation = hotspot.querySelector('.HotspotAnnotation');
  
//   hotspot.addEventListener('mouseover', () => {
//       // Use GSAP to smoothly show the content
//       gsap.to(annotation, { opacity: 1, duration: 0.3 });
//   });

//   hotspot.addEventListener('mouseout', () => {
//       // Use GSAP to smoothly hide the content
//       gsap.to(annotation, { opacity: 0, duration: 0.3 });
//   });
// });

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.grid-con').forEach(section => {
  gsap.from(section.querySelectorAll('.slide-right'), {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "30%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(section.querySelectorAll('.slide-left'), {
    x: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "30%",
      toggleActions: "play none none none"
    }
  });
});

})();


(() => {
    
  (() => {
      //vaiables
      let imageCon = document.querySelector('#imageCon'),
          drag = document.querySelector('.image-drag'),
          left = document.querySelector('.image-left'),
          dragging = false,
          min = 0,
          max = imageCon.offsetWidth;
  
  
      function onDown() {
          dragging = true;
          console.log("on Down called")
      }
  
      function onUp() {
          dragging = false;
          console.log("on Up called")
      }
  
      function onMove() {
          if (dragging === true) {
              let x = event.clientX - imageCon.getBoundingClientRect().left;
  
              if (x < min) {
                  x = min; //in other word zero
              } else if (x > max) {
                  x = max-10;
              }
  
              drag.style.left = x + 'px';
              left.style.width = x + 'px';
          }
  
      }
  
      //event listeners
  
      drag.addEventListener('mousedown', onDown);
      document.body.addEventListener('mouseup', onUp);
      document.body.addEventListener('mousemove',onMove)
  
  
  })();

})();


document.addEventListener('DOMContentLoaded', function () {
  
  var hamburgerIcon = document.getElementById('hamburger-icon');
  if (hamburgerIcon) {
      hamburgerIcon.addEventListener('click', function() {
          
          var mobileMenu = document.getElementById('mobile-menu');
          if (mobileMenu) {
              mobileMenu.classList.toggle('show');
          } else {
              console.error('Mobile menu element not found.');
          }
      });
  } else {
      console.error('Hamburger icon element not found.');
  }
});


(() => {
  const canvas = document.querySelector("#explode-view");
  const context = canvas.getContext("2d");
  canvas.width = 1920;
  canvas.height = 1080;
  const frameCount = 341; 
  const images = []; 

  
  const buds={
      frame: 0
  }

  
  for(let i=0; i<frameCount; i++){

     
      const img = new Image();
      
      img.src = `images/photo1_${(i+1).toString().padStart(4, '0')}.jpg`;
      images.push(img);
  }

  

  gsap.to(buds, {
      frame: 341,
      snap: "frame",
      scrollTrigger: {
          trigger: "#explode-view",
          pin: true,
          scrub: 8,
          start: "top top"
      },
      onUpdate: render
  })

  images[0].addEventListener("onload", render);

  function render(){
      context.clearRect(0,0, canvas.width, canvas.height);
      context.drawImage(images[buds.frame],0,0);
  }
})();
