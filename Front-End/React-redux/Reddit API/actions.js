// Action Creators and Constants

import fetch from 'cross-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'


export function selectSubreddit(subreddit) {
	return {
		type: SELECT_SUBREDDIT,
		subreddit
	}
}

export function invalidateSubreddit(subreddit) {
	return {
		type: INVALIDATE_SUBREDDIT,
		subreddit
	}
}

// 请求数据前dispatch 的action
function requestPosts(subreddit) {
	return {
		type: REQUEST_POSTS,
		subreddit
	}
}

// 请求接口数据回来后dispatch 的action
function receivePost(subreddit, json) {
	return {
		type: RECEIVE_POSTS,
		subreddit,
		posts: json.data.children.map(child => child.data),
		receivedAt: Date.now()
	}
}

function fetchPosts(subreddit) {
	return dispatch => {
		dispatch(requestPosts(subreddit))
		return fetch(`https://www.reddit.com/r/${subreddit}.json`)
			.then(response => response.json())
			.then(json => dispatch(receivePost(subreddit, json)))
	}
}

// 返回当前的subreddit 是否需要fetch更新的布尔值
function shouldFetchPosts(state, subreddit) {
	const posts = state.postsBySubreddit[subreddit]
	if (!posts) {
		return true
	} else if (posts.isFetching) {
		return false
	} else {
		return posts.didInvalidate
	}
}

export function fetchPostsIfNeeded(subreddit) {
	return (dispatch, getState) => {
		if ( shouldFetchPosts(getState(),subreddit) ) {
			return dispatch(fetchPosts(subreddit))
		}
	}
}




