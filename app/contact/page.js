export default function Contact() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="card">
            <div className="card-body">
              <form action="">
                <div className="row mt-2 mb-2">
                  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Write Your Name"
                    />
                  </div>
                </div>
                <div className="row mt-2 mb-2">
                  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Write Yout Email"
                    />
                  </div>
                </div>
                <div className="row mt-2 mb-2">
                  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <label htmlFor="website" className="form-label">
                      Website
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Write Your Website"
                    />
                  </div>
                </div>
                <div className="row mt-2 mb-2">
                  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      className="form-control"
                      placeholder="Write your message"></textarea>
                  </div>
                </div>
                <div className="row mt-2 mb-2">
                  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-end">
                    <button className="btn btn-outline-success">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
