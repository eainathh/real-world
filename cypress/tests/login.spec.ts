import LoginPage from './pages/loginPage'; 

const loginPage = new LoginPage();

describe('Login com sucesso', () => {
    it.only('Deve fazer login com um usuário válido', () => {
        loginPage.accessLoginPage();
        loginPage.loginWithUser('teste', 'teste');
        loginPage.buttonLogin();
    });
});

describe('Tentar fazer login com credenciais inválidas', () => {
  it.only('Deve fazer login com um usuário válido', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser('teste1', 'teste1');
    loginPage.buttonLogin();
});
});