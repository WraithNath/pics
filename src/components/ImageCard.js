import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            spans: 0
        };

        this.imageRef = React.createRef();
    }

    render = () => {
        const image = this.props.image;

        return (
            <div styles={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={image.description} src={image.urls.regular} />
            </div>
        );
    }

    componentDidMount = () => {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
       const height = this.imageRef.current.clientHeight;
       const spans = Math.ceil(height / 10);

       this.setState({
           spans: spans
       });
    }
}

export default ImageCard;