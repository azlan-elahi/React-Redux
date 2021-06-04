import React from 'react';
import ReactDOM from 'react-dom';
import { addFavourites, removeFavourites } from '../actions';


class Moviecard extends React.Component {

    handleUnFavouriteClick = () => {
        // this.props.handleFavourites(movie);
        const { movie } = this.props;
        this.props.dispatch(removeFavourites(movie));
    }
    handleFavouriteClick = () => {
        // this.props.handleFavourites(movie);
        const { movie } = this.props;
        this.props.dispatch(addFavourites(movie));
        // console.log(movie.favourite);
        // if (movie.favourite === true) {
        //     movie.favourite = false;
        // }
        // else {
        //     movie.favourite = true;
        // }
        // if (LDbutton === "Favourite") {
        //     LDbutton = "Unfavourite";
        //     this.setState({ LDbutton })c;
        //     return;
        // }
        // else {
        //     LDbutton = "Favourite";
        //     this.setState({ LDbutton });
        //     return;
        // }
    }
    // handleLikeCount = () => {
    //     console.log("Function called", this.props.movie.count);
    //     this.props.movie.count += 1;

    // }
    handleLikeCount = (Favourite) => {
        // console.log("Function called", this.props.movie.count);
        this.props.handleLikeCount(Favourite);

    }
    render() {
        const { movie, Like, count, handleLikeCount, handleFavourite } = this.props;
        const { Favourite } = this.props.movie;
        return (

            <div >
                {/* <div id="left" >
                    <img alt="Movie-Poster" />
                </div> */}
                <div id="right" style={{ display: 'flex', justifyContent: 'right', gap: 200, flexDirection: 'row', padding: 10, fontWeight: 500 }}>
                    <div id="title" style={{}}>
                        {movie.title}</div>

                    <div style={{}}>
                        {
                            this.props.isFavourite
                                ? <button onClick={this.handleUnFavouriteClick} >Unfavourite</button> :
                                <button onClick={this.handleFavouriteClick} >Favourite</button>}

                    </div>



                    <p>Number of Likes: {movie.likeCount}</p>
                    <button onClick={this.handleLikeCount}>Like</button>
                    <div>

                        {/* <div><button onClick={() => this.handleLikeCount()}>Like</button></div> */}
                    </div>

                    {/* <div>
                        {movie.ReleasedData}
                    </div>
                    <div>
                        {movie.rating}
                    </div> */}
                </div>

            </div >
        );

    }
}

export default Moviecard;
