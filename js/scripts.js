var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    genre: 'Sf',
    src: "http://www.meloleggo.it/wp-content/uploads/2011/07/Harry-Potter.jpg"
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    genre: 'Cartoon',
    src: "http://celebwallpapers.net/wp-content/uploads/2017/11/the-lion-king-i-just-cant-wait-to-be-king-p-lovely-lion-king-pictures-of-lion-king-pictures-350x150.jpg"
  },
  {
    id: 3,
    title: 'Skyfall',
    desc: 'Film o Jamesie Bondzie',
    genre: 'Action',
    src: "http://littleprettynails.com/data/include/cms/OPI-SKYFALL/skyfall-2012-poster.jpg"
  }
  
];

var Movie = React.createClass({
  	propTypes: {
    	movie: React.PropTypes.object.isRequired
  	},
  	render: function() {
    	return (
      		React.createElement('li', {},
        	React.createElement(MovieTitle, {title: this.props.movie.title}),
        	React.createElement(MovieDesc, {desc: this.props.movie.desc}),
            React.createElement(MovieGenre, {genre: this.props.movie.genre}),
        	React.createElement(MovieImg, {src: this.props.movie.src})
      		)
    	);
  	}
});

var MovieTitle = React.createClass({
  	propTypes: {
    	title: React.PropTypes.string.isRequired
  	},
  	render: function() {
    	return (
      		React.createElement('h2', {}, this.props.title)
    	);
  	}
});

var MovieDesc = React.createClass({
  	propTypes: {
    	desc: React.PropTypes.string.isRequired
  	},
  	render: function() {
    	return (
      		React.createElement('p', {}, this.props.desc)
    	);
  	}
});

var MovieGenre = React.createClass ({
    propTypes: {
        genre: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
        React.createElement('p', {}, this.props.genre)
        );
    }
});

var MovieImg = React.createClass({
  	propTypes: {
    	src: React.PropTypes.string.isRequired
  	},
  	render: function() {
    	return (
      		React.createElement('img', {src: this.props.src})
    	);
  	}
});




var MovieList = React.createClass({
  	propTypes: {
    	movies: React.PropTypes.array.isRequired,
  	},
  	render: function() {
    	var moviesElements = movies.map(function(movie){
      		return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('p', {}, movie.genre),
      React.createElement('img', {src: movie.src})                       
    );
    	});

      return (
        React.createElement('div', {},
          	React.createElement('h1', {}, 'Lista filmów'),
          	React.createElement('ul', {}, moviesElements)
        )
      );
    }
}); 

var element = React.createElement(MovieList, {movies: movies});

ReactDOM.render(element, document.getElementById('app'));
