// $(".arrow").sticky({topSpacing:182});

// $(document).on('scroll', function(e) {
//     $('.verticalDivider').css('height', '' + (document.body.scrollTop - 500) + 'px');
//     $('.arrow').sticky();
// });


$(document).ready(function(){
  // $('.verticalDivider').sticky({topSpacing:100})
//   $('.arrow').sticky({topSpacing:100})
//
//   $(document).on('scroll', function(){
//   // $('.arrow').css('height', "" + (document.body.scrollTop - 200) + 'px')
//
// });

$('.projectsBttn').on('click', function(e){
  e.preventDefault();
  $('.container').show();
  $('.projectsBttn').hide();
  $('.projectsCloseBttn').show();
});

$('.projectsCloseBttn').on('click', function(){
  $('.container').hide();
  $('.projectsCloseBttn').hide();
  $('.projectsBttn').show();
})

})
