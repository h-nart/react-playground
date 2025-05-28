import React from "react";

const withFormatting = (WrappedComponent) => {
    return class extends React.Component {
        bold = (string) => {
            return <strong>{string}</strong>;
        };
        italic = (string) => {
            return <em>{string}</em>;
        }

        render() {
            return <WrappedComponent bold={this.bold} italic={this.italic} {...this.props}/>;
        }
    }
}

// const WrappedComponent = (props) => <div>{props.bold('Bold')} and {props.italic('Italic')}</div>
// const WrappedComponent = ({bold, italic}) => <div>{bold('Bold')} and {italic('Italic')}</div>

// const FormattedContent = withFormatting(WrappedComponent);

const FormattedContent = withFormatting(({bold, italic, ...rest}) => {
    return (
        <>
            <div>This text is {bold('bold')} and {italic('italic')}.</div>
            <div>Rest of props: {Object.keys(rest).map(k => k + ': ' + rest[k] + ', ')}</div>
        </>
    );
});

// class HigherOrderComponents extends React.Component {
//
// }

// const withCryptoPrices = (WrappedComponent) => {
//     return class extends React.Component {
//         state = {
//             isLoading: true,
//             items: [],
//         }
//
//         componentDidMount() {
//             this.loadData();
//         }
//
//         loadData = async () => {
//             this.setState({isLoading: true});
//             await fetch('https://ed-4671286834102272.educative.run:3000/api/v3/coins/markets?vs_currency=eur&per_page=10');
//         };
//
//     };
// }

export {withFormatting, FormattedContent};