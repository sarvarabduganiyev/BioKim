import BlogCard from "../home/BlogCard";

function BlogOne() {
    return (
        <div className="w-10/12 mx-auto">
            <div className="mt-12 ">
                <div className="orange__line"></div>
                <h1 className="content__four__h1">Blog</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    );
}

export default BlogOne;