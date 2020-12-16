import {Component} from 'react';
import BankingApiClient from './BankingApiClient';

export default class WithdrawDialog extends Component {

    constructor(props) {
        super(props);
        this.api = new BankingApiClient();
        this.state = {
            amount: 0
        };
    }

    updateAmount = (e) => {
        const newAmount = e.target.value;
        this.setState({
            amount: newAmount
        });
    };

    withdraw = async () => {
        const {account} = this.props;
        const {amount} = this.state;
        console.log(`Withdraws ${amount} for account ${account.id}`);

        await this.api.withdraw(account.id, amount);
        window.location.reload();
    };

    deposit = async () => {
        const {account} = this.props;
        const {amount} = this.state;
        console.log(`Deposit ${amount} for account ${account.id}`);

        await this.api.deposit(account.id, amount);
        window.location.reload();
    };

    render = () => {
        return (
            <fieldset>
                <input type="number" value={this.state.amount} onChange={this.updateAmount}></input>
                <button onClick={this.withdraw}>withdraw</button>
                <button onClick={this.deposit}>deposit</button>
            </fieldset>
        );
    };

}