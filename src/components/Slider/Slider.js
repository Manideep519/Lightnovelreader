import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Autoplay, Pagination } from "swiper";

import Skeleton from "react-loading-skeleton";
import axios from "axios";

// css
import { Container, Button } from "react-bootstrap";
import styles from "./Slider.module.scss";
import { Link } from "react-router-dom";

SwiperCore.use([Keyboard, Autoplay, Pagination]);

const Slider = () => {
  const [popularNovelData, setPopularNovelData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const request = axios.CancelToken.source();
    if (localStorage.getItem("popularNovels")) {
      setPopularNovelData(JSON.parse(localStorage.getItem("popularNovels")));
      setIsLoading(false);
    } else {
      getPopularNovelData();
    }

    function getPopularNovelData() {
      setIsLoading(true);
      axios
        .get("novel-list/1/views", {
          cancelToken: request.token,
        })
        .then((response) => {
          localStorage.setItem("popularNovels", JSON.stringify(response.data));
          setPopularNovelData(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("Error in slider " + error);
          setIsLoading(true);
        });
    }

    return () => {
      request.cancel();
    };
  }, []);

  return (
    <Container className="section__popular">
      <h3>Popular Novels</h3>
      <hr />
      <Swiper
        spaceBetween={20}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: true,
        // }}
      >
        {!isLoading && popularNovelData ? (
          popularNovelData.map((data, i) => {
            return (
              <SwiperSlide className={`${styles.slider__item} border`} key={i}>
                <div className={styles.slider__img}>
                  <img src={data.imageUrl} alt="web novel coverphoto" />
                </div>
                <div className={styles.slider__info}>
                  <h4>{data.title}</h4>
                  <h6>Rating : {data.score}</h6>
                  <h6>Last chapter :{data.lastestChapter}</h6>
                  <Link className={`${styles.slider__btn} btn btn-primary`} to={`/novel${data.link.replace("http://light-novel-scraper-api.herokuapp.com/novel", "")}`}>
                    View Novel
                  </Link>
                  <Link className={`${styles.slider__btn} btn btn-primary`} to={`/novel${data.link.replace("http://light-novel-scraper-api.herokuapp.com/novel", "")}chapter-1`}>
                    Start Reading
                  </Link>
                </div>
              </SwiperSlide>
            );
          })
        ) : (
          <SwiperSlide className={`${styles.slider__item} `}>
            <div className={styles.slider__img}>
              <Skeleton width={110} height={150}></Skeleton>
            </div>
            <div className={styles.slider__info}>
              <h4>
                <Skeleton width={"70%"} />
              </h4>
              <Skeleton count={2} width={"30%"} />
              <Button disabled={isLoading} className={styles.slider__btn} variant="primary">
                View Novel
              </Button>
              <Button disabled={isLoading} className={styles.slider__btn} variant="primary">
                Start Reading
              </Button>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </Container>
  );
};

export default Slider;
