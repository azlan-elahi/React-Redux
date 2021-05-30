import React from 'react';
import ReactDOM from 'react-dom';


class Moviecard extends React.Component {
    render() {
        const { movie } = this.props;
        return (
            <div >
                <div id="left" >
                    <img alt="Movie-Poster" />
                </div>
                <div id="right">
                    <div id="title">
                        {movie.title}
                    </div>
                    <div>
                        {movie.ReleasedData}
                    </div>
                    <div>
                        {movie.rating}
                    </div>
                </div>

            </div>
        );

    }
}

export default Moviecard;
