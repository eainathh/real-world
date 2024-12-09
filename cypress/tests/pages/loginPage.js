class LoginPage {
    selectorList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: ".SignInForm-submit",
            wrongCredentialsAlert: "[data-test='signin-error']",
        }

        return selectors;

    }

    accessLoginPage() {
        cy.visit('/signin')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
    }

    buttonLogin() {
        cy.get(this.selectorList().loginButton).click()
    }

    alertWrongCredentials() {
        cy.get(this.selectorsList().wrongCredentialsAlert, {
            timeout: 10000
        }).should('be.visible');
    }

}

export default LoginPage;