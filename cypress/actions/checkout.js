export class checkout {

    checkmodulesShippingAndPayment(shipping, payment) {
        cy
            .get('.roboto-regular.ng-binding.selected').contains(shipping).should('be.visible')
            .get('.roboto-regular.ng-binding').contains(payment).should('be.visible')
    };

    checkTotalValue(value) {
        cy.get('.totalValue').should('contain', "$" + value)
    };

    changeAddress(address, city, postal_code) {
        cy
            .get('.ng-scope').contains('Edit shipping details').click()
            .get('h6').contains('Recipient details').should('be.visible')
            .nameSelecteur("city").clear().type(city)
            .nameSelecteur("address").clear().type(address)
            .nameSelecteur("postal_code").clear().type(postal_code)
            .get('#next_btnundefined').click()
    };

    ChoosePaymentMethod(MethodPayment) {
        cy
            .get('.selected').should('contain', '2. PAYMENT METHOD')

            //Choisir SafePayment comme méthode de paiement
            .nameSelecteur(MethodPayment).check()
            .should('be.checked')
    };

    checkNotice(text, message) {
        cy.get('.notice').first().within(() => {
            cy
                .get('h4').contains(text).should('be.visible')
                .get('p').contains(message).should('be.visible')
        })
    };

    insertUsername(username) {
        cy.nameSelecteur("safepay_username").clear().type(username)
    };

    tab = [];
    checkMessageError(tab) {
        cy.get('[style="display: list-item;"]').each(($el, index, $list) => {
            cy.get('[style="display: list-item;"]').eq(index).contains(tab[index]).should('be.visible')
        })
    };

    insertPassword(password) {
        cy.nameSelecteur("safepay_password").clear().type(password)
    };

    CheckBtnAndClick(){
        cy.get('#pay_now_btn_SAFEPAY').should('not.have.class', 'invalid').click()
    };

    checkSuccesMessage(message){
        cy.get('#orderPaymentSuccess').find('h2').contains(message).should('be.visible')
    }

}

