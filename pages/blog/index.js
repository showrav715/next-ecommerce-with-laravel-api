import BlogCard from "@/component/BlogCard";
import BreadCrumb from "@/component/common/BreadCrumb";
import Container from "@/component/styled/Container";
import { BlogContext } from "@/lib/context/BlogContext";
import React, { useContext } from "react";

const Blog = () => {
  const { blogs } = useContext(BlogContext);
  return (
    <>
      <BreadCrumb title="Blogs" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Find By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              {blogs.map((item, index) => {
                return (
                  <div className="col-3" key={item.id}>
                    <BlogCard {...item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
