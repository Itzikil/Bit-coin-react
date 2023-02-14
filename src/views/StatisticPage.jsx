import { Component } from 'react'
import { Chart } from '../cpms/Chart'
import { bitcoinService } from '../services/bitcoin.service'

export class StatisticPage extends Component {

    state = {
        marketPrice: null,
        transactions: null
    }
    componentDidMount() {
        this.getStats()
    }

    async getStats() {
        const marketPrice = await bitcoinService.getMarketPrice()
        const transactions = await bitcoinService.getConfirmedTransactions()
        this.setState({ marketPrice, transactions })
    }
    render() {
        const { marketPrice, transactions } = this.state
        return (
            <section>
                <h3 className='text-center m10'>Bitcoin Statistics</h3>
                <Chart stats={marketPrice} headline={'Market Price'} />
                <Chart stats={transactions} headline={'Confirmed Transactions'} />
            </section>
        )
    }
}
