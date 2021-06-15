import React, { Component } from 'react';

class HomeInitial extends Component {
	render() {
		return (
			<div>
				<form>
					<label>
						<input type="text" placeholder="Search" />
					</label>
				</form>
				<h1 data-testid="home-initial-message">
					Digite algum termo de pesquisa ou escolha uma categoria.
				</h1>
			</div>
		);
	}
}

export default HomeInitial;
