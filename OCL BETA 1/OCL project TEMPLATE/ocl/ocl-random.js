function random(){
this.randomize=(min, max) =>{
  var number;
  number = Math.floor( Math.random * (max-min+1) )+min;
  return number;

}
}
