     $(document).ready(function(){
            $('#log').on('click', function () {
                $('#login').slideToggle();
            });

            $('#button1').on ("click",function () {
               $(".content1").slideToggle();
            });

            $('#button2').click(function () {
               $('.content2').slideToggle();
            });

            $('#button3').click(function () {
               $('.content3').slideToggle();
            });

        });