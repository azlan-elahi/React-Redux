import React from 'react';
import ReactDOM from 'react-dom';
import { data } from '../data';
import Moviecard from './Moviecard';

// function Movies(props) {
//     }

class Movies extends React.Component {

    render() {

        return (
            <div>
                {data.map((movie, index) => (
                    < Moviecard movie={movie} key={`movies-${index}`} />
                ))}
            </div>
        );

    }
}

export default Movies;
