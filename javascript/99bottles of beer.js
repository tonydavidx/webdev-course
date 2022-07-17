function beer() {
    for (var i = 99; i >= 2;) {
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
        i--
        console.log("Take one down and pass it around, " + i + " bottles of beer on the wall.")
        if (i === 1) {
            console.log(i + " bottle of beer on the wall, " + i + " bottle of beer.")
            console.log("Take one down and pass it around, no more bottles of beer on the wall.")
        }
    }
}
beer();