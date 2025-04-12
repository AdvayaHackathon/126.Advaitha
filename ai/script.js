const loadingText = document.getElementById("loadingText");

const loadingStages = [
  { time: 0, text: "HELLO" },
  { time: 750, text: "ನಮಸ್ಕಾರ"},
  { time: 1500, text: "नमस्ते"},
  { time: 2250, text: "வணக்கம்"},
  { time: 3000, text: "నమస్కరం"}
];


// Loop through the loading stages and update the text
loadingStages.forEach(stage => {
  setTimeout(() => {
    loadingText.textContent = stage.text;
  }, stage.time);
});

loadingStages.forEach((stage, index) => {
    setTimeout(() => {
      loadingText.style.opacity = 0;
      setTimeout(() => {
        loadingText.textContent = stage.text;
        loadingText.style.opacity = 1;
      }, 300); // wait for fade out before changing text
    }, stage.time);
  });

const loadingtext = document.getElementById("loadingtext");

  const loadingstages = [
    { time: 0, text: "HELLO" },
    { time: 750, text: "ನಮಸ್ಕಾರ"},
    { time: 1500, text: "नमस्ते"},
    { time: 2250, text: "வணக்கம்"},
    { time: 3000, text: "నమస్కరం"}
  ];
  
  
  // Loop through the loading stages and update the text
  loadingstages.forEach(stage => {
    setTimeout(() => {
      loadingtext.textContent = stage.text;
    }, stage.time);
  });
  
  loadingstages.forEach((stage, index) => {
      setTimeout(() => {
        loadingtext.style.opacity = 0;
        setTimeout(() => {
          loadingtext.textContent = stage.text;
          loadingtext.style.opacity = 1;
        }, 300); // wait for fade out before changing text
      }, stage.time);
    }); 

// Redirect to login page after animation (3.5 seconds)
setTimeout(() => {
  window.location.href = 'login.html';
}, 3500); 