export class product {

    chooseCategory(category) {
        cy
            .get('#speakersTxt').contains(category.toUpperCase()).click()
            .url().should('include', '/category/' + category + '/4')
    };

    chooseProduct(product) {
        cy
            .get('.productName').contains(product).click()
            .get('#Description', { timeout: 20000 }).find('h1')
            .should('contain', product.toUpperCase()).and('be.visible')
    };

    checkColorDefault(color) {
        cy.get('.productColor.ng-scope.' + color + '.colorSelected').should('exist')
    };

    modifieColorProduct(color) {
        cy
            .get('.productColor.ng-scope.' + color).click()
            .get('.productColor.ng-scope.' + color + '.colorSelected').should('exist')
    };

    incrementQuantityProduct(nbr) {
        for (let i = 0; i < nbr; i++) {
            cy.get('.plus').click()
                .wait(1000)
        }
        cy.nameSelecteur("quantity").should('have.value', nbr + 1)
    };

    addProduct() {
        cy.nameSelecteur("save_to_cart").click()
    };

    checkPopUp() {
        cy
            .get('#checkOutPopUp').contains('CHECKOUT').click()
            .url().should('include', '/orderPayment')
    }
}
