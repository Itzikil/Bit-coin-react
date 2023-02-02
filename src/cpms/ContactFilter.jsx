import { Component } from 'react'

export class ContactFilter extends Component {

    state = {
        filterBy: null
    }

    componentDidMount() {
        const { filterBy } = this.props
        this.setState({ filterBy: { ...filterBy } })
    }

    handleChange = ({target}) => {
        const field = target.name
        let value = target.value

        this.setState(
            prevState => ({ filterBy: { ...prevState.filterBy , [field]:value} }),
            () => this.props.onChangeFilter({ ...this.state.filterBy })
        )
    }
    render() {
        const { filterBy } = this.state
        if (!filterBy) return <div>Loading...</div>
        const { term } = filterBy
        return (
            <section>
                <form >
                    <input type="text" name="term" value={term} onChange={this.handleChange} />
                </form>
            </section>
        )
    }
}
