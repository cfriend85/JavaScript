let number = 10;
let string = 'Howdy';

number = 20; // number = 'Twenty' would cause an error because number is typecast on instantiation.
string = 'Partner'; // string = 100 would case the same typecast error.


let guess; // declares variable as type "any" and allows reassignment with any other type.

guess = 'Red';
guess = '21';

let phoneNumber : string; // declares a variable with no value but assigns it a type that all changes of this variable must adhere to.

if (Math.random() > 0.5) {
    phoneNumber = '+61770102062';
} else {
    phoneNumber = '7167762323'; // If this was a number type instead of a string, it would produce an error about type.
}