import React from "react";
import BlogsComp from "../components/Blog/BlogComp";
import '../styles/Blog.css';
import HeroAll from "../components/HeroAll";

const Blog = () => {
    return (
        <div className=" min-vh-100 pt-5 bg-light ">
            <HeroAll title={"Our Blog"} />
            <div className="blogs-container "  >
                <BlogsComp />
            </div>
        </div>


    )
}

export default Blog;

