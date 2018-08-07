
$(document).ready(function() {
    $('#datepicker-range-start').Zebra_DatePicker({
        direction: true,
        pair: $('#datepicker-range-end')
    });

    $('#datepicker-range-end').Zebra_DatePicker({
        direction: 1
    });

});