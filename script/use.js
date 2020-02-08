$(document).ready(function(){
	$('.sendMail').on('click', function(){
		var error = new Array();
		if (error == "") {
			$.ajax({
				type: "POST",
				url: "sendMail.php",
				data:
				{
					userName: $('#userName').val(),
					userEmail: $('#userEmail').val(),
					userPhone: $('#userPhone').val(),
					userComment: $('#userComment').val()
				},
				success: function(data) {
					$('#userName').val('');
					$('#userEmail').val('');
					$('#userPhone').val('');
					$('#userComment').val('');
					
					$('#report-3').show();
					$('#report-3').html(data);
					
					setTimeout(function() {
						$('#report-3').hide();
					}, 3000);
				},
				error: function(data){
					$('#report-3').show();
					$('#report-3').html();

					setTimeout(function() {
						$('#report-3').hide();
					}, 3000);
				},
			});
		} else {
			for (var i = 0; i<error.length; ++i) {
				$('#report-3').show();
				$("#report-3").append(error[i]);

				setTimeout(function() {
					$('#report-3').hide();
				}, 3000);
			}
		}
	});
});