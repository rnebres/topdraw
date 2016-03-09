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

	$('.datatables').DataTable({
	    dom: '<"pull-left" l><"pull-right"f><"clearfix"><t><"pull-left" i><"pull-right" p>',

		columnDefs: [
			{ "targets": [5], "orderable": false },
	    	{ "targets": [5], "width": "70px" }
	    ],

		aaSorting: [],

		oLanguage: {
			sSearch: '',
			sSearchPlaceholder: 'Search for...',
			sLengthMenu: 'Records to show: _MENU_',

			oPaginate: {
				sPrevious: '«',
				sNext: '»'
			}
		}
	});

	$(document).on('click', '.btn-add-div', function () {
        var form = $(this).parents('.dashboard-settings-content').eq(0);
	    var formClone = form.clone();
	    form.after(formClone);
    });

    $(document).on('click', '.btn-remove-div', function () {
        $(this).parents('.dashboard-settings-content').eq(0).remove();
    });

});