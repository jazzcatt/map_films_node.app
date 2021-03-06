import React from 'react';
import Movie_elem from './movie-elem';

export default class Container extends React.Component {
	render() {
		let elems = this.props.data.map((e, i) => {
			return <Movie_elem num={i} data={e} key={e.id} getElemById={this.props.getElemById} getIdForDel={this.props.getIdForDel}/>
		})
		return	<div>
				{elems}
				</div>
	}
}