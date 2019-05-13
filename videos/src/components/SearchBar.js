import React from 'react';


class SearchBar extends React.Component {

    state = { input: ''};

    onInputChange = (e) => {
        this.setState({
            input: e.target.value
        })
    };
    onFormSubmit = (e) => {
        e.preventDefault();
        // make sure to call callback from parent component
    };

    render() {
        return(
             <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.input} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        )
    }
}


export default SearchBar;