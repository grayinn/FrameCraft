// import axios from 'axios'

// const commentsApi = axios.create({
//     baseURL: 'http://localhost:3000/comments',
// })

// export const getCommentInfo = async (commentId) => {
//     try {
//         const response = await commentsApi.get(`/${commentId}`)
//         return {
//         name: response.data.name,
//         body: response.data.body,
//         };
//     } catch (error) {
//         console.error('Error getting comment info:', error)
//         return null
//     }
// }



import axios from 'axios';

const jsonServer = axios.create({
  baseURL: 'http://localhost:3000/',
});

export const getCommentInfo = async (postId) => {
  try {
    const response = await jsonServer.get(`comments?postId=${postId}`);
    if (response.data && response.data.length > 0) {
      // Assuming there's only one comment per post
      return response.data[0];
    } else {
      return { name: '', body: '' };
    }
  } catch (error) {
    console.error('Error while fetching comment info:', error);
    throw error;
  }
};
