var stop;

	function start(val) {
        
		if(stop!=''){

			clearInterval(stop);
    }
		switch(val) {
			case 'F':
				stop = setInterval(function() {

  document.getElementById("output").value = document.getElementById("input").value.charAt(document.getElementById("input").value.length-1)+document.getElementById("output").value;
                    
	 		document.getElementById("input").value = document.getElementById("input").value.substr(0,document.getElementById("input").value.length-1);


				}, 1000)
                
			break;
                
			clearInterval(stop);
                
			case 'R':
				stop = setInterval(function() {

					
				document.getElementById("input").value += document.getElementById("output").value.charAt(0);
				 document.getElementById("output").value = document.getElementById("output").value.substr(1);

				}, 1000)
			break;
			clearInterval(stop);
		}
	}
