import React from "react";

const LanguageContext = React.createContext('ar');

const SelectedLanguage = () => {
    return (
        <LanguageContext.Consumer>
            {language => <p>The selected language is {language}</p>}
        </LanguageContext.Consumer>
    );
}

const ContextApiApp = () => (
    <>
        <LanguageContext.Provider value="en">
            <SelectedLanguage/>
            <LanguageContext.Provider value="de">
                <SelectedLanguage/>
            </LanguageContext.Provider>
            <LanguageContext.Consumer>
                {value => <p>This is a new consumer with value: {value}</p>}
            </LanguageContext.Consumer>
        </LanguageContext.Provider>
        <SelectedLanguage/>
        <LanguageContext.Consumer>
            {value => <p>This is a new consumer with value: {value}</p>}
        </LanguageContext.Consumer>
    </>
);

/****** Language Selector App ******/
const languageStore = {
    ar: {
        greeting: 'مرحباً!',
    },
    en: {
        greeting: 'Hello, motherfucker!'
    }
};

const defaultContextValue = {
    availableLanguages: Object.keys(languageStore),
    changeLanguage: () => {},
    language: 'ar',
    translations: languageStore['ar'],
};

const TranslationsContext = React.createContext(defaultContextValue);

class Localized extends React.Component {
    changeLanguage = (language) => {
        this.setState({
            language: language,
            translations: languageStore[language],
        });
    }

    state = {
        ...defaultContextValue,
        changeLanguage: this.changeLanguage,
    }

    render() {
        return (
            <TranslationsContext.Provider value={this.state}>
                {this.props.children}
            </TranslationsContext.Provider>
        );
    }
}

const Greeting = () => (
    <TranslationsContext.Consumer>
        {context => context.translations.greeting}
    </TranslationsContext.Consumer>
)

const Translated = ({translationKey}) => (
    <TranslationsContext.Consumer>
        {context => context.translations[translationKey]}
    </TranslationsContext.Consumer>
);

const LanguageSelector = () => (
    <TranslationsContext.Consumer>
        {context => (
                <select onChange={e => context.changeLanguage(e.target.value)}>
                    {context.availableLanguages.map(language => <option value={language}>{language}</option>)}
                </select>
            )
        }
    </TranslationsContext.Consumer>
)

// contextType
class TranslatedComponent extends React.Component {
    static contextType = TranslationsContext;
    render() {
        return (
            <p>{this.context.translations[this.props.translationKey]}</p>
        );
    }
}

// TranslatedComponent.contextType = TranslationsContext;

const LanguageApp = () => (
    <Localized>
        <LanguageSelector/>
        <p>
            <Greeting/>
        </p>
        <p>
            <TranslationsContext.Consumer>
                {context => context.translations.greeting}
            </TranslationsContext.Consumer>
        </p>
        <p>
            <Translated translationKey="greeting"/>
        </p>
        <TranslatedComponent translationKey="greeting"/>
    </Localized>
)

export {ContextApiApp, LanguageApp};