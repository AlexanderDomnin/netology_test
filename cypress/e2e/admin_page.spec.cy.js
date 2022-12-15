
describe('Test admin page', () => {
  beforeEach(() => {
    cy.visit('/admin')
  })
  it('Test admin page login', () => {
    cy.get('input[type=\'email\']').type('qamid@qamid.ru')
    cy.get('input[type=\'password\']').type('qamid')
    cy.get('[value="Авторизоваться"]').click()
    cy.url().should('eq', 'http://qamid.tmweb.ru/admin/index.php')
    cy.get('#hall-control').should('be.visible')
    cy.get('#hall-configuration').should('be.visible')
    cy.get('#price-configuration').should('be.visible')
    cy.get('#grid-session').should('be.visible')
    cy.get('#start-sales').should('be.visible')
  })
})
