import React from 'react';

const MediaBox = (props) => {
    return(
<div className="cards d-flex justify-content-around flex-wrap p-3">
    <div className="card p-2">
    <img className="media_img" src={props.item.image_url} alt="Media image" />
    <div className="card-body">
    <h1>{props.item.title}</h1>
        <div className="card_table table table-dark">
            <table>
                <thead>
                    <th>Release Year</th>
                    <th>Director</th>
                    <th>Type</th>
                    <th>Genre</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.item.year}</td>
                        <td>{props.item.director}</td>
                        <td>{props.item.isMovie? "Movie" : "Show"}</td>
                        <td>{props.item.genre}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
</div>
    )
}

export default MediaBox;