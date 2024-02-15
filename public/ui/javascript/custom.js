(function ($) {



    jQuery(document).ready(function ($) {

      

        AOS.init({
            once: true,
        });


        
        $(".custom-radiobox input").click(function(){
            var iVal = $(this).val();
            console.log("#" + iVal)
            $(this).parent().parent().siblings('.form_wrapper').children(' .form_container').hide();
            $("#" + iVal).show();
            
        })

       

        
        $( function() {
          $( "#formDate" ).datepicker();
          $( "#formDate" ).datepicker();
          
          $( "#toDate" ).datepicker();
          $( "#formDate2" ).datepicker();
          $( "#toDate2" ).datepicker();
          $( "#formDate3" ).datepicker();
          $( "#toDate3" ).datepicker();
          $( "#formDate4" ).datepicker();
          $( "#toDate4" ).datepicker();
          $( "#dob" ).datepicker();
          $( "#expiryDate" ).datepicker();
          $( "#ped" ).datepicker();
          $( "#dob2" ).datepicker();
          $('#dob3').datepicker();
          $( "#ed2" ).datepicker();
          $( "#ed3" ).datepicker();
          
        });


        // Start Counter
      
      

        //phone number with country
        // var input = document.querySelector("#phone");
        // intlTelInput(input, {
        //   initialCountry: "auto",
        //   geoIpLookup: function (success, failure) {
        //     $.get("https://ipinfo.io", function () { }, "jsonp").always(function (resp) {
        //       var countryCode = (resp && resp.country) ? resp.country : "us";
        //       success(countryCode);
        //     });
        //   },
        // });

        function planSwiper(){
            var swiper = new Swiper(".planSwiperTabs", {
                  // loop: true,
                  spaceBetween: 10,
                  slidesPerView: 3,
                  freeMode: true,
                  watchSlidesProgress: true,
                });
              var swiper2 = new Swiper(".planSwiper", {
                // loop: true,
                spaceBetween: 30,
                navigation: {
                  nextEl: ".swiper-button-next2",
                  prevEl: ".swiper-button-prev2",
                },
                thumbs: {
                  swiper: swiper,
                },
                breakpoints: {
                // when window width is <= 499px
                499: {
                    slidesPerView: 1,
                    spaceBetweenSlides: 50,
                    allowTouchMove:true,
                },
                // when window width is <= 999px
                999: {
                    slidesPerView: 3,
                    spaceBetweenSlides: 50,
                    allowTouchMove:false,
    
                }
              }
            });
          }
          planSwiper();


          //

          $('.desktop-toggle-btn').on('click', function(){
            $('.desktop-toggle-btn').toggleClass('show_')
            $('.rightSidebar').toggleClass('right-slide');
          })

          // $('.mobile-toggle-btn').on('click', function(){
          //   $(this).toggleClass('show__')
          //   $('.aig-navigation').fadeToggle();
          // })

          $('.desktop-toggle-btn, .rightSidebar').click(function(event){
            event.stopPropagation();
          });
          
          $('.toggle-icon, .menu').click(function(event){
            event.stopPropagation();
          });
          $("html").click(function(e)
            {
            if( e.target.className !== "desktop-toggle-btn" && e.target.className !== "rightSidebar")
            {
              $('.rightSidebar').removeClass('right-slide');
              $('.desktop-toggle-btn').removeClass('show_')
            }
          });

         


          //plan
          //plan box 1

          $('.show-hide').on('click', function(){

          

            $('.show-hide').toggleClass('show_')

            if($(this).text() === "Hide Detail"){
              $('.show-hide').text("Show Detail")
            }else{
              $('.show-hide').text("Hide Detail")
            }

            $('.plan-box').children('.prev-price').toggle();
            $('.plan-box').children('.key-coverages').toggle();
            $('.plan-box').children('.choose-plan').toggle();
            $('.plan-box').children('.ribon').toggle();
            


            $('.plan-box').children('.plus-btn').toggle();
            $('.plan-box').children('.save-wrap').toggle();

          })

          //plan box2

          $('.show-hide2').on('click', function(){

           

            $('.show-hide2').toggleClass('show_')

            if($(this).text() === "Hide Detail"){
              $('.show-hide2').text("Show Detail")
            }else{
              $('.show-hide2').text("Hide Detail")
            }

            $('.plan-box2').children('.prev-price').toggle();
            $('.plan-box2').children('.key-coverages').toggle();
            $('.plan-box2').children('.choose-plan').toggle();
            $('.plan-box2').children('.ribon').toggle();
            


            $('.plan-box2').children('.plus-btn').toggle();
            $('.plan-box2').children('.save-wrap').toggle();

          })


          //

  
          $('.faq_accordion .tab').click(function(){
            $(this).parent().siblings().children('.tab').removeClass('show');
            $(this).toggleClass('show')
            $(this).parent().siblings().children('.content').slideUp();
            $(this).next().slideToggle();
               
          })

          //

          $(".select-wrap select").on('change', function(){
            $(this).next('span').hide();
          });


          //

          $('.add-doc-btn').on('click', function(){
            $(".add-doc-area").hide();
            $('.person_data').show();
            $('.travelers_require').addClass('light-gray');
          })

          // 
          $('.rm').on('click', function(){

            $(this).toggleClass('mrt');
            
            if(!$(this).hasClass('mrt')){
                $(this).text('REAM MORE');         
            } else {
              $(this).text('READ LESS');
            }
            
            $(this).prev('ul').toggleClass('collapse_');
            
          })
          // 
          $('.sm').on('click', function(){

            $(this).toggleClass('mrt');
            
            if(!$(this).hasClass('mrt')){
                $(this).text('SHOW MORE');         
            } else {
              $(this).text('SHOW LESS');
            }
            
            $(this).parents().siblings('.wrapper_tpdt').toggleClass('collapse_');
            
          })

      //each page screen show hide
      var headerHeight = $('header').outerHeight();
      // console.log(headerHeight)
        $(".screen .cls").each(function(e) {
          // console.log(e)
          if (e != 0)
              $(this).hide();
        });

        if($(".screen .cls:first").is(':visible')){
                $("#prev").hide()
        }
    
        $("#next").click(function(){
          $('html, body').animate({ scrollTop: $('.screen').offset().top - headerHeight}, 100);
            if ($(".screen .cls:visible").next().length != 0)
                $(".screen .cls:visible").next().show().prev().hide();
            else {
                $(".screen .cls:visible").hide();
                // $(".screen div:first").show();
            }

            if($(".screen .cls:last").is(':visible')){
                $("#next").hide()
                $("#payment-submit").show();
            }
            else{
                $("#next").show()
            }
            if($(".screen .cls").is(':visible')){
                $("#prev").show()
            }
            return false;
        });
    
        $("#prev").click(function(){
          $('html, body').animate({ scrollTop: $('.screen').offset().top - headerHeight}, 100);
            if ($(".screen .cls:visible").prev().length != 0)
                $(".screen .cls:visible").prev().show().next().hide();
            else {
                $(".screen .cls:visible").hide();
                // $(".screen .cls:last").show();
            }

            if($(".screen .cls:first").is(':visible')){
                $("#prev").hide()
            }
            else{
                $("#prev").show()
                $("#payment-submit").hide();
            }
            if($(".screen .cls").is(':visible')){
                $("#next").show()
            }
            
            return false;
        });
        // end


        //custom select
       
        var x, i, j, l, ll, selElmnt, a, b, c;
        /*look for any elements with the class "custom-select":*/
        x = document.getElementsByClassName("custom-select-style");
        l = x.length;
        for (i = 0; i < l; i++) {
          selElmnt = x[i].getElementsByTagName("select")[0];
          ll = selElmnt.length;
          /*for each element, create a new DIV that will act as the selected item:*/
          a = document.createElement("DIV");
          a.setAttribute("class", "select-selected label");
          
          a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
          x[i].appendChild(a);
          /*for each element, create a new DIV that will contain the option list:*/
          b = document.createElement("DIV");
          b.setAttribute("class", "select-items select-hide");
          for (j = 1; j < ll; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                /*when an item is clicked, update the original select box,
                and the selected item:*/
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                  if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                      y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                  }
                }
                h.click();
            });
            b.appendChild(c);
          }
          x[i].appendChild(b);
          a.addEventListener("click", function(e) {
              /*when the select box is clicked, close any other select boxes,
              and open/close the current select box:*/
              e.stopPropagation();
              closeAllSelect(this);
              this.nextSibling.classList.toggle("select-hide");
              this.classList.toggle("select-arrow-active");
              this.classList.remove("label");
            });
        }
        function closeAllSelect(elmnt) {
          /*a function that will close all select boxes in the document,
          except the current select box:*/
          var x, y, i, xl, yl, arrNo = [];
          x = document.getElementsByClassName("select-items");
          y = document.getElementsByClassName("select-selected");
          xl = x.length;
          yl = y.length;
          for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
              arrNo.push(i)
            } else {
              y[i].classList.remove("select-arrow-active");
            }
          }
          for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
              x[i].classList.add("select-hide");
            }
          }
        }
        /*if the user clicks anywhere outside the select box,
        then close all select boxes:*/
        document.addEventListener("click", closeAllSelect);

        //custom toast msg

        $(".claim").on('click', function(){
          $('.custom-toast-msg').fadeIn();
          setTimeout(function(){$('.custom-toast-msg').fadeOut()},8000)
        })
        $('.toast-close').on('click', function(){
          // alert()
          $('.custom-toast-msg').fadeOut();
        })
        
});

      

}(jQuery));

