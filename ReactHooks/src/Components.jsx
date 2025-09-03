import { useState } from "react"

export default function MyFunction({posts})
{
    const [visible,setVisible]=useState(5)
    
    const showData=()=>setVisible((visible)=>visible+5);
    const hideData=()=>setVisible((visible)=>Math.max(5,visible-5));
    const showAll=()=>setVisible(posts.length);
    const collapse=()=>setVisible(5);
    return(
    // <div>
    //     <h2>{post.id} - {post.title}</h2>
    //     <p>{post.body}</p>
    // </div>
    <div>
        <table border={1} cellPadding={5}>
            <thead>
            <tr>
                <th>UserId</th>
                <th>ID</th>
                <th>Title</th>
                <th>Content</th>
            </tr>
            </thead>

            <tbody>
                {posts.slice(0,visible).map((post)=>(
                    <tr key={post.id}>
                    <td>{post.userId}</td>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                </tr>
                ))}
            </tbody>
        </table>

        {visible<posts.length&&(
            <>
            <button onClick={showData}>Show More</button>
            <button onClick={showAll}>Show All</button>
            </>
        )}
        {visible>5&&(
            <>
            <button onClick={hideData}>Show Less</button>
            <button onClick={collapse}>Collapse</button>
            </>
            )}
            

    </div>
    )
};
