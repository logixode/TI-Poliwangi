var app = new Vue({
    el: '#app',
    data: {
        nav_active: 'home',
        navs: [
            'Home','About','Contact'
        ],
        abouts: [
            {
                name   : 'Rahmat Kurniawan', 
                job    : 'UI Designer'
            },
            {
                name   : 'Rohmad Kurniadi', 
                job    : 'Fullstack Developer'
            },
            {
                name   : 'Rahman Kusniadi', 
                job    : 'UX Developer'
            }
      ],
        scrolled: false,
    },
    components: {
       VueHeader: {},
       VueFooter: {}
    },

    mounted() {
        $(window).scroll(function () {
            if ($(document).scrollTop() <= 50) {
                $('.nav-stanby').removeClass('main_menu')
                app.scrolled = false
            } else {
                $('.nav-stanby').addClass('main_menu')
                app.scrolled = true
            }
            // var $nav = $(".nav-stanby")
            // $nav.toggleClass('main_menu', $(this).scrollTop() > 70)
        });
    }
})