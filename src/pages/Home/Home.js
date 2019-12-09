import React from "react";
import List from "./../../components/List";
import { Provider } from "react-redux";
import store from "./../../store";
import { Link } from "react-router-dom"

const Home = () => 
    <div>
        <Provider store={store}>
        <div className="App">
            <Link data-test="criar" to="/create">Criar novo contato</Link>
            <List />
        </div>
        </Provider>
    </div>;

export default Home;
