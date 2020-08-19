import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';

const API_KEY = "cc066a48599ff5cd3c3c06699f0cf0c3";

class App extends Component {
  state = {
    recipes: []
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://recipesapi.herokuapp.com/api/search?&q=${recipeName}&count=10 `);
    const data = await api_call.json();
    this.setState({recipes: data.recipes});
    console.log(this.state.recipes);
  }
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({recipes: recipes});
  }
  componentDidUpdate = () => {
      const recipes = JSON.stringify(this.state.recipes);
      localStorage.setItem("recipes", recipes);
  }

  clearInput = (e) => {
    e.target.elements.recipeName.value = '';
};
  render() {
    return (
      <div className="App">
       <header className="App-header">
         <h1 className="App-title">Recipe Search</h1>
       </header>
       <Form getRecipe={this.getRecipe}/>
       <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
