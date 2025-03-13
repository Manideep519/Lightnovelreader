import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import ReactTooltip from "react-tooltip";
import Skeleton from "react-loading-skeleton";
import ReactPaginate from "react-paginate";
import StarRatingComponent from "react-star-rating-component";

// css
import styles from "./AllNovelList.module.scss";
import { Link } from "react-router-dom";

const AllNovelList = () => {
  const [novelList, setNovelList] = useState();
  const [activePage, setActivePage] = useState(1);
  const [category, setCategory] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const request = axios.CancelToken.source();
    function getNovelList() {
      setIsLoading(true);
      axios
        .get(`novel-list/${activePage}/${category ? category : "views"}`, {
          cancelToken: request.token,
        })
        .then((response) => {
          setNovelList(response.data);
          setIsLoading(false);
          console.log(response.data);
        })
        .catch((error) => {
          setIsLoading(true);
          console.log("Error in getNovelList :" + error);
        });
    }
    getNovelList();
    return () => {
      request.cancel();
    };
  }, [activePage, category]);

  const handlePageClick = (e) => {
    setActivePage(e.selected + 1);
  };

  const handleCategoryClick = (e) => {
    setCategory(e.target.value);
  };

  return (
    <Container className="container section__sortlist">
      <div className="d-flex align-items-end">
        <div>
          <h3>All novels</h3>
        </div>
        <FloatingLabel className="ms-auto" controlId="floatingSelect" label="Sort by">
          <Form.Select
            disabled={isLoading}
            onChange={handleCategoryClick}
            aria-label="Floating label"
          >
            <option value="views">Most views</option>
            <option value="trending">Trending</option>
            <option value="latest">Last updated</option>
            <option value="new">New</option>
            <option value="alphabet">A-Z</option>
          </Form.Select>
        </FloatingLabel>
      </div>

      <hr />
      <Container className="sortnovellist">
        <Row>
          {!isLoading && novelList ? (
            novelList.map((obj, i) => {
              return (
                <Col key={i} lg={2} md={3} xs={4}>
                  <Link data-tip={obj.title} to={`${obj.link}`} className={styles.novellist__box}>
                    <div>
                      <img src={obj.imageUrl} alt={`${obj.title}`} />
                    </div>
                    <div>
                      <h6>{obj.title}</h6>
                      <div className="text-muted lh-1">
                        <StarRatingComponent
                          name={"Rating"}
                          value={Math.floor(Number(obj.score))}
                          starCount={5}
                          editing={false}
                        />
                        <p>{obj.score}</p>
                      </div>
                      <p className="text-muted">{`${obj.lastestChapter.replace(
                        /[^0-9]/g,
                        ""
                      )} Chapters`}</p>
                    </div>
                  </Link>
                  <ReactTooltip />
                </Col>
              );
            })
          ) : (
            <Col>
              <Skeleton height={150}></Skeleton>
              <h6>
                <Skeleton />
              </h6>
              <Skeleton count={2} />
              <Skeleton height={150}></Skeleton>
              <h6>
                <Skeleton />
              </h6>
              <Skeleton count={2} />
            </Col>
          )}
        </Row>
        <hr />
        <ReactPaginate
          nextLabel=">"
          marginPagesDisplayed={1}
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={82}
          previousLabel={"<"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakLabel="..."
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          containerClassName={"pagination"}
          activeClassName={"active"}
          renderOnZeroPageCount={null}
        />
      </Container>
    </Container>
  );
};

export default AllNovelList;
