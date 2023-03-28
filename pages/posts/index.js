import React from "react";

// fetch data in NextJS uses getServerSideProps function
export const getServerSideProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()

    return {
        props: {
            posts: data
        }
    }
}

const posts = ({posts}) => {
  return (
    <>
      <h1>Posts page</h1>
      {posts?.map(post => {
        return <li key={post.id}>{post.title}</li>
      })}

    </>
  );
};

export default posts;
