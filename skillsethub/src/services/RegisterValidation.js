import Validations from './Validations';

export default class RegisterValidation {
    constructor(email, password,firstName,lastName,contact,address,clientType) {
        this.email = email;
        this.password = password;
        this.firstName=firstName;
        this.lastName = lastName;
        this.contact = contact;
        this.address = address;
        this.clientType = clientType;
        /*this.skillDesc =  skillDesc;
        this.programmingLanguage = programmingLanguage;
        this.experience = experience;
        this.jobTitle = jobTitle;*/
    }

    checkValidations() {
        let errors = [];

        //firstName Validations
        if(!Validations.checkEmpty(!this.firstName)){
            errors['firstName'] = 'First Name is required';
        }
        
        //lastName Validations
        if(!Validations.checkEmpty(!this.lastName)){
            errors['lastName'] = 'Last Name is required';
        }

        //lastName Validations
        if(!Validations.checkEmpty(!this.lastName)){
            errors['lastName'] = 'Last Name is required';
        }
        //email validations
        if (!Validations.checkEmail(this.email)) {
            errors['email'] = 'Please enter a Valid Email';
        }
        if(!Validations.checkEmpty(!this.email)){
            errors['email'] = 'Email is required';
        }

        //contact validations
        if(!Validations.checkEmpty(!this.contact)){
            errors['contact'] = 'Phone Number is Required is required';
        }

        //Address validations
        if(!Validations.checkEmpty(!this.address)){
            errors['address'] = 'address is required';
        }

        //Clientype Validations
        if(!Validations.checkEmpty(!this.clientType)){
            errors['clientType'] = 'Type of a User is required';
        }

        //password Validations
        if (!Validations.minLength(this.password, 6)) {
            errors['password'] = 'password should contain atleast 6 / more characters';
        }
        return errors;
    }

}