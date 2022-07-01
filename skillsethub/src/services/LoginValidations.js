import Validations from './Validations';

export default class SignupValidations {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    checkValidations() {
        let errors = [];
        
        //email validations
        if (!Validations.checkEmail(this.email)) {
            errors['email'] = 'please enter a Valid Email';
        }
        
        if(!Validations.checkEmpty(!this.email)){
            errors['email'] = 'Email is required';
        }
        //password Validations
        if (!Validations.minLength(this.password, 3)) {
            errors['password'] = 'Password should contain atleast 3 characters';
        }

        return errors;
    }

    static getErrorMessageFromCode(errorCode) {
        switch (errorCode) {
            case 'EMAIL_EXISTS':
                return 'Email already exists';
            case 'EMAIL_NOT_FOUND':
                return 'Email Not Found';
            case 'INVALID_PASSWORD':
                return 'Invalid Password';
            default:
                return 'Unexpected error occurred. Please try again';
        }
    }
}