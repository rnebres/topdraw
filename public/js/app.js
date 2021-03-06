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

	if($('select[multiple]').length > 0){
		$('select[multiple]').multiselect({
			"search": true,
			"columns": 2,
	    	"placeholder": 'Select Value',
            "selectAll": true
		});
	}

	if($('.dpicker').length > 0){
		$('.dpicker').datetimepicker({
			format: 'YYYY-MM-DD'
		});
	}
	if($('.datatables').length > 0){
		if($(window).width() < 768){
			$('.datatables').DataTable({
				responsive: true,
			    dom: '<"pull-left" l><"pull-right"f><"clearfix"><t><"pull-left" i><"pull-right" p>',
				columnDefs: [
					{ "targets": [-1], "orderable": false, className: "never"},
					{ responsivePriority: 1, targets: 0 },
	            	{ responsivePriority: 2, targets: -2 }
			    	// { "targets": [-1], "width": "120px" }
			    ],
				aaSorting: [],
				oLanguage: {
					sSearch: '<i class="fa fa-search pull-right"></i>',
					sSearchPlaceholder: 'Search',
					sLengthMenu: 'Records per page: _MENU_',

					oPaginate: {
						sFirst: '«',
						sLast: '»',
						sPrevious: '‹',
						sNext: '›'
					}
				},
				"pagingType": "full_numbers"

			});
		}else{
			$('.datatables').DataTable({
				responsive: true,
			    dom: '<"pull-left" l><"pull-right"f><"clearfix"><t><"pull-left" i><"pull-right" p>',
				columnDefs: [
					{ "targets": [-1], "orderable": false},
					{ responsivePriority: 1, targets: 0 },
	            	{ responsivePriority: 2, targets: -2 }
			    	// { "targets": [-1], "width": "120px" }
			    ],
				aaSorting: [],
				oLanguage: {
					sSearch: '<i class="fa fa-search pull-right"></i>',
					sSearchPlaceholder: 'Search',
					sLengthMenu: 'Records per page: _MENU_',

					oPaginate: {
						sFirst: '«',
						sLast: '»',
						sPrevious: '‹',
						sNext: '›'
					}
				},
				"pagingType": "full_numbers"

			});
		}

	}

	if($('.datatables-project').length > 0){
		$('.datatables-project').DataTable({
			responsive: true,
		    dom: '<"pull-left" l><"pull-right"f><"clearfix"><t><"pull-left" i><"pull-right" p>',
			columnDefs: [
				{ "targets": [-1], "orderable": false},
				{ responsivePriority: 1, targets: 0 },
            	{ responsivePriority: 2, targets: -2 },
            	// { "targets": [3,4,5], "orderable": false},
		    	// { "targets": [-1], "width": "120px" }
		    ],
			aaSorting: [],
			oLanguage: {
				sSearch: '<i class="fa fa-search pull-right"></i>',
				sSearchPlaceholder: 'Search',
				sLengthMenu: 'Records per page: _MENU_',

				oPaginate: {
					sFirst: '«',
					sLast: '»',
					sPrevious: '‹',
					sNext: '›'
				}
			},
			"pagingType": "full_numbers"

		});
	}
    if($('.datatables-history').length > 0){
        $('.datatables-history').DataTable({
            responsive: true,
            dom: '<"pull-left" l><"pull-right"f><"clearfix"><t><"pull-left" i><"pull-right" p>',
            columnDefs: [
                // { "targets": [-1], "orderable": false}
                // { "targets": [-1], "width": "120px" }
            ],
            aaSorting: [],
            oLanguage: {
                sSearch: '<i class="fa fa-search pull-right"></i>',
                sSearchPlaceholder: 'Search',
                sLengthMenu: 'Records per page: _MENU_',

                oPaginate: {
                    sFirst: '«',
                    sLast: '»',
                    sPrevious: '‹',
                    sNext: '›'
                }
            },
            "pagingType": "full_numbers"

        });
    }

    if($('.datatables-assigned').length > 0){
        $('.datatables-assigned').DataTable({
            responsive: true,
            dom: '<"pull-left" l><"pull-right"f><"clearfix"><t><"pull-left" i><"pull-right" p>',
            columnDefs: [
                { "targets": [-1], "orderable": false},
                { responsivePriority: 1, targets: 0 },
                { responsivePriority: 2, targets: -2 },
                { responsivePriority: 3, targets: -3 },
                { "targets": [5,6], "orderable": false},
                // { "targets": [-1], "width": "120px" }
            ],
            aaSorting: [],
            oLanguage: {
                sSearch: '<i class="fa fa-search pull-right"></i>',
                sSearchPlaceholder: 'Search',
                sLengthMenu: 'Records per page: _MENU_',

                oPaginate: {
                    sFirst: '«',
                    sLast: '»',
                    sPrevious: '‹',
                    sNext: '›'
                }
            },
            "pagingType": "full_numbers"

        });
    }


     function incrementID(element,count){
        var current_id = element.attr("id").split("-");
        var id_string = current_id[0];
        var new_id = id_string+"-"+count;

        return new_id;
    }

	$(document).on('click', '.btn-add-div', function () {
		var main_parent = $(this).parents(".dashboard-settings-wrapper");
		var form;
		if($(this).parents('.dashboard-settings-content').prev().length === 0){
			form = $(this).parents('.dashboard-settings-content').eq(0);
		}else{
			form = $(this).parents('.dashboard-settings-content').siblings(".dashboard-settings-content:first-child");
		}
	    var formClone = form.clone();

	    main_parent.append(formClone);
	    $('.selectpicker').selectpicker();
	    if($('.dpicker').length > 0){
			$('.dpicker').datetimepicker({
				format: 'YYYY-MM-DD'
			});
		}
		formClone.find(".dpicker").val("");
		formClone.find(".form-control").val("");
        formClone.find(".selectpicker").selectpicker('val', '');

	   	formClone.find("label").siblings(".bootstrap-select").children(".dropdown-toggle").remove();

        var count =  main_parent.children('.dashboard-settings-content').length - 1;
        ++count;


        formClone.find(".dpicker[data-minimodal-target]").each(function(){
            //CHANGE ID OF CLONED DATEPICKER
            var minimodal_target_id = $(this).attr("id");
            var new_id = minimodal_target_id+"-"+count;
            $(this).attr("id",new_id);
            var minimodal_target = $("#"+new_id).attr("data-minimodal-target").split("-");
            var minimodal_target_string = minimodal_target[0];
            var new_minimodal_target = minimodal_target_string+"-"+count;
            $(this).attr("data-minimodal-target",new_minimodal_target);


            var note_target = $("#"+new_id).attr("data-note-target").split("-");
            var note_target_string = note_target[0];
            var new_note_target = note_target_string+"-"+count;
            $(this).attr("data-note-target",new_note_target);
            //***//
        });


        formClone.find(".modal-custom").each(function(){
            var new_modal_custom_id = incrementID($(this),count);
            $(this).attr("id",new_modal_custom_id);
        });

         formClone.find(".note").each(function(){
            var new_note_custom_id = incrementID($(this),count);
            $(this).attr("id",new_note_custom_id).addClass("hide");
        });

    });



    $(document).on('click', '.btn-remove-div', function () {
    	var siblings_count = $(this).parents('.dashboard-settings-content').siblings().length;

    	if(siblings_count!== 0)
        	$(this).parents('.dashboard-settings-content').eq(0).remove();
    });


    // ENABLE ALL FORM ELEMENTS INSIDE FORM TAG
    $('.btn-edit').each(function(){
    	$(this).on('click',function(){
    		var e = $(this);
    		var attr = e.attr("data-formtarget");

    		//Hide all element that is hidden when Button is click
    		$("[data-edithide]").each(function(){
    			$(this).addClass("hide");
    		});

    		//Disabled all element that is hidden when Button is click
    		$("[data-editdisable]").each(function(){
    			$(this).prop("disabled",true);
    		});

    		//Find all input and enable it
    		$("[name='"+attr+"'] :input").prop("disabled", false);
    		$(".bootstrap-select").each(function(){
    			$(this).removeClass("disabled");
    			$(this).find(".dropdown-toggle").removeClass("disabled");
    		});


    		//Show all element that is hidden when Button is click
    		$("[data-editshow]").each(function(){
    			$(this).removeClass("hide");
    		});
    	});
    });
    $("[data-canceleditshow]").each(function(){
    	$(this).on("click",function(){
    		var e = $(this);
    		var attr = e.attr("data-formtarget");

    		//Hide all element that is hidden when Button is click
    		$("[data-edithide]").each(function(){
    			$(this).removeClass("hide");
    		});

    		//Disabled all element that is hidden when Button is click
    		$("[data-editdisable]").each(function(){
    			$(this).prop("disabled",false);
    		});

    		//Find all input and enable it
    		$("form[name='"+attr+"'] :input").prop("disabled", true);
    		$("form[name='"+attr+"']").find(".bootstrap-select").each(function(){
    			$(this).addClass("disabled");
    			$(this).find(".dropdown-toggle").addClass("disabled");
    		});


    		//Show all element that is hidden when Button is click
    		$("[data-editshow]").each(function(){
    			$(this).addClass("hide");
    		});
    	});
    });


    $('#topnav-button').on('click',function(){
    	if($(window).width() < 768){
    		$("body").toggleClass("nav-open");
    		setTimeout(function(){
    			$(".overlay").toggleClass("nav-open");
    		},300);

    	}
    });

    $("[data-enable-btn-target]").each(function(){
    	$(this).on("change",function(){
    		var attr = $(this).attr("data-enable-btn-target");
    		var value = $(this).val();

    		if(value!== ''){
    			$(attr).prop("disabled",false);
    			checkdouble(attr);
    		}else{
    			$(attr).prop("disabled",true);
    		}
    	});
    });

    function checkdouble(attr){
    	$("[data-enable-btn-target='"+attr+"']").each(function(){
    		var value = $(this).val();
    		if(value!== ''){
    			$(attr).prop("disabled",false);
    		}else{
    			$(attr).prop("disabled",true);
    			return false;
    		}
    	});
    }



    //SHOW ELEMENT
    $("[data-show-target]").each(function(){
    	$(this).on('click',function(){
    		var attr = $(this).attr("data-show-target");
    		if($("[data-enable-btn-target]").length > 0){
    			var l = $("[data-enable-btn-target]").length;
    			var x = 1;
    			var text = '';
    			$("[data-enable-btn-target]").each(function(){
    				if(x != l)
    					text = text + $(this).find(":selected").text() + " / ";
    				else
    					text = text + $(this).find(":selected").text();

    				x++;
    			});
    			// var text = $('[data-enable-btn-target] option:selected').text();
    			$('.btn-target-value-text').text(text);
    		}

    		$(attr).removeClass("hide");

    	});
    });

    // SHOW CUSTOM MINI MODAL

    jQuery.expr.filters.offscreen = function(el) {
	  return (
	              (el.offsetLeft + el.offsetWidth) < 0
	              || (el.offsetTop + el.offsetHeight) < 0
	              || (el.offsetLeft > window.innerWidth || el.offsetTop > window.innerHeight)
	         );
	};
    var original_date;
    var note_target;
    var monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    $(".dpicker").on("dp.show", function(e) {
        if($(this).attr("data-minimodal-target")){
            original_date = $(this).val();
        }
    });
    $(".dpicker").on("dp.change", function(e) {
        if($(this).attr("data-minimodal-target")){
            var target = $(this).attr("data-minimodal-target");
            $(".modal-custom").removeClass("open");
            setTimeout(function(){
                $(target).addClass("open");
                $(".btn-save").prop("disabled",true);
            },300);
        }
    });

    $(".dpicker.custom").on("dp.change", function(e) {
        if($(this).attr("data-minimodal-target")){
            var value = $(this).val();
        	var target = $(this).attr("data-minimodal-target");
            var note= $(this).attr("date-note");
            note_target = $(this).attr("data-note-target");

        	$(".modal-custom").removeClass("open");
        	setTimeout(function(){
        		$(target).addClass("open");
        		$(".btn-save").prop("disabled",true);

                var d = new Date(value);
                var month = monthArray[d.getMonth()];
                var date = d.getDate();
                var year = d.getFullYear();
                var string_date = month+' '+date+', '+year;
                $(note_target).text(string_date);


        	},300);

   			console.log(original_date,$(this).val());
            $(this).siblings(".truevalue").val($(this).val());
            $(this).val(original_date);

        }
    });
    $(document).on("click",'[data-show]',function(){
        var attr = $(this).attr("data-show");
        $(attr).removeClass('hide');

        if($(this).parents(".modal-custom")){
            $(this).parents(".modal-custom").addClass("hide");
            $(".btn-save").prop("disabled",false);
            $(note_target).parents("small").removeClass("hide");

        }
    });

    $(document).on("click","[data-minimodal-dismiss]",function(){
    	$(this).parents(".modal-custom").removeClass("open");
    	$(".btn-save").prop("disabled",false);
    });


  // REPORT JQUERY
  function checkdoubledate(classname){
       var valid = false;
        $("."+classname).each(function(){
            if($(this).is(":visible")){
                var value = $(this).val();
                if(value !== ''){
                    valid = true;
                }else{
                    valid = false;
                    return false;
                }
            }
        });
        return valid;
    }


  $("#showReport").on("click",function(){
    var value = $("#select_report").val();
    var enable = false;
    var enable2 = false;
    var enable3 = false;
    var dropdownCount = 0;
    var dpickerCount = 0;
    var multiselectCount = 0;

    $("[data-report-id]").addClass("hide");
    $("[data-report-id='"+value+"']").removeClass("hide");
    $(".btn-group-report").find(".btn").prop("disabled",true);
    setTimeout(function(){

        $("[data-report-form]").each(function(){
            if($(this).is(":visible")){
                if($(this).hasClass("dpicker")){
                    $(this).on("dp.change", function(e) {
                       enable = checkdoubledate("dpicker");
                       console.log(dropdownCount);
                       if(dropdownCount > 0){
                            if(enable2 == true && enable == true){
                                $(".btn-group-report").find(".btn").prop("disabled",false);
                            }else{
                                $(".btn-group-report").find(".btn").prop("disabled",true);
                            }
                        }else{
                             if(enable == true){
                                $(".btn-group-report").find(".btn").prop("disabled",false);
                            }else{
                                $(".btn-group-report").find(".btn").prop("disabled",true);
                            }
                        }


                    });
                    dpickerCount++;
                }
                if($(this).hasClass("selectpicker")){
                    dropdownCount++;
                }
                $(this).on("change",function(){

                    if($(this).val() !== '' && $(this).val()!== null){
                        enable2 = true;
                        enable2 = checkdoubledate("selectpicker");
                    }else{
                         enable2 = false;
                    }
                    if(dpickerCount > 0){
                        if(enable2 == true && enable == true){
                            $(".btn-group-report").find(".btn").prop("disabled",false);
                        }else{
                            $(".btn-group-report").find(".btn").prop("disabled",true);
                        }
                    }else if(multiselectCount > 0){
                        if(enable2 == true && enable3 == true){
                            $(".btn-group-report").find(".btn").prop("disabled",false);
                        }else{
                            $(".btn-group-report").find(".btn").prop("disabled",true);
                        }
                    }else{
                        if(enable2 == true){
                            $(".btn-group-report").find(".btn").prop("disabled",false);
                        }else{
                            $(".btn-group-report").find(".btn").prop("disabled",true);
                        }
                    }


                });
            }
            if($(this).hasClass("multipleselect")){
                $(".multipleselect").each(function(){
                    if($(this).next(".ms-options-wrap").is(":visible")){
                        multiselectCount++;
                        var e = $(this);
                        e.multiselect( 'unload' );
                        e.multiselect({
                            "search": true,
                            "columns": 2,
                            "placeholder": 'Select Value',
                            "selectAll": true,
                            onOptionClick: function(element, option) {
                                if(e.val()){
                                    enable3 = true;
                                }else{
                                    enable3 = false;
                                }
                                if(dpickerCount > 0){
                                    if(enable2 == true && enable == true){
                                        $(".btn-group-report").find(".btn").prop("disabled",false);
                                    }else{
                                        $(".btn-group-report").find(".btn").prop("disabled",true);
                                    }
                                }else if(multiselectCount > 0){
                                    if(enable2 == true && enable3 == true){
                                        $(".btn-group-report").find(".btn").prop("disabled",false);
                                    }else{
                                        $(".btn-group-report").find(".btn").prop("disabled",true);
                                    }
                                }else{
                                    if(enable2 == true){
                                        $(".btn-group-report").find(".btn").prop("disabled",false);
                                    }else{
                                        $(".btn-group-report").find(".btn").prop("disabled",true);
                                    }
                                }
                            }
                        });
                        e.multiselect( 'reload' );
                        e.addClass('hide');

                    }
                });

            }
        });
    },500);
  });
});
//# sourceMappingURL=maps/app.js.map
