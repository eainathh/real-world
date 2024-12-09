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
        cy.visit('http://localhost:3001/signin')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.passwordField().passwordField).type(password)
    }

    buttonLogin() {
        cy.get(this.selectorList().loginButton).click()
    }

    alertWrongCredentials() {
        cy.get(this.selectorList().loginButton).click()
    }

}