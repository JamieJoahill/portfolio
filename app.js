////////////////////////////
//// JS SELECTORS START ////

//// BODY ////
const body = document.querySelector('body');
//////////////

//// CURSOR ////
const cursor = document.querySelector('#cursor');
////////////////

//// Navigation ///
const navContainer = document.querySelector('.nav-container');
const navMenu = document.querySelector('.nav-menu');
const navMenuMobile = document.querySelector('.nav-mobile-menu-container');
const about = document.querySelector('#about');
const portfolio = document.querySelector('#portfolio');
const upArrow = document.querySelector('#up-arrow');
const downArrow = document.querySelector('#down-arrow');
const rightArrow = document.querySelector('#right-arrow');
const leftArrow = document.querySelector('#left-arrow');
const closeIcon = document.querySelector('#close-icon');
///////////////////

//// About Section ////
const email = document.querySelector('#email');
const iconEnvelope = document.querySelector('.fa-envelope');
const githubLogo = document.querySelector('.fa-github-square');
const toolTip = document.querySelector('.fa-envelope');
const toolTipText = document.querySelector('.tooltiptext');
///////////////////////

///////////////////////////////
//// Portfolio Section One ////
///////////////////////////////
//// how much fruit ///////////
const hmfClickArea = document.querySelector('.hmf-click-area');
const hmfheading = document.querySelector('.hmf-heading');
const newhmfpos = document.querySelector('.hmf-heading-new-pos');
const imageOneHmf = document.querySelector('#image-one');
const imageTwoHmf = document.querySelector('#image-two');
const toolIconshmf = document.querySelector('#tool-icons');
const textAfterClickHmf = document.querySelector('#tcac');
//////////////////////////////

///////////////////////////////
//// Portfolio Section Two ////
///////////////////////////////
//// Spotify Random ///////////
const spotifyRandomClickArea = document.querySelector('.spotify-random-click-area');
const spotiftyRandomHeading = document.querySelector('#spotify-api-heading');
const spotifyLogo = document.querySelector('#spoitfy-logo');
const spotifyImage = document.querySelector('#spotify-images');
const spotifyImageOne = document.querySelector('#spotify-img-one');
const spotifyImageTwo = document.querySelector('#spotify-img-two');
const spotifyImageThree = document.querySelector('#spotify-img-three');
const spotifyImageFour = document.querySelector('#spotify-img-four');
const spotifyToolIcons = document.querySelector('#spotify-tool-icons');
const spotifyComingSoon = document.querySelector('#spotify-coming-soon');
const textAfterClickSpotify = document.querySelector('#tcac-spotify');
//////////////////////////////


//// JS SELECTORS END ^ ////
////////////////////////////

/////////////////////////////
//// Disable Page Scrolling ////
const disableScroll = () => {
  // Current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  // if any scroll is attempted, set this to previous values
  window.onscroll = () => {
    window.scrollTo(scrollLeft, scrollTop);
  }
}
/////////////////////////////

//////////////////////////////
//// Enable page Scrolling ////
const enableScroll = () => {
  window.onscroll = () => {};
}
//////////////////////////////


///////////////////////
// ABOUT SECTION START

// function to copy email to clipboard
function Clipboard_CopyTo(value) {
  let tempInput = document.createElement("input");
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

// Copy email to clipboard on click of envelope icon
iconEnvelope.addEventListener('click', () => {

  setTimeout(() => {
    iconEnvelope.classList.remove('scale-on-click')
  }, 300)

  Clipboard_CopyTo('jamie.joahill@gmail.com');

  toolTipText.textContent = 'Copied';
  toolTipText.style.marginLeft = '-47px';
  toolTipText.style.width = '95px';

  setTimeout(() => {
    toolTipText.style.marginLeft = '-85px';
    toolTipText.style.width = '170px';
    toolTipText.textContent = 'Click to copy email';
  }, 2000);

})

/////////////////////////////////////////////////
//// Cursor scale on about icons hover start ////
githubLogo.addEventListener('mouseout', e => {
  if(e.target === githubLogo) {
    changeStylesMouseOut(cursor, githubLogo, '#0D3B66')
  }
})

githubLogo.addEventListener('mouseenter', e => {
  if(e.target === githubLogo) {
    changeStyleMouseEnter(cursor, githubLogo, '#FAF0CA');
  }
})

toolTip.addEventListener('mouseout', e => {
  if(e.target === toolTip) {
    cursor.style.transform = 'scale(1)';
    toolTip.style.color = '#0D3B66';
  }
})

toolTip.addEventListener('mouseenter', e => {
  if(e.target === toolTip) {
    cursor.style.transform = 'scale(3.5)';
    toolTip.style.color = '#FAF0CA';
  }
})

function changeStylesMouseOut(cursor, element, color) {
  cursor.style.transform = 'scale(1)';
  element.style.color = color
}

function changeStyleMouseEnter(cursor, element, color) {
  cursor.style.transform = 'scale(3.5)';
  element.style.color = color;
}
//// Cursor scale on about icon hover end ^ ///
///////////////////////////////////////////////

//// ABOUT SECTION END ^ ////
/////////////////////////////

/////////////////////////////////
//// Portfolio Section Start ////

/////////////////////////////////
//// How Much Fruit Start ///////

const hmfElementsOnClose = () => {
  navContainer.style.display = 'block';
  navMenuMobile.style.display = 'block';

  closeIcon.style.display = 'none';

  hmfheading.classList.add('hmf-heading');
  hmfheading.classList.remove('hmf-heading-new-pos');

  imageOneHmf.classList.remove('image-one-new-pos');
  imageTwoHmf.classList.remove('image-two-new-pos');

  toolIconshmf.classList.remove('tool-icons-new-pos');

  textAfterClickHmf.style.display = 'none';

  imageOneHmf.classList.add('image-one');
  imageTwoHmf.classList.add('image-two');
}

hmfClickArea.addEventListener('click', () => {


  disableScroll();

  navContainer.style.display = 'none';
  navMenuMobile.style.display = 'none';
  
  closeIcon.style.display = 'block';
  hmfheading.classList.add('hmf-heading-new-pos');

  imageOneHmf.classList.remove('image-one');
  imageTwoHmf.classList.remove('image-two');

  imageOneHmf.classList.add('image-one-new-pos');
  imageTwoHmf.classList.add('image-two-new-pos');

  toolIconshmf.classList.add('tool-icons-new-pos');

  textAfterClickHmf.style.display = 'block';

})

//// How Much Fruit End ///////
///////////////////////////////

/////////////////////////////////
//// Spotify Random Start ///////

const spotifyRandomElementsOnClose = () => {
  navContainer.style.display = 'block';
  navMenuMobile.style.display = 'block';

  spotiftyRandomHeading.classList.remove('spotify-api-heading-new-pos');
  spotiftyRandomHeading.classList.add('spotify-api-heading');

  spotifyImageOne.classList.add('spotify-img-one');
  spotifyImageTwo.classList.add('spotify-img-two');
  spotifyImageThree.classList.add('spotify-img-three');
  spotifyImageFour.classList.add('spotify-img-four');

  spotifyImageOne.classList.remove('spotify-img-one-new-pos');
  spotifyImageTwo.classList.remove('spotify-img-two-new-pos');
  spotifyImageThree.classList.remove('spotify-img-three-new-pos');
  spotifyImageFour.classList.remove('spotify-img-four-new-pos');

  spotifyToolIcons.classList.add('spotify-tool-icons');
  spotifyToolIcons.classList.remove('spotify-tool-icons-new-pos');

  spotifyComingSoon.classList.remove('spotify-coming-soon-new-pos');

  textAfterClickSpotify.style.display = 'none';
}


spotifyRandomClickArea.addEventListener('click', () => {

  disableScroll();

  navContainer.style.display = 'none';
  navMenuMobile.style.display = 'none';
  
  closeIcon.style.display = 'block';

  spotiftyRandomHeading.classList.remove('spotify-api-heading');
  spotiftyRandomHeading.classList.add('spotify-api-heading-new-pos');

  spotifyImageOne.classList.remove('spotify-img-one');
  spotifyImageTwo.classList.remove('spotify-img-two');
  spotifyImageThree.classList.remove('spotify-img-three');
  spotifyImageFour.classList.remove('spotify-img-four');

  spotifyImageOne.classList.add('spotify-img-one-new-pos');
  spotifyImageTwo.classList.add('spotify-img-two-new-pos');
  spotifyImageThree.classList.add('spotify-img-three-new-pos');
  spotifyImageFour.classList.add('spotify-img-four-new-pos');

  spotifyToolIcons.classList.remove('spotify-tool-icons');
  spotifyToolIcons.classList.add('spotify-tool-icons-new-pos');

  spotifyComingSoon.classList.add('spotify-coming-soon-new-pos');

  textAfterClickSpotify.style.display = 'block';

})

//// Spotify Random End /////////
/////////////////////////////////

//// Portfolio Section End //////
/////////////////////////////////

///////////////////////////
// NAVIGATION SECTION START

/////////////////////////////////
//// Close Icon to view more ////
closeIcon.addEventListener('click', () => {

  enableScroll();

  hmfElementsOnClose();

  spotifyRandomElementsOnClose();

})
/////////////////////////////////

//////////////////
// Mobile Navigation Left & Right Click
rightArrow.addEventListener('click', () => {
  window.scrollBy({
    top: 0,
    left: window.innerWidth,
    behavior: 'smooth'
  })
})

leftArrow.addEventListener('click', () => {
  window.scrollBy({
    top: 0,
    left: -window.innerWidth,
    behavior: 'smooth'
  })
})
/////////
//////////////

///////////////
// Mobile Navigation Left & Right Scroll
window.addEventListener('scroll', () => {
  
  if(window.scrollX >= 500) {
    leftArrow.style.opacity = '1';
  } else {
    leftArrow.style.opacity = '0';
  }
})
//////////////
// Mobile Navigation About Text Remove on Scroll
window.addEventListener('scroll', () => {
  if(window.scrollX > 20) {
    about.style.display = 'none';
  } else {
    about.style.display = 'block';
  }
})
/////////
///////////

// Vertical Scroll Bounce Animation Start
window.addEventListener('scroll', () => {

  // Remove portfolio scroll up in about section
  if(scrollY > 587) {

    upArrow.style.display = 'block';

    // Keeping the boucing arrows in sync
    setTimeout(() => {
      upArrow.classList.remove('bounce-up');
      downArrow.classList.remove('bounce');
    }, 50);

    setTimeout(() => {
      upArrow.classList.add('bounce-up');
      downArrow.classList.add('bounce');
    }, 75);

  } else {

    upArrow.style.display = 'none';

  }

});

// Vertical Portfolio animation arrow buttons
upArrow.addEventListener('click', () => {
  window.scrollBy({
    top: -797,
    left: 0,
    behavior: 'smooth'
  })
})

downArrow.addEventListener('click', () => {
  window.scrollBy({
    top: 797,
    left: 0,
    behavior: 'smooth'
  })
})

// Vertical Navigation About Text Style Change
window.addEventListener('scroll', () => {

  if(scrollY >= 587) {
    about.style.color = 'rgb(0, 1, 0)';
  }  else {
    about.style.color = '#F2E2BA';
  }

});

// Vertical Navigation Portfolio Text Style Change
window.addEventListener('scroll', () => {

  if(scrollY >= 587) {
    portfolio.style.color = '#F2E2BA';
  } else {
    portfolio.style.color = 'rgb(0, 1, 0)';
  }
});

// Vertical Remove Portfolio Scroll Button At Last Project
window.addEventListener('scroll', () => {

  if(window.innerWidth > 700) {
    if(scrollY > 1500) {
      downArrow.style.display = 'none';
    } else {
      downArrow.style.display = 'block';
    }
  }
})

///////////////////////////////////////////
//// Cursor scale on arrow hover start ////
upArrow.addEventListener('mouseout', e => {
  if(e.target === upArrow) {
    cursor.style.transform = 'scale(1)';
    upArrow.style.color = '#0D3B66';
  }
})

upArrow.addEventListener('mouseenter', e => {
  if(e.target === upArrow) {
    cursor.style.transform = 'scale(3.2)';
    upArrow.style.color = '#FAF0CA';
  }
})

downArrow.addEventListener('mouseout', e => {
  if(e.target === downArrow) {
    cursor.style.transform = 'scale(1)';
    downArrow.style.color = '#0D3B66';
  }
})

downArrow.addEventListener('mouseenter', e => {
  if(e.target === downArrow) {
    cursor.style.transform = 'scale(3.2)';
    downArrow.style.color = '#FAF0CA';
  }
})
//// Cursor scale on arrow hover end ^ ///
/////////////////////////////////////////

// NAVIGATION SECTION END
/////////////////////////

////////////////////////////////////////////
//// CUSTOM CURSOR EVENT LISTENER START ////
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
})
//// CUSTOM CURSOR EVENT LISTENER END ^ ///
///////////////////////////////////////////
