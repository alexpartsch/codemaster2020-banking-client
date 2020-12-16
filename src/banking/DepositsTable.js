import {Component} from 'react';
import BankingApiClient from './BankingApiClient';

export default class DepositsTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accounts: [],
            selectedAccount: null,
            deposits: []
        };
        this.api = new BankingApiClient();
    }

    componentDidMount = async () => {
        const accounts = await this.api.listAllAccounts();
        this.setState({
            accounts,
            selectedAccount: accounts[0].id
        });
    };

    selectAccount = async (e) => {
        const newSelectedAccount = e.target.value;
        const deposits = await this.api.loadDeposits(newSelectedAccount);
        this.setState({
            accounts: this.state.accounts,
            selectedAccount: newSelectedAccount,
            deposits
        });
    };

    render = () => {
        return (
            <div className="deposits-table-cnt">
                <h2>Deposits / Withdraws</h2>
                <select value={this.state.selectedAccount} onChange={this.selectAccount}>
                    {this.state.accounts.map(account => {
                        return (<option key={account.id} value={account.id}>{account.name}</option>)
                    })}
                </select>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.deposits.map(deposit => {
                            return (
                                <tr key={deposit.id}>
                                    <td>{deposit.occurred}</td>
                                    <td>{deposit.amount}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    };
}