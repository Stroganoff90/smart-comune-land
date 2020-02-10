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

	var $page = $('html, body');
	$('a[href*="#"].navbar-item').click(function() {
	    $page.animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 400);
	    return false;
	});
});

function hideOpen(){
  document.getElementById("hide_menu").style.display = "block";
};
function hideClose(){
  document.getElementById("hide_menu").style.display = "none";
};

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" curr-sity", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " curr-sity";
}