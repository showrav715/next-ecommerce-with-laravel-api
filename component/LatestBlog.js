import React, { useContext } from "react";
import BlogCard from "./BlogCard";
import Container from "./styled/Container";
import { BlogContext } from "@/lib/context/BlogContext";
export default function LatestBlog() {
    const { latest_blogs } = useContext(BlogContext);
    console.log(latest_blogs);
  return (
    <Container class1="blog-wrapper py-5 home-wrapper-2">
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">Our Latest Blogs</h3>
        </div>
      </div>
      <div className="row">
        {latest_blogs.map((item, index) => {
          return (
            <div className="col-3" key={item.id}>
              <BlogCard {...item} />
            </div>
          );
        })}
      </div>
    </Container>
  );
}
