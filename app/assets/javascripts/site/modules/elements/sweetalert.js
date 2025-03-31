// Sweet Alert
// -----------------------------------

(function () {
    'use strict';

    $(initSweetAlert);

    function initSweetAlert() {

        $('#swal-demo1').on('click', function (e) {
            e.preventDefault();
            Swal.fire('Any fool can use a computer')
        });

        $('#swal-demo2').on('click', function (e) {
            e.preventDefault();
            Swal.fire(
                'The Internet?',
                'That thing is still around?',
                'question'
            )
        });

        $('#swal-demo3').on('click', function (e) {
            e.preventDefault();
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href>Why do I have this issue?</a>'
            })
        });

        $('#swal-demo4').on('click', function (e) {
            e.preventDefault();
            Swal.fire({
                title: 'Custom animation with Animate.css',
                animation: false,
                customClass: {
                    popup: 'animated tada'
                }
            })

        });

        $('#swal-demo5').on('click', function (e) {
            e.preventDefault();
            Swal.fire({
                title: 'Custom width, padding, background.',
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    center left
    no-repeat
  `
            })
        });

    }

})();