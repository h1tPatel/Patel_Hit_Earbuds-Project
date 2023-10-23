 (() => {


    const onProgress = (event) => {
        const progressBar = event.target.querySelector('.progress-bar');
        const updatingBar = event.target.querySelector('.update-bar');
        updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
        if (event.detail.totalProgress === 1) {
          progressBar.classList.add('hide');
          event.target.removeEventListener('progress', onProgress);
        } else {
          progressBar.classList.remove('hide');
        }
      };
      document.querySelector('model-viewer').addEventListener('progress', onProgress);
    
    //console.log("IIFE Fired");
    //variables
    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");
  
    //functions
    function modelLoaded() {
      //console.log(hotspots);
      hotspots.forEach(hotspot => {
        hotspot.style.display = "block";
      });
    }
  
    function showInfo() {
      let selected = document.querySelector(`button[slot="${this.slot}"] > div`);
      gsap.to(selected, 1, { autoAlpha: 1 });
    }
  
    function hideInfo() {
      let selected = document.querySelector(`button[slot="${this.slot}"] > div`);
      gsap.to(selected, 1, { autoAlpha: 0 });
    }
  
    //Event Listener
    model.addEventListener("load", modelLoaded);
  
    hotspots.forEach(function (hotspot) {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
    });
  })();
  