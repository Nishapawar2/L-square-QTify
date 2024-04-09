import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";

const Section = ({ title, data, filterSource, type }) => {
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleCarToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };

  useEffect(() => {
    if (filterSource) {
      filterSource().then((res) => {
        const { data } = res;
        setFilters([...filters, ...data]);
      });
    }
  }, []);

  const showFilters = filters.length > 1;
  const cardsToRender = data.filter((card) =>
    showFilters && selectedFilterIndex !== 0
      ? card.genre.key === filters[selectedFilterIndex].key
      : card
  );

  // console.log("filters",filters);

  return (
    <>
      <div className={styles.headerDiv}>
        <h3>{title}</h3>
        {type==='album'?
        <h4 className={styles.toggle} onClick={handleCarToggle}>
          {!carouselToggle ? "Collapse All" : "Show All"}
        </h4>
        :<></>}
      </div>

      {showFilters && (
        <div className={styles.filterDiv}>
          <Filters
            filters={filters}
            selectedFilterIndex={selectedFilterIndex}
            setSelectedFilterIndex={setSelectedFilterIndex}
          />
        </div>
      )}

      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.CardWrapper}>
          {!carouselToggle ? (
            <>
              <div className={styles.wrapper}>
                {cardsToRender.map((ele) => (
                  <Card data={ele} type={type} />
                ))}
              </div>
            </>
          ) : (
            <>
              <Carousel
                data={cardsToRender}
                renderComponent={(data) => <Card data={data} type={type} />}
              />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Section;
