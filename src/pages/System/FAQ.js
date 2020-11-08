import React, { Component } from "react";
import Faq from "react-faq-component";

import './FAQ.css'
const data = {
    title: "",
    rows: [
        {
            title: "What names are allowed on Money-Heist",
            content: `Like the Professor said, no personal names, no personal details, we ae here for work so let's keep it professional. You can choose any city as your name unless you are a polic officer. Have fun!`,
        },
        {
            title: "Is my information safe on this site?",
            content:
                "Yes, it is secured and you may go through the terms and conditions to recheck that we are not allowed to share your private information with anyone.",
        },
        {
            title: "How do I delete my posts?",
            content: `It's a heist, every move has consequences. You can't go back sorry. Have fun, the Royal mint awaits! `,
        },
        {
            title: "What is the React package version",
            content: <p>Current version is 6.14.8</p>,
        },
    ],
};
 
const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};
 
const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};
 
export default class App extends Component {
    render() {
        return (
            <div>
                <Faq data={data} styles={styles} config={config} />
            </div>
        );
    }
}