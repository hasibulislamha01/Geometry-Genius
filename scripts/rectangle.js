function rectangleArea(){
    console.log('talking from the inside of a function')
    const width = document.getElementById('rectangle-width').value
    const height = document.getElementById('rectangle-height').value 
    console.log(width, height)
    const rectangleArea = width * height;
    console.log('area of the rectangl is ', rectangleArea)
    const area = document.getElementById('rectangel-area-result').innerText=rectangleArea;  
}