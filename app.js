let text = document.getElementById("text");
// Input function
function apply1(){
    let input = document.getElementById("input1").value;
    text.style.fontSize = input + 'px';
}
function apply2(){
    let input = document.getElementById("input2").value;
    text.style.color = input;
}
function apply3(){
    let input = document.getElementById("input3").value;
    text.style.backgroundColor = input;
}

//Icon function
function bold(){
   if(text.style.fontWeight === 'bold'){
    text.style.fontWeight = 'normal'
   }else{
    text.style.fontWeight = 'bold'
   }
}
function italic(){
  if(text.style.fontStyle === 'italic'){
    text.style.fontStyle = 'normal'
  }else{
    text.style.fontStyle = 'italic'
  }
}
function capital(){
    text.style.textTransform = 'capitalize'
}
function upper(){
  text.style.textTransform = 'uppercase'
}
function lower(){
  text.style.textTransform = 'lowercase'
}
function under(){
 if(text.style.textDecoration === 'underline'){
  text.style.textDecoration = 'none'
 }else{
  text.style.textDecoration = 'underline'
 }
}
function textRight(){
 text.style.textAlign = 'right'
}
function textLeft(){
  text.style.textAlign = 'left'
}
function textUp(){
 text.style.textAlign = 'center'
}
function border1(){
    text.style.border = '6px solid #199781'
}
function over(){
  if(text.style.textDecoration === 'line-through'){
    text.style.textDecoration = 'none'
  }else{
    text.style.textDecoration = 'line-through'
  }
}
function textShadow(){
  text.style.textShadow = '2px 4px 8px black';
}
function font(){
  if(text.style.fontFamily === 'sans-serif'){
    text.style.fontFamily = ''
  }else{
    text.style.fontFamily = 'sans-serif'
  }
}

// TextCount function
function wordCount(){
  var span2 = document.getElementById("span2");
  var textSplit = text.value.split(" ").length;
  span2.innerHTML = "score: " + textSplit;
}
function letterCount(){
  var span3 = document.getElementById("span3");
  var textSplit = text.value.split("").length;
  span3.innerHTML = "score: " + textSplit;
}

// function plus(){
//     var count = ++document.getElementById("text").value == count;
// }