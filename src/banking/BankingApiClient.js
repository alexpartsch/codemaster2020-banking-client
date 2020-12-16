
export default class BankingApiClient {

    listAllAccounts = async () => {

        const url = 'http://localhost:3333/accounts';
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
        const url = 'http://localhost:3333/accounts';
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
}