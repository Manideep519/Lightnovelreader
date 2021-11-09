import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

import { Container } from "react-bootstrap";
import styles from "./NovelReader.module.scss";
import { Link } from "react-router-dom";
import Page from "../Page";

const NovelReader = () => {
  const [chapterData, setChapterData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [currentNovelData, setCurrentNovelData] = useState();
  const [nextPrevChapter, setNextPrevChapters] = useState();

  const { name, number } = useParams();

  useEffect(() => {
    let request = axios.CancelToken.source();
    window.scrollTo(0, 0);
    function getChapterData() {
      setIsLoading(true);
      axios
        .get(`novel/${name}/${number}`)
        .then((response) => {
          setChapterData(response.data);
          setIsLoading(false);
        })
        .catch((e) => {
          setIsLoading(true);
          console.log(e);
        });
    }
    getChapterData();

    return () => request.cancel();
  }, [name, number]);

  useEffect(() => {
    const request = axios.CancelToken.source();
    if (localStorage.getItem("currentNovelInfo") && localStorage.getItem("currentNovelName") === name) {
      setCurrentNovelData(JSON.parse(localStorage.getItem("currentNovelInfo")));
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
          setCurrentNovelData(response.data);
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

  useEffect(() => {
    function getNextPrevChapters() {
      if (currentNovelData) {
        for (let i = 0; i < currentNovelData.chaptersListData.length; i++) {
          if (currentNovelData.chaptersListData[i].chapterLinkName.replace(`http://light-novel-scraper-api.herokuapp.com/novel/${name}/`, "") === number) {
            setNextPrevChapters({ currentChapterIndex: i, prevChapterIndex: i + 1, nextChapterIndex: i - 1 });
            break;
          } else {
            continue;
          }
        }
      }
    }
    getNextPrevChapters();
  }, [currentNovelData, name, number]);

  return (
    <Page>
      <Container className="container">
        {!isLoading && chapterData && currentNovelData && nextPrevChapter ? (
          <div className={styles.novelreader__container}>
            <div className={` ${styles.novelreader__title}`}>
              <div className={styles.novelreader__title__links}>
                <Link to={"/"}>
                  <span>Home /</span>
                </Link>
                <Link to={`/novel/${name}`}>
                  <span> {currentNovelData.name}</span>
                </Link>
                <p>{currentNovelData.chaptersListData[nextPrevChapter.currentChapterIndex].chapterName}</p>
              </div>
              <div>
                {nextPrevChapter.prevChapterIndex < currentNovelData.chaptersListData.length ? (
                  <Link to={`/novel/${name}/${currentNovelData.chaptersListData[nextPrevChapter.prevChapterIndex].chapterLinkName.replace(`http://light-novel-scraper-api.herokuapp.com/novel/${name}/`, "")}`} className={`btn btn-primary me-1`}>
                    <span> &larr; prev </span>
                  </Link>
                ) : null}

                {nextPrevChapter.nextChapterIndex >= 0 ? (
                  <Link to={`/novel/${name}/${currentNovelData.chaptersListData[nextPrevChapter.nextChapterIndex].chapterLinkName.replace(`http://light-novel-scraper-api.herokuapp.com/novel/${name}/`, "")}`} className={`btn btn-primary`}>
                    <span> next &rarr; </span>
                  </Link>
                ) : null}
              </div>
            </div>
            <div className={` ${styles.novelreader__view}`} dangerouslySetInnerHTML={{ __html: chapterData.data }} />

            <div className="d-flex justify-content-center py-3 ">
              {nextPrevChapter.prevChapterIndex < currentNovelData.chaptersListData.length ? (
                <Link to={`/novel/${name}/${currentNovelData.chaptersListData[nextPrevChapter.prevChapterIndex].chapterLinkName.replace(`http://light-novel-scraper-api.herokuapp.com/novel/${name}/`, "")}`} className={`btn btn-primary me-1`}>
                  <span> &larr; prev </span>
                </Link>
              ) : null}

              {nextPrevChapter.nextChapterIndex >= 0 ? (
                <Link to={`/novel/${name}/${currentNovelData.chaptersListData[nextPrevChapter.nextChapterIndex].chapterLinkName.replace(`http://light-novel-scraper-api.herokuapp.com/novel/${name}/`, "")}`} className={`btn btn-primary`}>
                  <span> next &rarr;</span>
                </Link>
              ) : null}
            </div>
          </div>
        ) : (
          <div className={styles.novelreader__container}>
            <div className={styles.novelreader__title}>
              <h6>
                <Skeleton width={200} />
                <Skeleton width={100} />
              </h6>
              <p>
                <Skeleton width={60} height={30} />
              </p>
            </div>
            <div className={styles.novelreader__view}>
              <Skeleton count={3} />
              <br />
              <Skeleton count={4} />
              <br />
              <Skeleton count={3} />
              <br />
              <Skeleton count={2} />
            </div>
          </div>
        )}
      </Container>
    </Page>
  );
};

export default NovelReader;
