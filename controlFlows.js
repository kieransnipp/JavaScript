// let hour = 2;

// if (hour > 1 && hour < 12){
//     console.log('Good morning')
// } else if (hour >= 12 && hour < 18){
//     console.log('Good afternoon')
// } else if (hour >= 18 && hour <= 24){
//     console.log('Good night')
// } else{
//     console.log('You entered an incorect value')
// }

///////////////// 
// a = 100;
// b = 200;
// c = 300;

// if (a > b && a > c) {
//     console.log("a is greater")
// } else
//     if (b > a && b > c) {
//         console.log("b is greater")
//     } else if (c > a && c > b) {
//         console.log("c is greater")
//     }

let role = 'vend';
switch(role){
    case 'guest':
        console.log('guest user');
        break;
        case 'admin':
            console.log('admin user');
            break;
            case 'vendor':
                console.log('vendor user');
                break;
                default:
                    console.log('no valid user')
                    break;
    }



