import getPostDetails from "@/lib/getPostDetails";
import Image from "next/image";

export default async function SingleBlog({ params }) {
  const postId = params.blogId;
  const response = await getPostDetails(postId);
  const postDetails = response.postDetails;
  return (
    <div className="container mt-5">
      <div className="card" style={{ width: "100%" }}>
        {postDetails ? (
          <>
            <Image
              className="card-img-top"
              src={postDetails?.img}
              alt="Card image"
              width={500}
              height={450}
              layout="responsive"
              priority
            />
            <div className="card-body">
              <h4 className="card-title font-siliguri">{postDetails?.title}</h4>
              <p className="card-text font-siliguri">{postDetails?.content}</p>
            </div>
          </>
        ) : (
          <>
            <div className="card-body text-center">
              <h4 className="card-title">Post details not found</h4>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
