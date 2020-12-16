
export default class BankingApiClient {

    constructor() {
        this.apiHost = 'http://localhost:3333';
    }

    listAllAccounts = async () => {

        const url = `${this.apiHost}/accounts`;
        console.log(`fetching accounts from ${url}`);

        const response = await fetch(url);

        if(response.status === 200) {

            const accounts = await response.json();
            console.log(`received ${accounts.length} accounts`);
            return accounts;

        } else {
            throw `Error while fetching accounts, status code: ${response.status}!`;
        }
    };

    createAccount = async (name, balance) => {
        const url = `${this.apiHost}/accounts`;
        console.log(`createing new account on ${url}`);

        const response = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                balance
            })
        });

        if(response.status === 201) {
            const newAccount = await response.json();
            console.log(`Created new Account with ID ${newAccount.id}`);
        } else {
            throw `Error while creating account, status code: ${response.status}!`;
        }
    };

    withdraw = async (id, amount) => {
        await this.withdrawOrDeposit(id, amount, 'delete');
    }

    deposit = async (id, amount) => {
        await this.withdrawOrDeposit(id, amount, 'put');
    }

    withdrawOrDeposit = async (id, amount, method) => {
        const url = `${this.apiHost}/accounts/${id}/balance`;

        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount
            })
        });

        if(response.status === 202) {
            console.log(`${method} from account ${id} by amount of ${amount} was successfull!`);
        } else {
            throw `Failed to ${method}, status code: ${response.status}`;
        }
    };

    loadDeposits = async (id) => {

        const url = `${this.apiHost}/accounts/${id}/deposits`;

        const response = await fetch(url);

        if(response.status === 200) {
            return await response.json();
        }
        throw `Failed to load transactions, status code: ${response.status}`;

    };
}