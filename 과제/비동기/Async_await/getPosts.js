/**
 * [
  {
    postId: 게시글ID,
    title: 게시글 제목,
    comments: [댓글 목록]
  },
  { … }
]

 */

const getPosts = async userId => {
    try {
        const posts_comments = [];
        const posts = await fetch(
            `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
        ).then(res => res.json());
        for ({id, title} of posts) {
            const comments = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
            ).then(res => res.json());
            posts_comments.push({
                postId: id,
                title,
                comments,
            });
        }
        //resolve({state: 'fulfilled', result: posts_comments});
        return {state: 'fulfilled', result: posts_comments};
    } catch (error) {
        //reject({ state: 'rejected', reason: error });
        return {state: 'rejected', reason: error};
    }
};

getPosts(1).then(res => console.dir(res, {depth: null}));
