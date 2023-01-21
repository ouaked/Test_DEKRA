export class account {
    goToCreatAccount() {
        cy
            .get('#menuUserSVGPath').click()
            .get('.PopUp').should('be.visible')

            .get('.create-new-account').contains('CREATE NEW ACCOUNT').click()
            .url().should('include', '/register')
    };

    formCreatAccount(username, email, password, passwordConfirm, firstname, lastname, phone, country, address, city, state, postal_code) {
        cy
            .nameSelecteur("usernameRegisterPage")
            .nameSelecteur("usernameRegisterPage").clear().type(username).should('have.value', username)
            .nameSelecteur("emailRegisterPage").clear().type(email).should('have.value', email)
            .nameSelecteur("passwordRegisterPage").clear().type(password).should('have.value', password)
            .nameSelecteur("confirm_passwordRegisterPage").clear().type(passwordConfirm).should('have.value', passwordConfirm)
            .nameSelecteur("first_nameRegisterPage").clear().type(firstname).should('have.value', firstname)
            .nameSelecteur("last_nameRegisterPage").clear().type(lastname).should('have.value', lastname)
            .nameSelecteur("phone_numberRegisterPage").clear().type(phone).should('have.value', phone)
            .nameSelecteur("countryListboxRegisterPage").select(country)
            .nameSelecteur("addressRegisterPage").clear().type(address).should('have.value', address)
            .nameSelecteur("cityRegisterPage").clear().type(city).should('have.value', city)
            .get('[name="state_/_province_/_regionRegisterPage"]').clear({ force: true }).type(state).should('have.value', state)
            .nameSelecteur("postal_codeRegisterPage").clear().type(postal_code).should('have.value', postal_code)
            .nameSelecteur("i_agree").check()
            .should('be.checked')
    };

    validateForm() {
        cy
            .get('#register_btnundefined').click()

    };

    checkIsConected(username) {
        cy.get('.containMiniTitle', { timeout: 20000 }).should('contain', username)
    }
}