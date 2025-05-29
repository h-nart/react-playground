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

/**
 * A Higher Order Component takes a layout component as an argument, generates content for and passes it to the layout
 * component, then returns a Component of the layout with the data.
* */
const withNovels = (WrappedComponent) => {
    return class extends React.Component {
        state = {
            favorite: ["Crime and Punishment", "The Brothers Karamazov"],
            input: "",
        }
        render() {
            return (
                <>
                    <WrappedComponent data={this.state.favorite} {...this.props}/>
                    <input onChange={(e) => this.setState({input: e.target.value})}/>
                    <button onClick={() => {
                        this.setState({
                            favorite: [...this.state.favorite, this.state.input]
                        })
                    }}>Add
                    </button>
                </>
            );
        }
    };
};

const CsvLayout = ({data, ...rest}) => {
    const {separator} = rest;
    return <div>{data.map(d => d + (separator ? separator : ", "))}</div>
}

const CsvNovels = withNovels(CsvLayout);

export {withFormatting, FormattedContent, CsvNovels, CsvLayout};