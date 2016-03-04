$(document).ready(function(){
	// $('select[multiple]').multiselect( 'loadOption', [{
	//     name   : 'Option Name 1',
	//     value  : 'option-value-1',
	//     checked: false
	// },{
	//     name   : 'Option Name 2',
	//     value  : 'option-value-2',
	//     checked: false
	// }]);

	$('select[multiple]').multiselect({
		"search": true,
		"columns": 2,
    	"placeholder": 'Select value'
	});
	 $('.dpicker').datetimepicker({
	 	format: 'MM/DD/YYYY'
	 });

});