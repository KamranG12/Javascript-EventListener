document.getElementById('test').addEventListener('focus',function(event){
    this.value= '+994-';
})

var count=0
document.getElementById('test').addEventListener('keyup',function(event){
    count++
    if(count==2){this.value+='-'}
    if(count==5){this.value+='-'}
    if(count==7){this.value+='-'}
})

