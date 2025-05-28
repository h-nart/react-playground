import React from "react";

class List extends React.Component {

    state = {
        currencies: [
            {
                id: 1,
                name: 'Bitcoin',
                symbol: 'BTC',
                quotes: {EUR: {price: 7179.92084586}},
            },
            {
                id: 2,
                name: 'Ethereum',
                symbol: 'ETH',
                quotes: {EUR: {price: 595.218568203}},
            },
            {
                id: 3,
                name: 'Litecoin',
                symbol: 'LTC',
                quotes: {EUR: {price: 117.690716234}},
            },
        ]
    }

    CryptoList = ({currencies}) => (
        <ul>
            {currencies.map(c =>(
                <this.CryptoListItem key={c.id} {...c}/>
            ))}
        </ul>
    );

    CryptoListItem = ({name, quotes}) => (
        <li>
            <h1>{name}</h1>
            <p>{quotes.EUR.price}</p>
        </li>
    )

    // constructor(props) {
    //     super(props);
    //     this.setState({
    //         currencies: [
    //             {
    //                 id: 1,
    //                 name: 'Bitcoin',
    //                 symbol: 'BTC',
    //                 quotes: {EUR: {price: 7179.92084586}},
    //             },
    //             {
    //                 id: 2,
    //                 name: 'Ethereum',
    //                 symbol: 'ETH',
    //                 quotes: {EUR: {price: 595.218568203}},
    //             },
    //             {
    //                 id: 3,
    //                 name: 'Litecoin',
    //                 symbol: 'LTC',
    //                 quotes: {EUR: {price: 117.690716234}},
    //             },
    //         ]
    //     });
    // }

    render() {
        return (
            <>
                <button onClick={() => this.setState( (prevState) => {
                    prevState.currencies[0].quotes.EUR.price += 1;
                    return prevState.currencies;
                })
                }>Update BTC</button>
                <this.CryptoList currencies={this.state.currencies}/>
            </>
        );
    }
}

export default List;