import React from 'react';

class SearchBar extends React.Component {

    state = {
        term: ''
    }

    render = () => {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={this.onInputChange} value={this.state.term} />
                    </div>
                </form>
            </div>
        );
    }

    onInputChange = e => {
        this.setState({
            term: e.target.value
        });
    }

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    }
}

export default SearchBar;