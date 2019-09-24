import React, { Component } from 'react';

import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import './Blog.css';

class Blog extends Component {
	state = {
		currentPostId: null
	};

	viewPostHandler(id) {
		this.setState({ currentPostId: id });
	}

	render() {
		return (
			<div>
				<section>
					<Posts />
				</section>

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
