/**
 * Created by saurabh on 19/10/16.
 */
var d  = new Date();
var mm = d.toLocaleDateString().split('/')[1];
var dd = d.toLocaleDateString().split('/')[0] ;
var yyyy = d.toLocaleDateString().split('/')[2];
var date_now = (yyyy + "-" + mm + "-" + dd);
$('#datetimetextbox').val(date_now);
$.fn.datepicker.defaults.format = "yyyy-mm-dd";
$.fn.datepicker.defaults.autoclose = true;
$.fn.datepicker.defaults.endDate = "0d";
$.fn.datepicker.defaults.startDate = "-4d";
$.fn.datepicker.defaults.clearBtn = true;

$('#example1').datepicker({

});
