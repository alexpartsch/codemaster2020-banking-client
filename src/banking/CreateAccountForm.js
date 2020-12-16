import {Component} from 'react';
import BankingApiClient from './BankingApiClient';

export default class CreateAccountForm extends Component {


    constructor(props) {
        super(props);
        this.api = new BankingApiClient();
        this.state = {
            name: '',
            balance: 0
        };
    }

    updateName = (e) => {
        const newName = e.target.value;
        this.setState({
            name: newName,
            balance: this.state.balance
        });
        console.log(`Updated name to: ${newName}`);
    };

    updateBalance = (e) => {
        const newBalance = e.target.value;
        this.setState({
            name: this.state.name,
            balance: newBalance
        });
        console.log(`Updated Balance to: ${newBalance}`);
    };

    createAccount = async () => {
        const {name, balance} = this.state;
        console.log(`Creating new bank account with ${name} and ${balance}`);

        await this.api.createAccount(name, balance);
    };

    render = () => {
        return (
            <div className="create-account-form">
                <fieldset>
                    <legend>Open new Account</legend>
                    <label htmlFor="name">Account Holders Name:</label>
                    <input type="text" id="name" value={this.state.name} onChange={this.updateName}></input>

                    <label htmlFor="balance">Account Balance:</label>
                    <input type="number" id="balance" value={this.state.balance} onChange={this.updateBalance}></input>

                    <button onClick={this.createAccount}>Open Account</button>
                </fieldset>
            </div>
        );
    };

}