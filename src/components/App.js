import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {

    state = {
        images: []
    };

    render = () => {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        );
    }

    onSearchSubmit = async term => {
        await unsplash.get('/search/photos',
            {
                params: {
                    query: term
                }
            })
            .then(r => {
                this.setState({
                    images: r.data.results
                });
            })
            .catch(e => {
                console.log('error');
            });
    }
}

export default App;