$(document).ready(function () {

    var headerH = 65;
    var docH = window.innerHeight - headerH;
    var docW = window.innerWidth;
    
    if (docW < 600) {
        $("#beer").css({ 'height': (docH/3) + 'px', 'width': docW + 'px' });
        $("#brothers").css({ 'height': (docH/3) + 'px', 'width': docW + 'px' });
        $("#blog").css({ 'height': (docH/3) + 'px', 'width': docW + 'px' });
    } else if (docW > 601 && docW < 768) {
        $("#beer").css({ 'height': docH + 'px', 'width': (docW/2) + 'px'  });
        $("#brothers").css({ 'height': (docH/2) + 'px', 'width': (docW/2) + 'px' });
        $("#blog").css({ 'height': (docH/2) + 'px', 'width': (docW/2) + 'px' });
    } else if (docW > 769 && docW < 992) {
        $("#beer").css({ 'height': docH + 'px', 'width': (docW/5*3) + 'px'  });
        $("#brothers").css({ 'height': (docH/2) + 'px', 'width': (docW/5*2) + 'px' });
        $("#blog").css({ 'height': (docH/2) + 'px', 'width': (docW/5*2) + 'px' });
    } else if (docW > 993) {
        $("#beer").css({ 'height': docH + 'px', 'width': (docW/3) + 'px'  });
        $("#brothers").css({ 'height': docH + 'px', 'width': (docW/3) + 'px' });
        $("#blog").css({ 'height': docH + 'px', 'width': (docW/3) + 'px' });
    }
    
    
    // =====
    // Execute this JS after page content has loaded (images, videos, etc):
    // =====
    $(window).bind("load", function() {

        $(window).resize(function() {
        	
            var headerH = 65;
            var docH = window.innerHeight - headerH;
            var docW = window.innerWidth;
            
            if (docW < 600) {
                $("#beer").css({ 'height': (docH/3) + 'px', 'width': docW + 'px' });
                $("#brothers").css({ 'height': (docH/3) + 'px', 'width': docW + 'px' });
                $("#blog").css({ 'height': (docH/3) + 'px', 'width': docW + 'px' });
            } else if (docW > 601 && docW < 768) {
                $("#beer").css({ 'height': docH + 'px', 'width': (docW/2) + 'px'  });
                $("#brothers").css({ 'height': (docH/2) + 'px', 'width': (docW/2) + 'px' });
                $("#blog").css({ 'height': (docH/2) + 'px', 'width': (docW/2) + 'px' });
            } else if (docW > 769 && docW < 992) {
                $("#beer").css({ 'height': docH + 'px', 'width': (docW/5*3) + 'px'  });
                $("#brothers").css({ 'height': (docH/2) + 'px', 'width': (docW/5*2) + 'px' });
                $("#blog").css({ 'height': (docH/2) + 'px', 'width': (docW/5*2) + 'px' });
            } else if (docW > 993) {
                $("#beer").css({ 'height': docH + 'px', 'width': (docW/3) + 'px'  });
                $("#brothers").css({ 'height': docH + 'px', 'width': (docW/3) + 'px' });
                $("#blog").css({ 'height': docH + 'px', 'width': (docW/3) + 'px' });
            }
            
        });
    
    });
	
});
