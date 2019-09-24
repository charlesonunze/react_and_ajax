import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
	state = {
		post: null
	};

	componentDidUpdate(prevProps, prevState) {
		const id = this.props.postId;
		const post = this.state.post;
		if (id)
			if (!post || (post && post.id !== id))
				axios
					.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
					.then(res => this.setState({ post: res.data }))
					.catch(e => console.log(e));
	}

	deletePost = () => {
		const id = this.props.postId;
		axios
			.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => console.log(res))
			.catch(e => console.log(e));
	};

	render() {
		let post = (
			<div className='FullPost'>
				<p style={{ textAlign: 'center' }}>Please select a Post!</p>
			</div>
		);

		if (this.props.postId)
			post = (
				<div className='FullPost'>
					<p style={{ textAlign: 'center' }}>Loading...</p>
				</div>
			);

		if (this.state.post)
			post = (
				<div className='FullPost'>
					<h3 className='Content'>{this.state.post.title}</h3>
					<hr />
					<p className='Content'>{this.state.post.body}</p>
					<div className='Edit'>
						<button className='Delete' onClick={this.deletePost}>
							Delete
						</button>
					</div>
				</div>
			);

		return post;
	}
}

export default FullPost;
