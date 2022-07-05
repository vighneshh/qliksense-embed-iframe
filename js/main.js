function loadIframe(iframeName, url) {
    var $iframe = $('#' + iframeName);
    if ( $iframe.length ) {
        $iframe.attr('src',url);    // here you can change src
        return false;
    }
    return true;
}

(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');

       $('li').click(function() {
                $('li.active').removeClass("active");
                $(this).addClass("active");
            });

      $("#hub").click(function(){
      	 // Qlik Sense Hub Iframe 
     loadIframe('frame1','http://localhost:4848/hub/my/work')
    });


      	 // Qlik Sense Specific App Overview Iframe
      $("#appoverview").click(function(){
     loadIframe('frame1','http://localhost:4848/sense/app/C%3A%5CUsers%5Cvighn%5COneDrive%5CDocuments%5CQlik%5CSense%5CApps%5CHuman%20Capital%20Management.qvf/overview')
    });


      // Qlik Sense Specific Sheet Iframe
       $("#sheet").click(function(){
     loadIframe('frame1','http://localhost:4848/single/?appid=C%3A%5CUsers%5Cvighn%5COneDrive%5CDocuments%5CQlik%5CSense%5CApps%5CHuman%20Capital%20Management.qvf&sheet=GZGbMWW&opt=ctxmenu,currsel')
    });

        // Qlik Sense Specific Chart Iframe
        $("#chart").click(function(){
     loadIframe('frame1','http://localhost:4848/single/?appid=C%3A%5CUsers%5Cvighn%5COneDrive%5CDocuments%5CQlik%5CSense%5CApps%5CHuman%20Capital%20Management.qvf&obj=jwBw&opt=ctxmenu,currsel')
    });



  });

})(jQuery);
