//Factory functions produces Objects
function createCircleRadius(radius){
    
    const circle = {
        radius : radius,
        draw(){
            console.log('draw it now');
        } //End draw
    }//End circle
    return circle;
} //End function createCircleRadius


function createCircle(radius){
    return {
        radius,
        draw(){
            console.log("draw");
        }
    }
}

const c1 = createCircleRadius(1);
console.log("Radius is "+c1.radius);
c1.draw();

const c2 = createCircleRadius(5);
console.log("And the radius ="+c2.draw);

let x = createCircle(5);
console.log("Circle radius is "+x.radius);
console.log("Circle log is "+x.log);
  