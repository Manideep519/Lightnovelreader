import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { Container, ListGroup } from "react-bootstrap";
import { useParams } from "react-router";

import styles from "./NovelDetails.module.scss";
import { Link } from "react-router-dom";
import Page from "../Page";
import { server_url } from "../../App";

const NovelDetails = () => {
  let { name } = useParams();

  const [novelInfo, setNovelInfo] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [listReverse, setListReverse] = useState(false);

  useEffect(() => {
    const request = axios.CancelToken.source();
    if (
      localStorage.getItem("currentNovelInfo") &&
      localStorage.getItem("currentNovelName") === name
    ) {
      setNovelInfo(JSON.parse(localStorage.getItem("currentNovelInfo")));
      setIsLoading(false);
    } else {
      getNovelInfo();
    }

    function getNovelInfo() {
      setIsLoading(true);
      axios
        .get(`novel/${name}`, {
          cancelToken: request.token,
        })
        .then((response) => {
          setNovelInfo(response.data);
          localStorage.setItem("currentNovelInfo", JSON.stringify(response.data));
          localStorage.setItem("currentNovelName", name);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(true);
          console.log("Error in getNovelInfo :" + error);
        });
    }

    return () => request.cancel();
  }, [name]);

  function reverseList() {
    setListReverse(!listReverse);
    document.getElementById("flex-reverse").style.flexDirection = listReverse
      ? "column"
      : "column-reverse";
  }

  return (
    <Page>
      <Container className="container">
        {!isLoading && novelInfo ? (
          <>
            <div className={styles.noveldetails__info}>
              <div className={styles.noveldetails__info__img}>
                <img src={novelInfo.imageUrl} alt={novelInfo.name.replace(/\n+/g, "")} />
              </div>
              <div className={styles.noveldetails__info__info}>
                <h3>{novelInfo.name.replace(/\n+/g, "")}</h3>
                <h5>Author: {novelInfo.author}</h5>
                <h5>Rating: {novelInfo.rating}</h5>
                <h5>
                  Geners :{" "}
                  {novelInfo.geners.map((data, i) => {
                    return <span key={i}>{data}&nbsp;</span>;
                  })}
                </h5>
                <h5>Status: {novelInfo.status.replace(/\n+/, "")}</h5>
              </div>
            </div>
            <h3>Summary</h3>
            <hr />
            <p dangerouslySetInnerHTML={{ __html: novelInfo.summary }}></p>
            <div className={`d-flex align-items-center ${styles.noveldetails__listtitle__flex}`}>
              <h3 className="mb-0 me-auto">Chapters</h3>
              <span onClick={reverseList}>
                Reverse <>⇅</>
              </span>
            </div>
            <hr />
            <div className={styles.noveldetails__chapterlist}>
              <ListGroup id="flex-reverse" as={"ul"}>
                {novelInfo.chaptersListData.map((data, i) => {
                  return (
                    <Link to={`${data.chapterLinkName.replace(server_url, "")}`} key={i}>
                      <span>{data.chapterName}</span>
                      <span>{data.chapterReleaseTime}</span>
                    </Link>
                  );
                })}
              </ListGroup>
            </div>
          </>
        ) : (
          <>
            <div className={styles.noveldetails__info}>
              <Skeleton width={200} height={250} className="m-2" />
              <div className="flex--fix m-2">
                <h3>
                  <Skeleton width={"60%"} />
                </h3>
                <Skeleton width={"40%"} count={4} />
              </div>
            </div>
            <h3>Summary</h3>
            <hr />
            <Skeleton count={6} width="80%" />
            <h3>Chapters</h3>
            <hr />
            <Skeleton count={7} height={"35px"} />
            <div className="mb-3"></div>
          </>
        )}
      </Container>
    </Page>
  );
};

export default NovelDetails;
