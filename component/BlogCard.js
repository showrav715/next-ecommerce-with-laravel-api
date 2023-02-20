import Link from "next/link";
const BlogCard = ({id,title,details,photo,created_at}) => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src={photo} className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">
          {/* date format */}
          {new Date(created_at).toDateString()}
        </p>
        <h5 className="title">{title}</h5>
        <p className="desc">
          {details.substring(0, 100) + "..."}
        </p>
        <Link href={`blog/:${id}`} className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
