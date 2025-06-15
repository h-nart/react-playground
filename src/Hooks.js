import React, {useContext, useEffect, useState} from "react";
// import {Octokit} from "octokit";


const CounterWithHook = () => {
    const [value, setValue] = useState(0);
    // let [value, setValue] = React.useState(0);

    useEffect(() => {
        document.title = `c = ${value}`;

        //optional Cleanup Function
        return () => {
            document.title = 'React App'
        };
    }, [value]);


    return (
        <>
            <p>c= {value}</p>
            <button onClick={() => setValue(value + 1)}>+ 1</button>
            {/* This would change the value but not update the UI since the state wasn't changed. setValue should be used.
        <button onClick={() => value++}>+ 1</button> */}
        </>
    );
}

const CounterApp = () => {
    const [show, setShow] = useState(true);

    // Hooks can't be called conditionally. This fails to compile:
    // if (true) {
    //     const [stateValue, setValue] = useState(1);
    // }

    return (
        <>
            {show && <CounterWithHook/>}
            <button onClick={() => setShow(!show)}>{show ? 'Unmount' : 'Mount'}</button>
        </>
    );
}

/** useContext **/
const LanguageContext = React.createContext('en');

const LanguageConsumer = () => {
    const language = useContext(LanguageContext);

    return (
        <div>Current Language: {language}</div>
    );
};

const ContextHookApp = () => {
    return (
        <>
            {/*uses default value*/}
            <LanguageConsumer/>
            <LanguageContext.Provider value={'ar'}>
                {/*uses value from Provider*/}
                <LanguageConsumer/>
            </LanguageContext.Provider>
        </>
    );
}

/** Custom Hooks **/
const useBackground = (background) => {
    useEffect(() => {
        const root = document.getElementById('root');
        root.style.background = background;
        return () => {
            root.style.background = '';
        }
    }, [background]);
}

const UseBackgroundApp = () => {
    const [color, setColor] = useState('');

    useBackground(color);

    return (
        <div>
            <select value={color} onChange={e => {setColor(e.target.value)}}>
                <option value="" disabled></option>
                <option value="turquoise">Turquoise</option>
                <option value="blue">Blue</option>
            </select>
        </div>
    );
}

// const useGitHubAccountData = (username) => {
//     const [data, setData] = useState({});
//
//     const octokit = new Octokit({
//         auth: '#privateToken'
//     })
//
//     useEffect(() => {
//         octokit.request('GET /users/{username}', {
//             username: username,
//             headers: {
//                 'X-GitHub-Api-Version': '2022-11-28'
//             }
//         }).then((response) => {
//             setData(response.data);
//         });
//     }, [username]);
//
//     return data;
// }

const mockupData = {
    "h-nart": {
        login: "h-nart",
        name: "Nart Haddad",
        created_at: "2020-04-22T10:08:02Z",
        updated_at: "2025-06-11T19:39:35Z",
    },
}

const useGitHubAccountDataMockup = (username) => {
    const [data, setData] = useState({});

    useEffect(() => {
       setData(mockupData[username])
    }, [username]);

    return data;
}

const GitHubDataApp = ({username}) => {
    // const data = useGitHubAccountData(username);
    const data = useGitHubAccountDataMockup(username);

    return (
        <div style={{
            padding: 24,
        }}>
            {Object.keys(data).map(key => <div>{key}: {JSON.stringify(data[key])}</div>)}
        </div>
    );
};

const UpdateData = () => {
    const [data, setData] = useState({
        name: "Nart",
        country: "Jordan",
    });

    return (
        <>
            <button onClick={() =>
                setData(prevState => ({
                    ...prevState,
                    country: "Australia",
                }))}>
                Update Data
            </button>
            <p>
                {JSON.stringify(data)}
            </p>
        </>
    )
}

export {CounterWithHook, CounterApp, ContextHookApp, UseBackgroundApp, GitHubDataApp, UpdateData};