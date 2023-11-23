describe('home page', ()=>{
    
    beforeEach(function() {
        cy.viewport(1440, 900)
    })

        it('CT001 - Validar registro com dados válidos', () => {
            cy.visit('https://advantageonlineshopping.com/#/');
            cy.get('.logoDemo').should("be.visible");
            cy.get("#menuUserLink").click();
            cy.get(".create-new-account").should("be.visible").click();
            cy.get(':nth-child(2) > [a-hint="Username"] > .inputContainer > .ng-pristine').type("JoaoSilva");
            cy.get('[sec-name="userEmail"] > .inputContainer > .ng-pristine').type("Joao@Joao.com");
            cy.get(':nth-child(3) > [a-hint="Password"] > .inputContainer > .ng-pristine').type("Pe123456");
            cy.get('[a-hint="Confirm password"] > .inputContainer > .ng-pristine').type("Pe123456");
            cy.get('[sec-name="userFirstName"] > .inputContainer > .ng-valid').type("Joao");
            cy.get('[sec-name="userLastName"] > .inputContainer > .ng-pristine').type("Silva")
            cy.get(':nth-child(2) > :nth-child(3) > .ng-isolate-scope > .inputContainer > .ng-pristine').type("11936564059");
            cy.get('[sec-name="userCountry"] > .inputContainer > .ng-pristine').select('Brazil');
            cy.get('[sec-name="userCity"] > .inputContainer > .ng-pristine').type("Osasco");
            cy.get('[sec-name="userAdress"] > .inputContainer > .ng-pristine').type("Rua Morrinhos");
            cy.get('[sec-name="userState"] > .inputContainer > label').type("Sao Paulo");
            cy.get('#formCover > :nth-child(3) > :nth-child(4) > .ng-isolate-scope > .inputContainer > .ng-pristine').type("06436-860")
            cy.get('[sec-name="registrationAgreement"] > .inputContainer > .ng-pristine').check();
            cy.get('#register_btn').click();
            cy.get('.desktop-handler > :nth-child(3)').invoke('text').as('JoaoSilva');
         });
        it('CT002 - Validar registro do email com dados em branco(negativo)', ()=>{
            cy.visit('https://advantageonlineshopping.com/#/');
            cy.get(".logoDemo").should("be.visible");
            cy.get("#menuUserLink").click();
            cy.get(".create-new-account").should("be.visible").click();
            cy.get(':nth-child(2) > [a-hint="Username"] > .inputContainer > .ng-pristine').type("PedroRenato");
            cy.get('[sec-name="userEmail"] > .inputContainer > .ng-pristine').type(" ");
            cy.get('label.invalid').invoke('text').as('Email field is required');
            cy.get(':nth-child(3) > [a-hint="Password"] > .inputContainer > .ng-pristine').type("Pe123456");
            cy.get('[a-hint="Confirm password"] > .inputContainer > .ng-pristine').type("Pe123456");
            cy.get('[sec-name="userFirstName"] > .inputContainer > .ng-valid').type("Pedro");
            cy.get('[sec-name="userLastName"] > .inputContainer > .ng-pristine').type("Renato");
            cy.get(':nth-child(2) > :nth-child(3) > .ng-isolate-scope > .inputContainer > .ng-pristine').type("11936564059");
            cy.get('[sec-name="userCountry"] > .inputContainer > .ng-pristine').select('Brazil');
            cy.get('[sec-name="userCity"] > .inputContainer > .ng-pristine').type("Osasco");
            cy.get('[sec-name="userAdress"] > .inputContainer > .ng-pristine').type("Rua Antonio");
            cy.get('[sec-name="userState"] > .inputContainer > label').type("Sao Paulo");
            cy.get('#formCover > :nth-child(3) > :nth-child(4) > .ng-isolate-scope > .inputContainer > .ng-pristine').type("06246-090")
            cy.get('[sec-name="registrationAgreement"] > .inputContainer > .ng-pristine').check();
            cy.get('.sec-sender-a.ng-scope.invalid').should('be.visible');
         })
        it('CT003 - Validar registro com dados validos existente(negativo)', ()=>{
            cy.visit('https://advantageonlineshopping.com/#/');
            cy.get(".logoDemo").should("be.visible");
            cy.get("#menuUserLink").click();
            cy.get(".create-new-account").should("be.visible").click();
            cy.get(':nth-child(2) > [a-hint="Username"] > .inputContainer > .ng-pristine').type("JoaoSilva");
            cy.get('[sec-name="userEmail"] > .inputContainer > .ng-pristine').type("Joao@Joao.com");
            cy.get(':nth-child(3) > [a-hint="Password"] > .inputContainer > .ng-pristine').type("Pe123456");
            cy.get('[a-hint="Confirm password"] > .inputContainer > .ng-pristine').type("Pe123456");
            cy.get('[sec-name="userFirstName"] > .inputContainer > .ng-valid').type("Joao");
            cy.get('[sec-name="userLastName"] > .inputContainer > .ng-pristine').type("Silva");
            cy.get(':nth-child(2) > :nth-child(3) > .ng-isolate-scope > .inputContainer > .ng-pristine').type("11936564059");
            cy.get('[sec-name="userCountry"] > .inputContainer > .ng-pristine').select('Brazil');
            cy.get('[sec-name="userCity"] > .inputContainer > .ng-pristine').type("Osasco");
            cy.get('[sec-name="userState"] > .inputContainer > label').type("Sao Paulo");
            cy.get('#formCover > :nth-child(3) > :nth-child(4) > .ng-isolate-scope > .inputContainer > .ng-pristine').type("06436-860")
            cy.get('[sec-name="userAdress"] > .inputContainer > .ng-pristine').type("Rua Morrinhos");
            cy.get('[sec-name="registrationAgreement"] > .inputContainer > .ng-pristine').check();
            cy.get('#register_btn').click();
            cy.get('div.center > .center').should('be.visible');
            cy.get('div.center > .center').invoke('text').as('User name already exists')
            
          })
        it('CT004 - Validar login com dados validos', ()=>{
            cy.visit('https://advantageonlineshopping.com/#/');
            cy.get(".logoDemo").should("be.visible");
            cy.get("#menuUserLink").click();
            cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('JoaoSilva');
            cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type('Pe123456');
            cy.get('#sign_in_btn').click();
            cy.get('.desktop-handler > :nth-child(3)').should('be.visible');
            cy.get('.desktop-handler > :nth-child(3)').invoke('text').as('JoaoSilva');
          })
        it('CT005 - Validar login com senha inválida(negativo)', ()=>{
            cy.visit('https://advantageonlineshopping.com/#/');
            cy.get(".logoDemo").should("be.visible");
            cy.get("#menuUserLink").click();
            cy.get(".create-new-account").should("be.visible");
            cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('JoaoSilva');
            cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type('Pe654321');
            cy.get('#sign_in_btn').click();
            cy.get('#signInResultMessage').should('be.visible');
            cy.get('#signInResultMessage').invoke('text').as('Incorrect user name or password.')
          })
        it('CT006 - Validar login com nome de usuario em branco(negativo)', ()=>{
            cy.visit('https://advantageonlineshopping.com/#/');
            cy.get(".logoDemo").should("be.visible");
            cy.get("#menuUserLink").click();
            cy.get(".create-new-account").should("be.visible");
            cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type(" ");
            cy.get('label.invalid').invoke('text').as('Username field is required');
            cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type('Pe654321');
            cy.get('#sign_in_btn').invoke('text').as('SIGN IN');
            cy.get('label.invalid').invoke('text').as('Username field is required');
            
        })
        it('CT007 - Validar login com senha em branco(negativo)',()=>{
            cy.visit('https://advantageonlineshopping.com/#/');
            cy.get(".logoDemo").should("be.visible");
            cy.get("#menuUserLink").click();
            cy.get(".create-new-account").should("be.visible");
            cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('JoaoSilva');
            cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').click();
            cy.get('label.invalid').invoke('text').as('Password field is required')
            cy.get('.sec-sender-a.ng-scope.invalid').should("be.visible");
        })
        it('CT012 - Validar produto no carrinho', ()=>{
            cy.visit('https://advantageonlineshopping.com/#/');
            cy.get(".logoDemo").should("be.visible");
            cy.get("#menuUserLink").click();
            cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('JoaoSilva');
            cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type('Pe123456');
            cy.get('#sign_in_btn').click();
            cy.get('.desktop-handler > :nth-child(3)').should('be.visible');
            cy.get(':nth-child(8) > .menu').click()
            cy.get('#laptopsTxt').click()
            cy.get('.categoryTitle').should('be.visible')
            cy.get(':nth-child(1) > :nth-child(4) > .productName').click()
            cy.get('.BLACK').click()
            cy.get('.e-sec-plus-minus > :nth-child(2) > .ng-pristine').type('3')
            cy.get('#Description > .roboto-regular').should('be.visible')
            cy.get(':nth-child(10) > .attr').should('be.visible')
            cy.get('.fixedBtn > .roboto-medium').click()
            cy.get('#product > :nth-child(2) > a > :nth-child(2)').should('be.visible', 3)
            cy.get('a > h3.ng-binding').should('be.visible')
            cy.get('a > :nth-child(3) > .ng-binding').should('be.visible')
            cy.get('tfoot > :nth-child(1) > :nth-child(2) > .roboto-medium').should('be.visible')
        })
        it('CT013 - Remover produto do carrinho', ()=> {
            cy.visit('https://advantageonlineshopping.com/#/');
            cy.get(".logoDemo").should("be.visible");
            cy.get("#menuUserLink").click();
            cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('JoaoSilva');
            cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type('Pe123456');
            cy.get('#sign_in_btn').click();
            cy.get('#menuCart').click()
            cy.get('.remove').click()
            cy.get('.bigEmptyCart > .roboto-bold').should('be.visible')
            
        })
        it('CT014 - Validar quantidade do produto (Negativo)', ()=>{
            cy.visit('https://advantageonlineshopping.com/#/');
            cy.get(".logoDemo").should("be.visible");
            cy.get("#menuUserLink").click();
            cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('JoaoSilva');
            cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type('Pe123456');
            cy.get('#sign_in_btn').click();
            cy.get('.desktop-handler > :nth-child(3)').should('be.visible');
            cy.get(':nth-child(8) > .menu').click()
            cy.get('#laptopsTxt').click()
            cy.get('.categoryTitle').should('be.visible')
            cy.get(':nth-child(1) > :nth-child(4) > .productName').click()
            cy.get('.BLACK').click()
            cy.get('.e-sec-plus-minus > :nth-child(2) > .ng-pristine').type('14')
            cy.get('.fixedBtn > .roboto-medium').click()
            cy.get('#productProperties > label.ng-binding').invoke('show').should('be.visible')
        })
        it('CT016 - Validar cartao com dados em branco (Negativo)', ()=>{
            cy.visit('https://advantageonlineshopping.com/#/');
            cy.get(".logoDemo").should("be.visible");
            cy.get("#menuUserLink").click();
            cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('JoaoSilva');
            cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type('Pe123456')
            cy.get('#sign_in_btn').click();
            cy.get('.desktop-handler > :nth-child(3)').should('be.visible');
            cy.get('#menuCart').click()
            cy.get('#checkOutPopUp').click()
            cy.get('.mobileBtnHandler > #next_btn').should('be.visible').click()
            cy.get('#menuUserLink').should('be.visible')
            cy.get('.itemsCount').should('be.visible')
            cy.get('#shippingCost').should('be.visible')
            cy.get('[data-ng-click="imgRadioButton = 2; checkedRadio = 2"] > input').click()
            cy.get('.sticky').should('be.visible')
            cy.get('#creditCard').type(' ')
            cy.get('[name="cvv_number"]').type('321')
            cy.get('[a-hint="MM"] > .inputContainer > .ng-pristine').select('06')
            cy.get('[a-hint="YYYY"] > .inputContainer > .ng-pristine').select('2030')
            cy.get('[a-hint="Cardholder name"] > .inputContainer > label').type('JoaoSilva');
            cy.get('[a-hint="Card number"] > .inputContainer > label.invalid').invoke('show').should('be.visible')

        })
        it('CT017-Validar dados do cartao (Positivo)', ()=> {
            cy.visit('https://advantageonlineshopping.com/#/');
            cy.get(".logoDemo").should("be.visible");
            cy.get("#menuUserLink").click();
            cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('JoaoSilva');
            cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type('Pe123456')
            cy.get('#sign_in_btn').click();
            cy.get('.desktop-handler > :nth-child(3)').should('be.visible');
            cy.get('#menuCart').click()
            cy.get('#checkOutPopUp').click()
            cy.get('.mobileBtnHandler > #next_btn').should('be.visible').click()
            cy.get('#menuUserLink').should('be.visible')
            cy.get('.itemsCount').should('be.visible')
            cy.get('#shippingCost').should('be.visible')
            cy.get('[data-ng-click="imgRadioButton = 2; checkedRadio = 2"] > input').click()
            cy.get('.sticky').should('be.visible')
            cy.get('#creditCard').type('111122223333')
            cy.get('[name="cvv_number"]').type('321')
            cy.get('[name="cvv_number"]').type('1')
            cy.get('[a-hint="MM"] > .inputContainer > .ng-pristine').select('06')
            cy.get('[a-hint="YYYY"] > .inputContainer > .ng-pristine').select('2030')
            cy.get('[a-hint="Cardholder name"] > .inputContainer > label').type('JoaoSilva');
            cy.get('#pay_now_btn_ManualPayment').click()
        })

        it('CT021 - Validar exclusao de conta', ()=>{
            cy.visit('https://advantageonlineshopping.com/#/');
            cy.get(".logoDemo").should("be.visible");
            cy.get("#menuUserLink").click();
            cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('JoaoSilva');
            cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type('Pe123456')
            cy.get('#sign_in_btn').click();
            cy.get('.desktop-handler > :nth-child(3)').should('be.visible');
            cy.get('.desktop-handler > :nth-child(3)').invoke('text').as('JoaoSilva').then((texto)=>{
            console.log('Texto capturado', texto); 
            })
            cy.get('.desktop-handler > :nth-child(3)').click();
            cy.wait(1000)
            cy.get('#loginMiniTitle > [translate="My_account"]').click()
            cy.wait(1000)

            // Capturar a menssagem de erro
            cy.get('.select').should('be.visible');
            cy.get('.desktop-handler > :nth-child(3)').invoke('text').as('MY ACCOUNT').then((texto)=>{
            console.log('Texto capturado', texto);
            })
            cy.get('.deleteMainBtnContainer').click(); 
            cy.get('.deleteRed').click()
            cy.wait(1000)
            cy.get('.successfulDeleteMessage > .deleteAccountPopupContent > p').invoke('text').as('Account deleted successfully').then((texto) =>{
            console.log('Texto capturado', texto);
            });
            });
        it('CT022 - Validar conta excluida', () => {
            cy.visit('https://advantageonlineshopping.com/#/');
            cy.get(".logoDemo").should("be.visible");
            cy.get("#menuUserLink").click();
            cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('JoaoSilva');
            cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type('Pe123456')
            cy.get('#sign_in_btn').click();
            cy.get('#signInResultMessage').invoke('text').as('Incorrect user name or password.')
   
        });
})