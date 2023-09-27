const handleNumerics = () => {
    var a = Math.ceil(Math.random()*10);
    var b = Math.ceil(Math.random()*10);
    console.log(a,b)
    var c = a + b ;
    return c;
}

console.log(handleNumerics())
