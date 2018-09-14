# Bamazon
### An 'online' store

Bamazon is a command line Node app that takes in input and returns data. It intergrates with a MySQL database for product management, and utlizes the inquirer package for handling user input.

## Installation

- Clone/download the repo
- Open the root of the repo in your terminal
- (Optional) run the `vagrant up` command to use the provided vagrant file to provision a VM, then run `vagrant ssh` to use it. This requires both Vagrant and Virtualbox to be installed on your machine
    * [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
    * [Vagrant](https://www.vagrantup.com/downloads.html)
- Navigate to the 'code' directory ('/var/code' if using vagrant)
- Run `npm install` to install the required Node modules
- Use the provided `bamazon_products.sql` file to create the needed database
    * If not using the provided VM, you will need to edit the password on line 14 of the `bamazonCustomer.js` file to match your password
- Run `node bamazonCustomer` to start the program
- Follow the on-screen prompts

## Video Demo
 ![Flow](https://raw.githubusercontent.com/crussell84/bamazon/master/media/bamazonCustomerFlow.gif)