class TransactionPage {
    selectorList() {
        return {
            newTransactionButton: '[data-test="nav-top-new-transaction"]',
            firstRecipient: '.css-1p823my-MuiListItem-root:nth-child(1) .MuiTypography-body1',
            amountInput: '#amount',
            descriptionInput: '#transaction-create-description-input',
            submitPaymentButton: '[data-test="transaction-create-submit-payment"]',
        };
    }

    accessTransactionPage() {
        cy.visit('http://localhost:3000/transaction/new');
    }

    selectRecipient() {
        cy.get(this.selectorList().newTransactionButton).click();
        cy.get(this.selectorList().firstRecipient).click();
    }

    fillTransactionDetails(amount, description) {
        cy.get(this.selectorList().amountInput).type(amount);
        cy.get(this.selectorList().descriptionInput).type(description);
    }

    submitPayment() {
        cy.get(this.selectorList().submitPaymentButton).click();
    }
}

export default TransactionPage;
