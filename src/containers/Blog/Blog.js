import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
	state = {
		posts: [],
		currentPostId: null
	};

	viewPostHandler(id) {
		this.setState({ currentPostId: id });
	}

	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then(res => {
				const posts = res.data
					.slice(0, 4)
					.map(e => ({ ...e, author: 'Charles' }));
				this.setState({ posts });
			})
			.catch(e => {
				let posts = [...this.state.posts];
				this.setState({ posts });
			});
	}

	render() {
		const posts =
			this.state.posts.length > 0
				? this.state.posts.map(post => (
						<Post
							id={post.id}
							key={post.id}
							title={post.title}
							author={post.author}
							userId={post.userId}
							viewPost={() => this.viewPostHandler(post.id)}
						/>
				  ))
				: null;

		return (
			<div>
				<section className='Posts'>{posts}</section>

				<section>
					<FullPost postId={this.state.currentPostId} />
				</section>

				<section>
					<NewPost />
				</section>
			</div>
		);
	}
}

export default Blog;
