import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
	state = {
		posts: [
			{
				id: 1,
				userId: 1,
				title: 'Title One',
				body: 'quia et suscipit suscipit'
			}
		]
	};

	async getUser() {
		try {
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/posts'
			);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	}

	componentDidMount() {
		this.getUser().then(data => {
			let posts = data
				.slice(0, 4)
				.map(e => ({ ...e, author: 'Charles' }));
			console.log(posts);
			this.setState({ posts });
		});
	}

	render() {
		const posts = this.state.posts.map(post => (
			<Post
				id={post.id}
				key={post.id}
				title={post.title}
				author={post.author}
				userId={post.userId}
			/>
		));

		return (
			<div>
				<section className='Posts'>{posts}</section>
				<section>
					<FullPost />
				</section>
				<section>
					<NewPost />
				</section>
			</div>
		);
	}
}

export default Blog;
