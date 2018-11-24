import React from 'react';

class MovieRow extends React.Component {
	
	state = {
		show : false
	}

	toggle = () => {
		this.setState((prevState, prevProps) => ({
			show : !prevState.show
		}))
	}

	render() {
		return <div>
			<div onClick={this.toggle}>
				{
					this.props.movie.title
				}
			</div>	
			{
				this.state.show && <div>
					<p> Description : {this.props.movie.description}</p>
					<p> Rating : {this.props.movie.rating}</p>
				</div>
			}
		</div>
	}
}

export default MovieRow;