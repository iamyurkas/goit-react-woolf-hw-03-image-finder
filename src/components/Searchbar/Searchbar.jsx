import React, { Component } from 'react';
import css from './Searchbar.module.css';


export class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton} />

          <input
            className={css.SearchFormInput}
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}