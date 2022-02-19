const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('2022-04-16T11:30:00').getTime(),
  x = setInterval(function() {

    let now = new Date().getTime(),
        distance = countDown - now;
    
    //do something later when date is reached
    if (distance <= 0) {
      clearInterval(x);
      document.getElementById('countdownText').style.display='none',
      document.getElementById('countdownExpired').style.display='block',
      document.getElementById('countdownExpired').innerHTML="JUST MARRIED!";
    }
    else {
      document.getElementById('countdownText').style.display='block',
      document.getElementById('countdownExpired').style.display='none',
      document.getElementById('days').innerHTML = Math.floor(distance / (day)),
      document.getElementById('hours').innerHTML = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes').innerHTML = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds').innerHTML = Math.floor((distance % (minute)) / second);

    }
  }, second)

function giftModal(text) {
  document.getElementById('idGift').style.display='block';
  document.getElementById('giftName').innerHTML=text;
  document.getElementById('giftNameSmall').innerHTML=text;
}


!function(d,s,id) {
  var js,fjs=d.getElementsByTagName(s)[0];
  if(!d.getElementById(id)) {
    js=d.createElement(s);
    js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';
    fjs.parentNode.insertBefore(js,fjs);
  }
}(document,'script','weatherwidget-io-js');


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

