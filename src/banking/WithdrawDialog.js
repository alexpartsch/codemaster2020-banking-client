import {Component} from 'react';
import BankingApiClient from './BankingApiClient';

export default class WithdrawDialog extends Component {

    constructor(props) {
        super(props);
        this.api = new BankingApiClient();
        this.state = {
            withdrawAmount: 0
        };
    }

    updateWithdrawAmount = (e) => {
        const newWithdrawAmount = e.target.value;
        this.setState({
            withdrawAmount: newWithdrawAmount
        });
    };

    withdraw = async () => {
        const {account} = this.props;
        const {withdrawAmount} = this.state;
        console.log(`Withdraws ${withdrawAmount} for account ${account.id}`);
    };

    render = () => {
        return (
            <fieldset>
                <input type="number" value={this.state.withdrawAmount} onChange={this.updateWithdrawAmount}></input>
                <button onClick={this.withdraw}>withdraw</button>
            </fieldset>
        );
    };

}