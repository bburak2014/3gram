import { useState, useEffect } from "react";
import axios from "axios";
import { Carousel, Pagination, Image  } from "react-bootstrap";

function Body() {
  const [album, setAlbum] = useState([]);
  const [Comment, setComment] = useState([]);
  const [Photos, setPhotos] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(0);

  const getAlbums = () =>
    axios
      .get(
        `https://jsonplaceholder.typicode.com/albums?_start=${postsPerPage}&_limit=10`
      )
      .then((res) => {
        setAlbum(res.data);
      });

  const getComment = () =>
    axios
      .get(
        `https://jsonplaceholder.typicode.com/comments?_start=${
          postsPerPage * 5
        }&_limit=50`
      )
      .then((res) => {
        setComment(res.data.sort((a, b) => (b.postId > a.postId ? 1 : -1)));
      });

  const getPhotos = () =>
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?_start=${
          postsPerPage * 50
        }&_limit=500`
      )
      .then((res) => {
        setPhotos(res.data);
      });

  useEffect(() => {
    getAlbums();
    getComment();
    getPhotos();
  }, [postsPerPage]);
  console.log(Comment);

  const handleNext = () => (
    postsPerPage < 90 ? setpostsPerPage(postsPerPage + 10) : null,
    currentPage > 0 && currentPage < 10 ? setcurrentPage(currentPage + 1) : null
  );
  const handlePrev = () => (
    postsPerPage > 0 ? setpostsPerPage(postsPerPage - 10) : null,
    currentPage > 1 && currentPage < 11 ? setcurrentPage(currentPage - 1) : null
  );
  const handleFirst = () => setpostsPerPage(0);
  const handleLast = () => setpostsPerPage(90);

  return (
    <>
      <div className="row">
        <div className="co-xs-12 col-lg-6 col-xl-4 col-xxl-3">
          <div
            className="nav flex-column nav-pills verticalIl Rectangle"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              className="nav-link verticalLink "
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              <div className="verticapText  ">
                {" "}
                <div className="divideractive"></div>
                <i className="fa-solid fa-newspaper iconVert"></i>New Feeds
              </div>
            </a>
            <a
              className="nav-link verticalLink "
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              <div className="verticapText  ">
                <div className="divideractive"></div>
                <i className="fa-solid fa-newspaper iconVert"></i>Marketplace
              </div>
            </a>
            <a
              className="nav-link verticalLink "
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              <div className="verticapText  ">
                <div className="divideractive"></div>
                <i className="fa-solid fa-newspaper iconVert"></i>Gallery
              </div>
            </a>
          </div>
          <div
            className="nav flex-column nav-pills verticalIl Commet"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <div className="CommetHead"> Commets</div>
            {Comment.slice(0, 10).map((commet) => (
              <div>
                <span className="nav-item nav-link navIcon CommetEC">EC</span>
                <span className="nav-item nav-link  Navuser CommetText ">
                  {commet.email} <span className="time">14 min</span>
                </span>
                <p className="CommetP">{commet.body}</p>
              </div>
            ))}

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control inputfrm"
                placeholder="Type your comment here"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <button type="button" className="btn btn-primary">
                Send
              </button>
            </div>
          </div>
        </div>

        <div className="col xs-12 col-lg-6 col-xl-8 col-xxl-6">
          {album.map((alb) => (
            <div className="Album">
              <h3 style={ {marginBottom:"20"}}>{alb.title}</h3>
              <Carousel key={alb.id}>
                {Photos.map((photo) =>
                  alb.id == photo.albumId ? (
                    <Carousel.Item key={photo.id}>
                      <Image 
                        className="d-block w-100 slider"
                        src={photo.url}
                        rounded 
                      />
                      <div   className="ptr">{photo.title}</div>
                    </Carousel.Item>
                  ) : null
                )}
              </Carousel>
            </div>
          ))}
        </div>
        <div className="d-none d-xxl-block  col-xxl-3 ">
          <div
            className="bg-image hover-overlay Right"
            style={{ maxWidth: "24rem" }}
          >
            <img src="./image/Right.png" className="img-fluid" />
            <a href="#!">
              <div
                className="mask overlay"
                style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}
              ></div>
            </a>
          </div>
          {/* <div className='Right'>   
            <img src="./image/Right.png"class="img-fluid" alt="Responsive image"/>

 </div> */}
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center pagination justify-content-center mt-3">
          <Pagination size="lg">
            <Pagination.First onClick={handleFirst} />
            <Pagination.Prev onClick={handlePrev} />

            <Pagination.Item>{currentPage}</Pagination.Item>

            <Pagination.Next onClick={handleNext} />
            <Pagination.Last onClick={handleLast} />
          </Pagination>
        </div>
      </div>
    </>
  );
}

export default Body;
