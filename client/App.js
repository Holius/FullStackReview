import React from 'react';
import Axios from 'axios';
import Tasks from './Task';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
         }
    }

    getTasks() {
        Axios.get('/Sager')
        .then( (response) => {
            console.log(response)
        })
    }

    render() {
        return (
            <div>
                <h1>My To Do App</h1>
                <input>

                </input>
            </div>
        )
    }
}
