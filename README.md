# Payment checkout

## Description

Credit card payment checkout, is the onboarding where we obtain customer payment data to make the transaction of specific product and show
the result of the process (Mocked)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Test Coverage](#test-coverage)
- [Contact](#contact)

## Installation

Instructions on how to install the project.

`yarn install`

`yarn dev`

#### Tools and dependencies used:

Redux Toolkit, RTK query, Redux-persists, crypto-js, Material-UI, React Hook Form, Yup.

## Usage

On the main page, you will see a list of products.

By clicking on any of them, you will be redirected to the product information page.

You can add a credit card for payment; Once the card is added, a payment process will be available at the bottom of the page.

Now you can create an order.

Don't worry about your card information, it's encrypted.

## Test Coverage

### Coverage Tool

This project uses Jest for testing and coverage.

### Minimum Coverage

The project aims to maintain a minimum test coverage of 80%.

### Running Tests and Generating Coverage

To run the tests and generate the coverage report, use the following command:

`yarn test:badges`

This command will generate a coverage report in the `./coverage` directory.

### Coverage Report

The coverage report is available in the `./coverage/lcov-report/index.html` (just locally). You can view the report by opening this file in your web browser.

### Coverage Badge

![Coverage](./coverage/badge-statements.svg)

This badge displays the current test coverage percentage.

## Contact

Sebastian Cordero @scordero414
