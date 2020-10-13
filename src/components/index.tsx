import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import "../App.css";
import { Content } from "./content";
import { FilterContext } from "./globalState";
import { Header } from "./Header";
import { Sidebar } from "./SideBar";
import { GenearteMeme } from "./generateMeme";
import { OwnGenearteMeme } from "./ownMemeGen";

interface FilterDataType {
    search: string;
    limit: number;
    language: string;
    rating: string;
}

interface G {

}

class Index extends Component<{}, {}> {
    state = {
        search: "funny",
        limit: 15,
        language: "en",
        rating: "g",
    };
    FilterData = (value: FilterDataType): void => {
        this.setState({
            search: value.search,
            limit: value.limit,
            language: value.language,
            rating: value.rating,
        });
    };
    render() {
        const { limit, rating, language, search } = this.state;
        return (
            <FilterContext.Provider value={{ language, limit, rating, search }}>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Header Name="Meme generator" />
                            <Sidebar FilterData={this.FilterData} />
                            <Content />
                        </Route>
                        <Route exact path="/gen/:id">
                            <GenearteMeme />
                        </Route>
                        <Route exact path="/genmeme">
                            <OwnGenearteMeme />
                        </Route>

                    </Switch>
                </Router>

            </FilterContext.Provider>
        );
    }
}

export default Index;
