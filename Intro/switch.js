let groceryItem = 'papaya';
// groceryItem = 'tomato'

switch (groceryItem) {
    case 'tomato':
        console.log('Tomatoes are $0.49');
        break;
    case 'lime':
        console.log('Limes are $1.49');
        break;
    case 'papaya':
        console.log('Papayas are $1.29');
        break;
    default:
        console.log('Invalid item');
        break;
}

const getLetter = (s) => {
    let letter = ""
    switch (true) {
        case "aeiou".includes(s[0]):
            letter = "A"
            break;
        case "bcdfg".includes(s[0]):
            letter = "B"
            break;
        case "hjklm".includes(s[0]):
            letter = "C"
            break;
        default:
            letter = "D"
            break;
    }
    
    return letter;
}