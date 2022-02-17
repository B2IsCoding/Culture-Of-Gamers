var textOverImages=document.querySelectorAll(".onClickTextOverImage div");
var previousTextOverImage;

for(var i=0;i<textOverImages.length;i++){
  textOverImages[i].onclick=function(){
    var classes=this.classList;
    if(classes.contains("show")){
      classes.remove("show")
    }
    else{
      if(previousTextOverImage!=null)
      previousTextOverImage.classList.remove("show");
      previousTextOverImage=this;
      classes.add("show");
    }
    
  }
}