// import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch'


const Home = () => {
    
    const {data:blogs,isLoading, error}= useFetch('http://localhost:8000/blogs');

    // const [name,setName] = useState('mario');

    // const handleDelete=(id)=>{
    //     const newBlogs = blogs.filter(blog=>blog.id!==id)
    //     setBlogs(newBlogs);
    //}
    
    //<useEffect />

    return (
         <div className="home">
            { error && <div>{error}</div> }
            { isLoading && <div>Loading...</div>}
             {blogs && <BlogList blogs={blogs} title={"All Blogs"}  />}
             {/* <button onClick={()=> setName('luigi')}>Change Name</button>
             <p>{name}</p> */}
             {blogs && <BlogList blogs={blogs.filter((blog)=>blog.author==="mario")} title={"Mario's Blogs"} />}
        </div>
    );
}
 
export default Home

    // const handleClickAgain=(name)=>{
    //     console.log("Hello "+name)
    // }
    //let name='mario'
    // const [name,setName]=useState('mario');
    // const handleClick=(e)=>{
    //     // console.log("Hello Ninjas ",e);
    //     setName('pratham');
        // console.log(name)
/* <h2>Homepage</h2>
             <p>{name}</p>
             <button onClick={handleClick}>Click Me</button> */
            /* <button onClick={()=>handleClickAgain("pratham")}>Click Me Again</button> */