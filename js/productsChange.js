	var search=document.getElementById('search');
	var searchBox=document.getElementById('searchBox');
	function borderColor(){
		searchBox.style.border="1px solid #4d4d4d";
		search.onblur=borderNoColor;
	}
	function borderNoColor(){
		searchBox.style.border="1px solid transparent";
	}
	search.onfocus=borderColor;
	

	$('.smallPic')
	.mouseover(function(){
		$(this).children('.blackk').css('display','none');
	})
	.mouseleave(function(){
		$(this).children('.blackk').css('display','block');
	})

			var gallery=document.getElementById('gallery');
			var timerId;
			var opacity;

			function timer(){
				opacity=0;
				timerId=setInterval(opa,30);
			}

			function opa(){
				opacity+=0.05;
				if(opacity>=1){
					opacity=1;
					clearInterval(timerId);
				}
				gallery.style.opacity=opacity;
			} 

			function showPic(e){
				var obj=e? e.target:event.srcElement;
				gallery.src=obj.src;
				gallery.style.opacity=0;
			}
	