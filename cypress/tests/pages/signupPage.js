class SignupPage {
    selectorList() {
        return {
            firstNameInput: '#firstName',
            lastNameInput: '#lastName',
            usernameInput: '#username',
            passwordInput: '#password',
            confirmPasswordInput: '#confirmPassword',
            signUpButton: '[data-test="signup-submit"]',
        };
    }

    accessSignupPage() {
        cy.visit('http://localhost:3000/signup');
    }

    fillSignupForm(firstName, lastName, username, password, confirmPassword) {
        cy.get(this.selectorList().firstNameInput).type(firstName);
        cy.get(this.selectorList().lastNameInput).type(lastName);
        cy.get(this.selectorList().usernameInput).type(username);
        cy.get(this.selectorList().passwordInput).type(password);
        cy.get(this.selectorList().confirmPasswordInput).type(confirmPassword);
    }

    submitSignupForm() {
        cy.get(this.selectorList().signUpButton).click();
    }
}

export default SignupPage;
