import React from 'react';
import MovieRow from './movie-row';

class ContentRenderer extends React.Component {
	
	state = {
		movieList : [],
		inputText : ''
	}

	componentDidMount() {
		fetch('http://localhost:5000/movies')
			.then(resp => resp.json())
			.then(resp => this.setState({movieList : resp}))
	}

	inputTextChange = (e) => {
		const value = e.target.value;
		this.setState({inputText : value})
	}

	render() {
		const movieList = this.state.movieList;
		const newMovieList = movieList.filter((movie) => movie.title.includes(this.state.inputText));
		return <div className="content">
			<div>
				<label>Search : </label>
				<input type="text" value={this.state.inputText} onChange={this.inputTextChange}/>
			</div>
			{
				newMovieList.map((item) => <MovieRow key={item.id} movie={item} />)
			}
		</div>
	}
};

export default ContentRenderer;