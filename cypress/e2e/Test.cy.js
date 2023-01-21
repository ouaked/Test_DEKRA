import { account } from '../actions/account'
import { product } from '../actions/product'
import { checkout } from '../actions/checkout';

const actionAccount = new account();
const actionProduct = new product();
const actionCheckout = new checkout();

/// <reference types="cypress" />

context('Actions', () => {

    const data = require('../fixtures/data.json')
    const info = data.infos
    const newInfo = data.new_address
    const products = data.products
    const payment = data.payment

    let email = `toto+qa_${Math.floor(Math.random() * 1000000000)}@gmail.com`;
    let username = `toto${Math.floor(Math.random() * 1000000000)}`;

    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('https://www.advantageonlineshopping.com/')
    })


    it('Tunnel de commande', () => {

        actionAccount.goToCreatAccount()
        actionAccount.formCreatAccount(username, email, info.password, info.password, info.firstname, info.lastname, info.phone, info.country, info.address, info.city, info.state, info.postal_code)
        actionAccount.validateForm();
        actionAccount.checkIsConected(username)
        actionProduct.chooseCategory(products.category);
        actionProduct.chooseProduct(products.name)
        actionProduct.checkColorDefault(products.colorDefault);
        actionProduct.modifieColorProduct(products.Color);
        actionProduct.incrementQuantityProduct(1);
        actionProduct.addProduct();
        actionProduct.checkPopUp();
        actionCheckout.checkmodulesShippingAndPayment('SHIPPING DETAILS', 'PAYMENT METHOD');
        actionCheckout.checkTotalValue(589.98);
        actionCheckout.changeAddress(newInfo.city, newInfo.address, newInfo.postal_code)
        actionCheckout.ChoosePaymentMethod(payment.paymentMethod);
        actionCheckout.checkNotice('Notice', 'This is a demo site. Do not use real data.');
        actionCheckout.insertUsername("saf");
        actionCheckout.checkMessageError(['- Use 5 character or longer']);
        actionCheckout.insertUsername("SafePay");
        actionCheckout.insertPassword('123');
        actionCheckout.checkMessageError(["- Use 4 character or longer", "- Including at least one lower letter", "- Including at least one upper letter "]);
        actionCheckout.insertPassword('abdce');
        actionCheckout.checkMessageError(["- Including at least one upper letter ", "- Including at least one number"]);
        actionCheckout.insertPassword('Abdc7');
        actionCheckout.CheckBtnAndClick();
        actionCheckout.checkSuccesMessage("Thank you for buying with Advantage");

    })

})
