class CreateAccountPage {
    selectorsList() {
        const selectors = {
            firstNameField: "#firstName",
            lastNameField: "#lastName",
            usernameField: "#username",
            passwordField: "#password",
            confirmPasswordField: "#confirmPassword",
            createAccountButton: ".MuiButton-contained",
        }

        return selectors;
    }

    accessSignup() {
        cy.visit('/signup')
    }


    fillPersonalInfo(firstName, lastName, username) {
        cy.get(this.selectorsList().firstNameField).type(firstName);
        cy.get(this.selectorsList().lastNameField).type(lastName);
        cy.get(this.selectorsList().usernameField).type(username);
    }

    fillPasswordInfo(password) {
        
        const generatedPassword = chance.string({ length: 12, pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()' });


        cy.get(this.selectorsList().passwordField).type(generatedPassword);
        cy.get(this.selectorsList().confirmPasswordField).type(generatedPassword);
    }

    submitForm() {
        cy.get(this.selectorsList().createAccountButton)
            .should('not.be.disabled') // Espera o botão ser habilitado
            .click();
    }

    verifyRedirectToLogin() {
        cy.url().should('include', '/signin');
    }

    verifyCreateAccountButtonIsDisabled() {
        cy.get(this.selectorsList().createAccountButton)
            .should('be.disabled');
    }

}

export default CreateAccountPage;
