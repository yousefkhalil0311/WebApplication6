var username = 'Yousef';
var password = 'password';

function verify(x, y) {

    if (x == username && y == password) {
        return 'Verification Successful';
    } else {
        return 'Failed Verification';
    }
}