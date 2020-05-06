jQuery(window).scroll(function() {
    var top_of_element = jQuery("#curtain").offset().top;
    var bottom_of_element = jQuery("#curtain").offset().top + jQuery("#curtain").outerHeight();
    var bottom_of_screen = jQuery(window).scrollTop() + window.innerHeight;
    var top_of_screen = jQuery(window).scrollTop();

   // If curtain element is NOT in viewport
   if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
    jQuery('#curtain').each(function(){

      // Add bg-frozen class
      jQuery(".bg-row").addClass("bg-frozen");
      // Remove bg-active classes on background template
      jQuery(".bg-row").removeClass("bg-active");

    });
    }
   
    // If curtain element is in viewport
    else {
      jQuery('#curtain').each(function(){

        // Remove bg-frozen class and
        jQuery(".bg-row").removeClass("bg-frozen");
        // Add bg-active classes on background template
        jQuery(".bg-row").addClass("bg-active");

        // Dynamically set top property of background template
        var divTop = jQuery('#curtain').outerHeight() + jQuery('.nav-row').outerHeight();
        jQuery('.bg-row').css('top', divTop + 'px');

      });
    }
});

// Set min-height of content to match height of background
// So curtain can scroll out of view
jQuery(document).ready(function() {
    var divHeight = jQuery('.bg-row').height() + jQuery('#curtain').height() + jQuery('.nav-row').height();
    jQuery('.content').css('min-height', divHeight + 'px');
});

// 1st Textbox
const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal')
const close = document.getElementById('close')
const bclose = document.getElementById('bclose')

const openModal = () => {
  modal.style.display = 'block';
}

const closeModal = () => {
  modal.style.display = 'none'
}

openBtn.addEventListener('click', openModal)

close.addEventListener('click', closeModal)
bclose.addEventListener('click', closeModal)

// 2nd textbox
const openBtn2 = document.getElementById('openModal2');
const modal2 = document.getElementById('modal2')
const close2 = document.getElementById('close2')
const bclose2 = document.getElementById('bclose2')

const openModal2 = () => {
  modal2.style.display = 'block';
}

const closeModal2 = () => {
  modal2.style.display = 'none'
}

openBtn2.addEventListener('click', openModal2)

close2.addEventListener('click', closeModal2)
bclose2.addEventListener('click', closeModal2)

// 3rd Textbox
const openBtn3 = document.getElementById('openModal3');
const modal3 = document.getElementById('modal3')
const close3 = document.getElementById('close3')
const bclose3 = document.getElementById('bclose3')

const openModal3 = () => {
  modal3.style.display = 'block';
}

const closeModal3 = () => {
  modal3.style.display = 'none'
}

openBtn3.addEventListener('click', openModal3)

close3.addEventListener('click', closeModal3)
bclose3.addEventListener('click', closeModal3)

// 4th Textbox
const openBtn4 = document.getElementById('openModal4');
const modal4 = document.getElementById('modal4')
const close4 = document.getElementById('close4')
const bclose4 = document.getElementById('bclose4')

const openModal4 = () => {
  modal4.style.display = 'block';
}

const closeModal4 = () => {
  modal4.style.display = 'none'
}

openBtn4.addEventListener('click', openModal4)

close4.addEventListener('click', closeModal4)
bclose4.addEventListener('click', closeModal4)

// 5th Textbox
const openBtn5 = document.getElementById('openModal5');
const modal5 = document.getElementById('modal5')
const close5 = document.getElementById('close5')
const bclose5 = document.getElementById('bclose5')

const openModal5 = () => {
  modal5.style.display = 'block';
}

const closeModal5 = () => {
  modal5.style.display = 'none'
}

openBtn5.addEventListener('click', openModal5)

close5.addEventListener('click', closeModal5)
bclose5.addEventListener('click', closeModal5)

// 6th Textbox
const openBtn6 = document.getElementById('openModal6');
const modal6 = document.getElementById('modal6')
const close6 = document.getElementById('close6')
const bclose6 = document.getElementById('bclose6')

const openModal6 = () => {
  modal6.style.display = 'block';
}

const closeModal6 = () => {
  modal6.style.display = 'none'
}

openBtn6.addEventListener('click', openModal6)

close6.addEventListener('click', closeModal6)
bclose6.addEventListener('click', closeModal6)

// 7th Textbox
const openBtn7 = document.getElementById('openModal7');
const modal7 = document.getElementById('modal7')
const close7 = document.getElementById('close7')
const bclose7 = document.getElementById('bclose7')

const openModal7 = () => {
  modal7.style.display = 'block';
}

const closeModal7 = () => {
  modal7.style.display = 'none'
}

openBtn7.addEventListener('click', openModal7)

close7.addEventListener('click', closeModal7)
bclose7.addEventListener('click', closeModal7)

// 8th Textbox
// const openBtn8 = document.getElementById('openModal8');
// const modal8 = document.getElementById('modal8')
// const bclose8 = document.getElementById('bclose8')
// const form = document.querySelector('form')

// const openModal8 = () => {
//   modal8.style.display = 'block';
// }



// const closeModal8 = () => {
//   modal8.style.display = 'none'
// }

// form.addEventListener('submit', (event) => {
// event.preventDefault()
// })

// openBtn8.addEventListener('click', openModal8)

// bclose8.addEventListener('click', closeModal8)

