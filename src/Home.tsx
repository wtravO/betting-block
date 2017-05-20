import * as React from 'react';
import './css/bootstrap.css';

class Home extends React.Component<{}, null> {
  render() {
    return (
      <div id="root">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Betting Block</a>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="item active">
              <img src="https://placehold.it/2000x400" alt="Test One" />
            </div>

            <div className="item">
              <img src="https://placehold.it/2000x400" alt="Test Two" />
            </div>

            <div className="item">
              <img src="https://placehold.it/2000x400" alt="Test Three" />
            </div>
          </div>

          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12"><h1>Got everything this far.</h1></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
