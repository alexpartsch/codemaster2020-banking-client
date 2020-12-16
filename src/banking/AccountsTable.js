import {Component} from 'react';
import BankingApiClient from './BankingApiClient';

export default class AccountsTable extends Component {

    constructor(props) {
        super(props);
        this.api = new BankingApiClient();
        this.state = {
            accounts: []
        };
    }

    componentDidMount = async () => {
        const accounts = await this.api.listAllAccounts();
        this.setState({
            accounts
        });
    };

    render = () => {
        return (
            <table className="accounts-table">
                <thead>
                    <tr>
                        <th>Account Holder</th>
                        <th>Balance</th>
                        <th>Overdraft Facility</th>
                        <th>Creation Date</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.accounts.map(account => {
                        const {id,name,balance,overdraftFacility,opened} = account;
                        return (
                            <tr key={id}>
                                <td>{name}</td>
                                <td>{balance}</td>
                                <td>{overdraftFacility}</td>
                                <td>{opened}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    };

}