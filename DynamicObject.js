const circle = {
    radius: 1,
    color: 'red',
    log() {
        console.log('log', this.radius);
    }
}

///add more properties in circle object
circle.price = 100;
circle.anything = "Something";
circle.draw = function () {}

//delete properties from circle 
console.log(circle);
delete circle.anything;
console.log(circle);

circle.isPresent = true;
delete circle.log;
console.log(circle);