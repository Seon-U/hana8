// 1번 유저의 게시글 목록과 댓글을 리턴하는 getPosts 함수를 작성하시오.
//  - 1번 유저의 글목록: https://jsonplaceholder.typicode.com/posts?userId=1
//  - 댓글 목록: https://jsonplaceholder.typicode.com/posts/<postId>/comments

// const API = "https://jsonplaceholder.typicode.com";
// const getPostsByUserId = async (userId) =>
//   fetch(`${API}/posts?userId=${userId}`).then((res) => res.json());

// const getCommentsByPostId = async (postId) =>
//   fetch(`${API}/posts/${postId}/comments`).then((res) => res.json());

// async function fetchData() {
//   const posts = await getPostsByUserId(1);
//   console.log("🚀 ~ posts:", posts);

//   const postComments = await Promise.all(
//     posts.map((post) => getCommentsByPostId(post.id))
//   );

//   const results = [];
//   for (let i = 0; i < posts.length; i++) {
//     const { id: postId, title } = posts[i];
//     const comments = postComments[i].map(({ id, email, body }) => ({
//       id,
//       email,
//       body,
//     }));
//     results.push({ postId, title, comments });
//   }

//   console.log("results", JSON.stringify(results, null, " "));
// }

// fetchData();

// for await (const comment of Promise.all()) {

// }
const getPosts = async (userId) => {
  const postUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
  //postID끌어와야 함

  const posts = await fetch(postUrl).then((v) => v.json());
  console.log(posts);

  const commentsFetchs = posts.map(({ id }) =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(
      (res) => res.json()
    )
  );
  const comments = await Promise.allSettled(commentsFetchs);

  return results;

  // console.log(
  //   "🚀 ~ getPosts ~ comments:",
  //   comments,
  //   JSON.stringify(comments, null, " ")
  // );
};

getPosts(1);
// [
//   {
//     postId: "게시글ID",
//     title: "게시글 제목",
//     comments: [댓글 목록]
//   },
// ]
