//Factory functions produces Objects
function createCircleRadius(radius) {

    const circle = {
        radius: radius,
        draw() {
            console.log('draw it now');
        } //End draw
    }//End circle
    return circle;
} //End function createCircleRadius


function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log("draw");
        }
    }
}

const c1 = createCircleRadius(1);
console.log("Radius is " + c1.radius);
c1.draw();

const c2 = createCircleRadius(5);
console.log("And the radius =" + c2.draw);

let x = createCircle(5);
console.log("Circle radius is " + x.radius);
console.log("Circle log is " + x.log);


//Constructor function: also used to create objects
//Pascal notation = OneTwoThree

function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw', radius);
    }
}

//How to call constructor function: use new keyword
const a = new Circle(1);
console.log(a);
console.log(a.radius);
a.draw();
