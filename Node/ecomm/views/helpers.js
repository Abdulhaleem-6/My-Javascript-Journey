module.exports = {
  getError(errors, prop) {
    try {
      return errors.mapped()[prop].msg;
    } catch (err) {
      return '';
    }
  },
}

// Explanation of the getError function : 
// prop === 'email' || 'password' || 'passwordConfirmation'
// errors.mapped() === {
//password: {
// msg: 'Password too short'
// }
//passwordConfirmation: {
// msg: 'Passwords must match'
// }
// }