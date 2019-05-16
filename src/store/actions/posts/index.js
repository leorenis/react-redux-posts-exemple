import jsonPlaceholder from '../../../api/jsonPlaceholder'

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts')
  dispatch({ type: '@postsActions/FETCH_POSTS', payload: response.data })
}
