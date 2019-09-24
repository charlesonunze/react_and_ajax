import React from 'react';
import axios from 'axios';

import './Posts.css';
import Post from '../../../components/Post/Post';

class Posts extends React.Component {
	state = {
		posts: []
	};

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
							key={post.id}
							title={post.title}
							author={post.author}
							viewPost={() => this.viewPostHandler(post.id)}
						/>
				  ))
				: null;

		return <div className='Posts'>{posts}</div>;
	}
}

export default Posts;
