import { FaSquareFacebook, FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
export default function About() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="card">
            <div className="card-body">
              <h3 className="text-center text-success">Muhammad Dew Hunt</h3>
              <h6 className="text-center text-danger">
                Professional Software Engineer
              </h6>
              <div className="d-flex mt-3">
                <div className="flex-fill text-center">
                  <span>
                    <FaSquarePhone fontSize={25} />
                  </span>
                  <span className="ps-2">+880 1317 243 494</span>
                </div>
                <div className="flex-fill text-center">
                  <span>
                    <MdEmail fontSize={25} />
                  </span>
                  <span className="ps-2">dew.fog1553@gmail.com</span>
                </div>
              </div>
              <div className="d-flex mt-2">
                <div className="flex-fill text-center">
                  <span>
                    <FaSquareFacebook fontSize={25} />
                  </span>
                  <span className="ps-2">https://www.facebook.com/dewhunt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="card">
            <div className="card-body">
              <p className="text-center" style={{ fontSize: "17px" }}>
                <b>Hello! I’m Muhammad Salman Sabbir,</b> <br />
                Web designer and developer from Bangladesh, Dhaka. I have rich
                experience in web site design and building, My passion is to
                develop a highly functional professional web application using
                the latest technology. It's my everyday challenge to myself to
                do better than yesterday I did.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
