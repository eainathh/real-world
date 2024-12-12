import LoginPage from './pages/loginPage';
import TransactionPage from './pages/transactionPage';

const loginPage = new LoginPage();

const transactionPage = new TransactionPage();

describe('Transação de envio de dinheiro', () => {
    it('Deve realizar um pagamento com sucesso', () => {
        
        loginPage.accessLoginPage();
        loginPage.loginWithUser('Pat_Beer77', 's3cret');
        loginPage.buttonLogin();
        // Acessar a página de transação
        transactionPage.accessTransactionPage();

        // Selecionar o destinatário
        transactionPage.selectRecipient();

        // Preencher os detalhes da transação
        transactionPage.fillTransactionDetails('$10', 'teste');

        // Submeter o pagamento
        transactionPage.submitPayment();

        // Verificar o sucesso (adicione aqui uma verificação adicional se necessário)
        // Exemplo: cy.contains('Transação realizada com sucesso').should('be.visible');
    });
});
