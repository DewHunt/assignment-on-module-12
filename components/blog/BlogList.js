import Link from "next/link";

export default function BlogList({ postList }) {
  return (
    <div className="row">
      {postList.map((post) => (
        <div
          key={post.id}
          className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 mb-3">
          <div className="card" style={{ width: "100%" }}>
            <img
              className="card-img-top"
              src={post.img}
              alt="Card image"
              style={{ width: "100%" }}
            />
            <div className="card-body">
              <h4 className="card-title font-siliguri">{post.title}</h4>
              <p className="card-text font-siliguri">{post.short}</p>
              <div className="d-grid">
                <Link
                  href={`/blog/${post.id}`}
                  className="btn btn-outline-primary">
                  See Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
