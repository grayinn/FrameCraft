// import axios from 'axios'

// const postsApi = axios.create({
//     baseURL: 'http://localhost:3000/posts',
// })

// export const getPostDescription = async (postId) => {
//     try {
//         const response = await postsApi.get(`/${postId}`)
//         return response.data.describe;
//     } catch (error) {
//         console.error('Error getting post description:', error)
//         return null
//     }
// }



import axios from 'axios';

const jsonServer = axios.create({
  baseURL: 'http://localhost:3000/',
});

export const getPostInfo = async (postId) => {
  try {
    const response = await jsonServer.get(`posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching post info:', error);
    throw error;
  }
};

