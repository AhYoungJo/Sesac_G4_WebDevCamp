/**
 *   {
    id: 유저ID,
    name: 유저명,
    posts: [
       {id: 글ID, title: 글제목, body: 글내용}, {...
    ]
  }
 */

const getUserPosts = async id => {
    try {
        const user = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`,
        ).then(res => res.json());
        const posts = await fetch(
            `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
        ).then(res => res.json());

        //resolve()
        return {
            id: user.id,
            name: user.name,
            posts: [...posts].map(({userId, ...rest}) => rest),
        };
    } catch (error) {
        //reject()
        return {state: 'rejected', reason: error};
    }
};

getUserPosts(1).then(res => console.log(res));
