import React from 'react';

export default class Movie_elem extends React.Component {
	giveData(){
		this.props.getElemById(this.props.data);
	}
	getId() {
		this.props.getIdForDel(this.props.data['id']);
	}
	render() {
		return <div className='film-elem col-md-4'>
		<label>#{this.props.num+1}</label>
		 			<div className='film-head'>

						<img src='src/img/default.jpg' className='film-img col-md-4'/>
						<label>Title: {this.props.data['Title']} </label>
						<br />
						<label>Year: {this.props.data['Release Year']}</label>
					</div>
					<div>
						<input type='button' className='btn btn-info' value='Info' onClick={this.giveData.bind(this)}
						 data-toggle='modal' data-target='#info_modal' />
	
						<input type='button' className='btn btn-danger col-xs-offset-3' value='Delete'
						data-toggle='modal' data-target='#del_modal' onClick={this.getId.bind(this)}/>
					</div>
				</div>
	}
}