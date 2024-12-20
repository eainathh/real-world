import SignupPage from '../pages/signupPage';

const signupPage = new SignupPage();

describe('Criação de conta', () => {
    it('Deve criar uma conta com sucesso', () => {
        // Acessar a página de criação de conta
        signupPage.accessSignupPage();

        // Preencher o formulário de inscrição
        signupPage.fillSignupForm(
            'teste',      // Primeiro Nome
            'teste',      // Sobrenome
            'teste',      // Nome de Usuário
            'teste',      // Senha
            'teste'       // Confirmação da Senha
        );

        // enviar o formulário
        signupPage.submitSignupForm();

       
    });
});
