import BlogList from "@/components/blog/BlogList";
import getNewestPosts from "@/lib/getNewestPosts";

export default async function Home() {
  const allNewestPosts = await getNewestPosts();
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
          <div className="card">
            <div className="card-header">
              <h3>All Neweat Poat</h3>
            </div>
            <div className="card-body">
              <BlogList postList={allNewestPosts} />
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
          <div className="card">
            <div className="card-header">
              <h3>Section Two</h3>
            </div>
            <div className="card-body">Section two content here</div>
          </div>

          <div className="section-separator">
            <div className="card">
              <div className="card-header">
                <h3>Section Three</h3>
              </div>
              <div className="card-body">Section three content here</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
