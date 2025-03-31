// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//

//= require rails-ujs

//--- Angle
//= require site/modules/common/wrapper.js
//= require site/app.init
//= require toastr/build/toastr.min.js
//= require sweetalert2/dist/sweetalert2
//= require data-confirm-modal
//= require_tree ./site/modules
//= require_tree ./site/custom

$(document).ready(function () {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "progressBar": true,
        "preventDuplicates": true,
        "positionClass": "toast-top-center",
        "onclick": null,
        "showDuration": "400",
        "hideDuration": "1000",
        "timeOut": "2500",
        "extendedTimeOut": "500",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "slideDown",
        "hideMethod": "slideUp",
        "maxOpened": "1",
        //"preventOpenDuplicates": true
    }
    // $('[data-bootstrap-confirm=delete]').confirmation({
    //     rootSelector: '[data-bootstrap-confirm=true]',
    //     copyAttributes: '',
    //     placement: 'top',
    //     singleton: true,
    //     popout: true,
    //     btnOkClass: 'mb-1 btn btn-danger',
    //     btnOkLabel: 'Si',
    //     btnOkIcon: '',
    //     btnCancelClass: 'mb-1 btn btn-secondary',
    //     btnCancelLabel: 'No',
    //     onConfirm: function () {
    //         $.rails.confirmed(this);
    //         return false;
    //     }
    // });
    // $.rails.confirmed = function (link) {
    //     link.data("confirm", null);
    //     link.trigger("click.rails");
    // }

});


