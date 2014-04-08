function showModal(modalUrl) {
	var modalView = new steroids.views.WebView(modalUrl);
	steroids.modal.show(modalView);
}

function on_resume() {
	
  document.addEventListener("resume", onResume, false);
  
  function onResume() {
          
		  alert('Resume Fired');
		  showModal("modal.html");
		  
		  //setTimeout(function() { showModal("modal.html"); }, 500); //#### Apply Modal Fix
		  
  }
  

}

function showPage(pageUrl) {
	
	steroids.drawers.hideAll();

    var webView = new steroids.views.WebView(pageUrl);
    var pageFadeIOS = new steroids.Animation ({
      transition: "fade",
      duration: 0.1,
      curve: "linear",
      reversedTransition: "fade",
      reversedDuration: 0.1,
      reversedCurve: "easeIn"
    });
	
	steroids.layers.push({
		view: webView, 
		keepLoading: true, 
		navigationBar: false, 
		tabBar: false,
		animation: pageFadeIOS
	  }, {
	  onSuccess: function() {
	   
	  localStorage.setItem('TmpWebView', pageUrl);
	   
	  },
	  onFailure: function(error) {
	  //alert("Could not push the view: " + error.errorDescription);
      }
	  
    });
    
	alert('Show Page');
	
}

function login() {
        
		//showPage("dashboard.html");
		
		$("#login").click(function() {
            
			alert('Modal Close');
			steroids.modal.hide();
			showPage("dashboard.html");
            
        });
}