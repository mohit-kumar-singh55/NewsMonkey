import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description, imageUrl, newsUrl, author, date} = this.props;

        return (
            <div>
                <div className="card">
                    <img src={!imageUrl?"https://yourmileagemayvary.net/wp-content/uploads/2021/11/Screen-Shot-2021-11-29-at-9.25.56-AM-e1638196023140.png":imageUrl} className="card-img-top" alt="AnyPost" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
