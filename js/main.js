// (() => {
//   // variables
//   const model = document.querySelector("#model");
//   const hotspots = document.querySelectorAll(".Hotspot");
//   const infoBoxes = [
//     {
//       title: "Noise-cancelling microphones",
//       text:
//         "Noise-cancelling microphones and a rear copper shield are optimally placed to quickly detect outside noises, working together to counter noise before it disturbs your experience.",
//       image: "../images/hotspot.svg",
//     },
//     // Add more info boxes as needed
//   ];

//   // functions
//   function modelLoaded() {
//     hotspots.forEach((hotspot) => {
//       hotspot.style.display = "block";
//     });
//   }

//   function loadInfo() {
//     infoBoxes.forEach((infoBox, index) => {
//       // Use backticks for string interpolation
//       let selected = document.querySelector(`#hotspot-${index + 1}`);
      
//       // Create the elements for title and text
//       const titleElement = document.createElement('h2');
//       titleElement.textContent = infoBox.title;
      
//       const textElement = document.createElement('p');
//       textElement.textContent = infoBox.text;

//       // Append title and text elements to the selected hotspot
//       selected.appendChild(titleElement);
//       selected.appendChild(textElement);
//     });
//   }

//   function showInfo() {
//     let selected = document.querySelector(`#${this.slot}`);
//     gsap.to(selected, 1, { autoAlpha: 1 });
//   }

//   function hideInfo() {
//     let selected = document.querySelector(`#${this.slot}`);
//     gsap.to(selected, 1, { autoAlpha: 0 });
//   }

//   // Event Listeners
//   model.addEventListener("load", modelLoaded);

//   hotspots.forEach(function (hotspot) {
//     hotspot.addEventListener("mouseover", showInfo);
//     hotspot.addEventListener("mouseout", hideInfo);
//   });
// })();

(() => {

  // Data for hotspot content
const hotspotData = [
  {
    title: "Ear Tip",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, error.",
  },
  {
    title: "Charging Points",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, error.",
  },
  {
    title: "Battery",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, error.",
  },
  {
    title: "Active Noise Cancellation",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, error.",
  },
  {
    title: "Multi Function Button",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, error.",
  },
  {
    title: "Speaker",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, error.",
  },
];

// Function to populate hotspot content
function populateHotspotContent() {
  hotspotData.forEach((data, index) => {
    const hotspotTitle = document.getElementById(`hotspot-title-${index + 1}`);
    const hotspotText = document.getElementById(`hotspot-text-${index + 1}`);

    if (hotspotTitle && hotspotText) {
      hotspotTitle.textContent = data.title;
      hotspotText.textContent = data.text;
    }
  });
}

// Add an event listener to load hotspot content when the page is ready
document.addEventListener("DOMContentLoaded", populateHotspotContent);

// Get all hotspot elements
const hotspots = document.querySelectorAll('.Hotspot');

// Attach hover event listeners to each hotspot
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
})();