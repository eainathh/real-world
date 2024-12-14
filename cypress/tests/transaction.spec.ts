import LoginPage from './pages/loginPage';
import TransactionPage from './pages/transactionPage';

const loginPage = new LoginPage();

const transactionPage = new TransactionPage();

describe('Transação de envio de dinheiro', () => {
    it('Deve realizar um pagamento com sucesso', () => {

        loginPage.accessLoginPage();
        loginPage.loginWithUser('Macie_Flatley', 's3cret');
        loginPage.buttonLogin();
        // Acessar a página de transação
        transactionPage.accessTransactionPage();

        // Selecionar o destinatário
        transactionPage.selectRecipient();

        // Preencher os detalhes da transação
        transactionPage.fillTransactionDetails('$10', 'teste');

        // Submeter o pagamento
        transactionPage.submitPayment();

         // Verificar que a transação foi realizada com sucesso
         transactionPage.verifyTransactionSuccess();

        
    });

    describe('Enviar dinheiro com saldo insuficiente', () => {
        it.only('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
            loginPage.accessLoginPage();
            loginPage.loginWithUser('Macie_Flatley', 's3cret');
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
            // Exemplo: cy.contains('Transação realizada com sucesso').should('be.visible');        });
        });
    });
});
