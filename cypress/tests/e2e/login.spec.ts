import LoginPage from '../pages/loginPage';

const loginPage = new LoginPage();

describe('Login com sucesso', () => {
    it('Deve fazer login com um usuário válido', () => {
        loginPage.accessLoginPage();
        loginPage.loginWithUser('Silas.Spencer', 's3cret');
        loginPage.buttonLogin();
    });
});

describe('Tentar fazer login com credenciais inválidas', () => {
    it('Deve fazer login com um usuário válido', () => {
        loginPage.accessLoginPage();
        loginPage.loginWithUser('teste1', 'teste1');
        loginPage.buttonLogin();
        loginPage.alertWrongCredentials()
    });

  

});