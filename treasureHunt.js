var count = 10
var ghost = Math.ceil(Math.random() * 10)
var bomb = Math.ceil(Math.random() * 10)
while (bomb === ghost){
  bomb = Math.ceil(Math.random() * 10)
}

//var answer1 = ghost
//var answer2 = bomb

const locationCheck = (location) =>{
  count --

  //alert("I WAS CLICKED")

    document.getElementById("currentCount").innerHTML = count
    //alert("Counting")
    if (count == 0){
      alert ("Game Over")
    }
    else{
      document.getElementById(location).innerHTML = "<img  src=openBook.png>"
    if (location === ghost ){
        document.getElementById(location).innerHTML = "<img  src=trap.png>"
        alert("You caught the Ghost! You win!")
    } else if (location === bomb ) {
        document.getElementById(location).innerHTML = "<img  src=slimer.png>"
        alert("You've Been Slimed. You lose.")
    }
  }
  }
console.log("Ghost", ghost)
console.log("Bomb", bomb)
