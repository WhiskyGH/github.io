//JS IM HAEDER----------------------------------------------------------HAEDER//
//scroll indicator------------------------------------------------------------//
window.onscroll = function() {myFunction();}

function myFunction()
{
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.height = scrolled + "%";
  jQuery('#debugger').text( winScroll );

  if(winScroll >= 2100 && winScroll <=4000)
  {
        //jQuery('#login_form').css('display','block');
        jQuery('#login_form').css('visibility','visible');
        //jQuery('#third_page').css('display','block');
  }
  else
  {
      //jQuery('#login_form').css('display','none');
      jQuery('#login_form').css('visibility','hidden');
  }

  if(winScroll >= 500 && winScroll <=2000)
  {
        jQuery('#title_02_div').css('visibility','visible');
  }
  else
  {
      jQuery('#title_02_div').css('visibility','hidden');
  }
}


//JS IM BODY--------------------------------------------------------------BODY//
//change position to sticky (image 02)----------------------------------------//
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
        $('#sticky-anchor').height($('#sticky').outerHeight());
    } else {
        $('#sticky').removeClass('stick');
        $('#sticky-anchor').height(0);
    }
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});

var dir = 1;
var MIN_TOP = 200;
var MAX_TOP = 350;

function autoscroll() {
    var window_top = $(window).scrollTop() + dir;
    if (window_top >= MAX_TOP) {
        window_top = MAX_TOP;
        dir = -1;
    } else if (window_top <= MIN_TOP) {
        window_top = MIN_TOP;
        dir = 1;
    }
    $(window).scrollTop(window_top);
    window.setTimeout(autoscroll, 100);
}

//Abfrage ob Zeichen enthält für Login----------------------------------------//
	$(document).on("click", "#login_button", function(){
    password();
	});

//password--------------------------------------------------------------------//
function password(){
  var login_value = $("#login_name_text").val();
  var pruef_wert_1 = "password";
  if(login_value.indexOf(pruef_wert_1) != -1)
  {
    rightlogin();
  }
  else
  {
    wronglogin();
  }
};

//Right login-----------------------------------------------------------------//
function rightlogin(){
    var login = $("#page_four");
    var extra_point = $("#extra_point");
    login.css('display', 'block');
    extra_point.css('display', 'block');
};

//Wrong login-----------------------------------------------------------------//
function wronglogin(){
    var login2 = $("#wrapper_div");
      jQuery('#wrapper_div').fadeOut(2000,function()
      {
      jQuery('#getback').css('display','block');
      });
};

//Subscribe button------------------------------------------------------------//
function subscribe(){
    var test = $("#button");
    test.addClass('newsletter_btn_toggle');
    test.removeClass('newsletter_btn');
    if(test.hasClass('newsletter_btn'))
    {
      test.text('Subscribe');
    }
    else
    {
      test.text('Success!');
    }
};

//Videoplayer-----------------------------------------------------------------//
jQuery(document).ready(function(){
  jQuery(document).on('click', '.video_button', function(){
    var link = jQuery(this).attr('id');
    //jQuery('.' + link).html('<iframe style="width:100%; height:100%;" src="https://www.youtube.com/embed/' + link + '?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
      jQuery('#replace_me').replaceWith('<iframe style="width:100%; height:100%;" src="https://www.youtube.com/embed/' + link + '?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
    //alert('test');
  });
});

/*jQuery(document).ready(function(){
  jQuery(document).on('click', '.video_button', function(){
    var link = jQuery(this).attr('id');
    //jQuery('.' + link).html('<iframe style="width:100%; height:100%;" src="https://www.youtube.com/embed/' + link + '?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
      jQuery('#replace_me').replaceWith('<iframe style="width:100%; height:100%;" src="https://www.youtube.com/embed/' + link + '?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
    //alert('test');
  });
});*/



//JS IM FOOTER----------------------------------------------------------FOOTER//
//Abfrage ob Zeichen enthält--------------------------------------------------//
	$(document).on("click", "#button", function(){
		var email_value = $("#email").val();
		var pruef_wert_1 = "@";
		var pruef_wert_2 = ".";
		if(email_value.indexOf(pruef_wert_1) != -1 && email_value.indexOf(pruef_wert_2) != -1)
		{
      subscribe();
		}
		else
		{
			alert("Bitte geben Sie eine gültige Email Adresse an!");
		}
	});

//timer-----------------------------------------------------------------------//
function countdown(){
  var now = new Date();
  var eventDate = new Date(2018, 06, 25);

  var currentTiime = now.getTime();
  var eventTime = eventDate.getTime();

  var remTime = eventTime - currentTiime;

  var s = Math.floor(remTime / 1000);
  var m = Math.floor(s / 60);
  var h = Math.floor(m / 60);
  var d = Math.floor(h / 24);

  h %= 24;
  m %= 60;
  s %= 60;

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  document.getElementById("days").textContent = d;
  document.getElementById("days").innerText = d;

  document.getElementById("hours").textContent = h;
  document.getElementById("minutes").textContent = m;
  document.getElementById("seconds").textContent = s;

  setTimeout(countdown, 1000);
}

countdown();




//JS IM ALLGEMEINEN--------------------------------------------------ALLGEMEIN//
//Smooth jumps (hyperlinks)
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
