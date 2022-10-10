for (var nr = 1; nr <= 100; nr++) {
    if (nr % 15 == 0){
        console.log("FizzBuzz")
    }
    else if (nr % 5 == 0){
        console.log("Buzz")
    }
    else if (nr % 3 == 0){
        console.log("Fizz")
    }
    else console.log(nr)
}