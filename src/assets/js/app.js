var app = new Vue({
    el: '#app',
    data: {
        nav_active: 'home',
        navs: [
            'Home','About','Contact'
        ],
        jobs: [
            'UI Designer', 'Fullstack Developer', 'UX Developer'
        ],
        scrollPosition: null
    },
    components: {
       VueHeader: {},
       VueFooter: {}
    },
    methods: {
        updateScroll() {
        this.scrollPosition = window.scrollY
        }
    },

    mounted() {
        window.addEventListener('scroll', this.updateScroll);
        $(document).scroll(function () {
            var $nav = $(".nav-stanby");
            $nav.toggleClass('main_menu', $(this).scrollTop() > 70);
        });
    }
})