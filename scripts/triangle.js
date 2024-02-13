// step 1: get base and height from the input field

function triangleArea(){
    console.log('i am inside a function')
    const triangleBase = document.getElementById('triangle-base').value
    const triangleHeight = document.getElementById('triangle-height').value
    console.log(triangleBase,triangleHeight)
    const triangleArea = .5 * triangleBase * triangleHeight ;
    console.log('Area of the triangle is : ',triangleArea)

    // display triangle area
    const area = document.getElementById('area-result').innerText=triangleArea;
}