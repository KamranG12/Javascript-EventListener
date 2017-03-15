document.getElementById('test').addEventListener('focus',function(event){
    this.value="+994-";
})

document.getElementById('test').addEventListener('keyup',function(event){
    this.value.length
  if (this.value.length ==7 || this.value.length==11 || this.value.length==14) {
      this.value+= "-";
  }
})






