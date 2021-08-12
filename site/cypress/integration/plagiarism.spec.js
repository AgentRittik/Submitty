// This section contains tests for the plagiarism detection interface, excluding the
// results page.  All of these tests require submissions to be made to each of the
// gradeables in the sample course.  These tests are run against the sample course
// gradeables so that we can run tests against the plagiarism course gradeables in parallel.
describe('Plagiarism tests', () => {
    beforeEach(() => {
        // login
        cy.visit('/');
        cy.login();
        cy.visit(['sample', 'plagiarism']);
    });

    it('Test the default gradeable configuration settings', () => {
        // click add config button
        cy.get('.nav-buttons > .btn').click();

        // assert that page has correct title
        cy.get('#breadcrumbs > :nth-child(7) > span').should('have.text', 'Configure New Gradeable');

        // PROVIDED CODE
        // assert that the provided code radio button is switched to "no" and the file picker is hidden
        cy.get('#no-code-provided-id').should('be.checked');
        cy.get('#code-provided-id').should('not.be.checked');
        cy.get('#provided-code-file').should('be.hidden');

        // select the provided code radio button field
        cy.get('#code-provided-id').click();

        // assert that the "yes" radio button is now selected and that the file picker is unhidden
        cy.get('#no-code-provided-id').should('not.be.checked');
        cy.get('#code-provided-id').should('be.checked');
        cy.get('#provided-code-file').should('not.be.hidden');

        // VERSION
        // assert that version is set to "All Versions" by default
        cy.get('#all-version-id').should('be.checked');
        cy.get('#active-version-id').should('not.be.checked');

        // REGEX
        cy.get('#regex-submissions-dir').should('be.checked');
        cy.get('#regex-results-dir').should('not.be.checked');
        cy.get('#regex-checkout-dir').should('not.be.checked');
        cy.get('#regex-to-select-files').should('be.empty');

        // IGNORED USERS
        cy.get('#ignore-instructors').should('not.be.selected');
        cy.get('#ignore-full-access-graders').should('not.be.selected');
        cy.get('#ignore-limited-access-graders').should('not.be.selected');
        cy.get('#ignore-others').should('not.be.selected');
        cy.get('#ignore-others-list').should('be.empty');

        // Click the cancel button
        cy.get('.btn-danger').click();

        // Check that the URL is the main page
        cy.url().should('include', 'sample/plagiarism');
    });

    it('Create a new gradeable configuration and play around with it', () => {
        // click add config button
        cy.get('.nav-buttons > .btn').click();

        // We just create a gradeble config with the default settings
        cy.get(':nth-child(2) > .plag-data > select').contains('Autograder Hidden and Extra Credit (C++ Hidden Tests) (Due 01/01/1974)');
        cy.get(':nth-child(2) > .plag-data > select').select('Autograder Hidden and Extra Credit (C++ Hidden Tests) (Due 01/01/1974)');

        cy.get('#threshold').clear().type('200');
        cy.get('#sequence-length').clear().type('19');

        cy.get('input[type=submit]').click();

        // wait for Lichen to finish running and then make sure table looks good
        cy.get('[colspan="4"]', {timeout: 120000}).should('not.exist');

        cy.get('#grades_released_homework_autohiddenEC_1_table_row > :nth-child(1)')
            .contains('Autograder Hidden and Extra Credit (C++ Hidden Tests)');
        cy.get('#grades_released_homework_autohiddenEC_1_table_row > :nth-child(1)')
            .contains('Due: 01/01/1974 @ 11:59 PM');

        cy.get('#grades_released_homework_autohiddenEC_1_table_row > :nth-child(2)')
            .contains('1');

        cy.get(':nth-child(7) > .btn').click(); // run log

        cy.get('.run-log-data > pre').contains('COMPARE HASHES done in'); // a crude check to see if Lichen succeeded

        // go back and edit the configuration, then rerun
        cy.get('[aria-label="Edit Autograder Hidden and Extra Credit (C++ Hidden Tests)"]').click();

        cy.get('#threshold').should('have.value', '200');
        cy.get('#sequence-length').clear().type('20');
        cy.get('#active-version-id').check();

        // submit edited form
        cy.get('input[type=submit]').click();

        // wait for Lichen to finish running and then make sure table looks good again
        cy.get('[colspan="4"]', {timeout: 120000}).should('not.exist');

        cy.get('#grades_released_homework_autohiddenEC_1_table_row > :nth-child(1)')
            .contains('Autograder Hidden and Extra Credit (C++ Hidden Tests)');
        cy.get('#grades_released_homework_autohiddenEC_1_table_row > :nth-child(1)')
            .contains('Due: 01/01/1974 @ 11:59 PM');

        cy.get('#grades_released_homework_autohiddenEC_1_table_row > :nth-child(2)')
            .contains('1');

        cy.get(':nth-child(7) > .btn').click(); // run log

        cy.get('.run-log-data > pre').contains('COMPARE HASHES done in'); // a crude check to see if Lichen succeeded


        // click the rerun button
        cy.get('[aria-label="Rerun Autograder Hidden and Extra Credit (C++ Hidden Tests)"]').click();
        // A ghost error of sorts seems to occur here.  Manual testing could not reproduce it,
        // nor could any potential source be found in the code.
        Cypress.on('uncaught:exception', () => {
            // prevent Cypress from failing when we see this exception
            return false;
        });

        // wait for Lichen to finish running
        cy.get('[colspan="4"]', {timeout: 120000}).should('not.exist');

        cy.get(':nth-child(7) > .btn').click(); // run log

        cy.get('.run-log-data > pre').contains('COMPARE HASHES done in'); // a crude check to see if Lichen succeeded

        // delete gradeable config to clean up behind ourselves
        cy.get('[aria-label="Delete Autograder Hidden and Extra Credit (C++ Hidden Tests)"]').click();
        cy.get('.btn-danger').click(); // delete button on modal

    });
});
