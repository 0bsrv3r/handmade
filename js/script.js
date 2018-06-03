// SMOOTH SCROLL START
   var down = $("header .slider .down p");
    var headerHeight = $("header").innerHeight();

    down.click(function(){
        window.scroll({
            top: headerHeight, 
            left: 0, 
            behavior: 'smooth' 
          });
    })
// SMOOTH SCROLL END

    // RESPONSIV MENU BARS START
var bars_icon = $("header .search .resp-bars"),
    bars = $("header .bar ul"),
    logo =$("header .search .logo-center");
    closebars = $("header .bar ul .resp-bars");
    bars_icon.click(function(){
        $(this).toggleClass("active");
        bars.toggleClass("active");
        logo.toggleClass("active");
    })
    closebars.click(function(){
        bars_icon.toggleClass("active");
        bars.toggleClass("active");
        logo.toggleClass("active");
    })
    // RESPONSIV MENU BARS END

//  SEARCH START
$(document).ready(function() {
    var p = $("header .search .logo p");
    var input = $("header .search .logo input");
    var span = $("header .search .logo form span");

    p.click(function(){
        input.toggleClass("active");
        span.toggleClass("active");
    })

    span.click(function(){
        input.toggleClass("active");
        $(this).toggleClass("active");
    })
})
//  SEARCH END

// REGISTR START

    var years = $("#registr form select .year"),
    months = $("#registr form select .month"),
    days = $("#registr form select .day");

    var dates = new Date(),
        year = dates.getFullYear(),
        month = dates.getMonth(),
        day = dates.getDate();

    var monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    years.text(year);
    months.text(monthArr[month]);
    days.text(day);

// REGISTR END


// SELECT START
$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});
// SELECT END


// OWL SLIDER START
$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      margin: 10,
      nav: true,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    })
  })

  // OWL SLIDER END