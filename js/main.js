
// *** CAROUSEL ***

// Wait for window to load
window.onload = function() {
    // Get all available carousels
    const carousels = document.querySelectorAll('.carousel');
    
    // Iterate through all carousels
    for ( var i = 0; i < carousels.length; i++ ) {
        // Get the carousel of this turn
        const carousel = carousels[i];

        // Setup useful structures
        carousel.dataset.carouselPage = 1;
        const carouselWrapper = carousel.querySelector('.carousel-wrapper');
        const carouselBtns = carousel.querySelectorAll('.carousel-btn');
        const carouselSlides = carousel.querySelectorAll('.carousel-slide');
        
        // Setup buttons click events
        for ( var x = 0; x < carouselBtns.length; x++ ) {
          var btn = carouselBtns[x];

          btn.addEventListener('click', function() {
            switch ( this.dataset.target ) {
              case 'previous':
                // Move to next slide if not in first slide
                if ( carousel.dataset.carouselPage > 1 )
                    carousel.dataset.carouselPage--;
                break;
              case 'next':
                // Halt if in last slider
                if ( carousel.dataset.carouselPage < carouselSlides.length )
                    carousel.dataset.carouselPage++;
                break;
              default:
                return;
            }
        
            carouselWrapper.style.transform = 'translateX(calc(100% * -' + (carousel.dataset.carouselPage - 1) + '))';
          });
        }
    }
};

// // Simpler version for one carousel per page. *Eiga*
// // Wait for window to load
// window.onload = function() {
//     var carouselPage = 1;
//     const carouselWrapper = document.querySelector('.carousel-wrapper');
//     const carouselBtns = document.querySelectorAll('.carousel-btn');
//     for ( var i = 0; i < carouselBtns.length; i++ ) {
//       var btn = carouselBtns[i];
//       btn.addEventListener('click', function() {
//         switch ( this.dataset.target ) {
//           case 'previous':
//             if ( carouselPage > 1 )
//               carouselPage--;
//             break;
//           case 'next':
//             if ( carouselPage < carouselBtns.length )
//               carouselPage++;
//             break;
//           default:
//             return;
//         }
//         carouselWrapper.style.transform = 'translateX(calc(100% * -' + (carouselPage - 1) + '))';
//       });
//     }
// };


// *** MODAL ***
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var btnClose = document.getElementsByClassName("close-modal");

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on the down arrow, close the modal
function closeModal() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

