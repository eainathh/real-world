import CreateAccountPage from '../pages/createAccountPage';
const Chance = require('chance');

const chance = new Chance();
const createAccountPage = new CreateAccountPage();



// Automação do Caso de Teste: Registro de novo usuário com sucesso.

describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    createAccountPage.accessSignup()
    createAccountPage.fillPersonalInfo(chance.first(), chance.last(), chance.string({ length: 5 }))
    createAccountPage.fillPasswordInfo()
    createAccountPage.submitForm()
    createAccountPage.verifyRedirectToLogin()
    // createAccountPage.verifyCreateAccountButtonIsDisabled()
  });
});


// Automação do Caso de Teste: Tentar registrar um novo usuário com informações incompletas.

describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    createAccountPage.accessSignup()
    createAccountPage.fillPersonalInfo(chance.first(), chance.last(), '$' )
    createAccountPage.fillPasswordInfo('1');
    createAccountPage.submitForm()
  });
});