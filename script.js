$(document).ready(function()
{
  $('#menu-icon').click(function()
  {
    $(this).toggleClass('fa-bars fa-times');
    $('.navbar').toggleClass('active');
  });

  $('a[href*="#"]').on('click', function(e)
  {
    e.preventDefault();
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top - 150,
      },
      500,
      'linear'
    );
  });

  $(window).on('scroll', function()
  {
    $('section').each(function() {
      let top = $(window).scrollTop();
      let offset = $(this).offset().top - 150;
      let height = $(this).outerHeight();
      let id = $(this).attr('id');

      if (top >= offset && top < offset + height)
      {
        $('header nav a').removeClass('active');
        $('header nav a[href="#' + id + '"]').addClass('active');
      }
    });
  });

  $('form').submit(function(e)
  {
    e.preventDefault();
    let isValid = true;

    $('input[type="text"], input[type="email"], input[type="number"], textarea').each(function()
    {
      if ($(this).val().trim() === '')
      {
        isValid = false;
        $(this).addClass('invalid');
      }
      else
      {
        $(this).removeClass('invalid');
      }
    });

    if (isValid)
    {
      alert('Form submitted successfully!');
      $('form')[0].reset();
    }
  });

  $(window).scroll(function()
  {
    if ($(this).scrollTop() > 200)
    {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    }
  });

  $('.scroll-top').click(function()
  {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });
});