function tabDetails(tabId){ 

	var id;
	var x=document.getElementsByClassName("tab-content");
	for(i=0;i<x.length;i++){
		
        x[i].style.display = "none";
    
	}

		document.getElementById(tabId).style.display = "block";
	
   


}

function colorChange(taId){
	document.getElementById(taId).style.color = "yellow";
	var z=document.getElementsByClassName("tab");
	for(j=0;j<z.length;j++){
		if(j!=taId-1)
			if(z[j] && z[j].style)
			z[j].style.color="white";
	}
}

	
