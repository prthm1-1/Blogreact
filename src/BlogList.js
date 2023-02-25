import { Link } from "react-router-dom";

const BlogList = ({blogs,title}) => {    //const BlogList = (props)
    // const blogs=props.blogs;
    // const title=props.title
    return (
        <div className="blog-List">
            <h2>{title}</h2>
        {blogs.map((blog)=>(
        <div className="blog-preview" key={blog.id}> 
        {/* when we output list react uses id to keep track of the items so that when data changes to allow react to change accordingly */}
            <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            </Link>
            {/* <button onClick={()=>handleDelete(blog.id)} style={{
                    color:"white",
                    backgroundColor:"#f1356d",
                    borderRadius:'4px'
                }}>Delete blog</button> */}
        </div>
     ))}
    </div>
);
}
 
export default BlogList;