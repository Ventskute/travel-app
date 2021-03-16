import React from 'react';
import AllUsersRatings from './AllUsersRatings/AllUsersRatings';
import './AttractionsRating.scss';
import ava1 from '../../assets/img/slider-img1.jpeg';
import ava2 from '../../assets/img/slider-img2.jpeg';
import ava3 from '../../assets/img/slider-img3.jpeg';

function AttractionsRating({ currentImage, countryState }) {
  //временные данные (потом возьмем с бэка)
  const [ratings, setratings] = React.useState([
    {
      score: 0,
      user: {
        name: 'Vasya',
        avatar: ava1,
      },
    },
    {
      score: 4,
      user: {
        name: 'Petya',
        avatar: ava2,
      },
    },
    {
      score: 3,
      user: {
        name: 'Galya',
        avatar: ava3,
      },
    },
  ]);
  const currUser = 'Galya';
  //_________________________________________

  const { attractions } = countryState;
  const [rating, setRating] = React.useState(0);
  const [totalRating, setTotalRating] = React.useState(attractions.rating || 0);
  const rateArr = Array(5).fill(null);
  const [showAll, setShowAll] = React.useState(false);

  React.useEffect(() => {
    // проверка объекта проголосовавших на соответствие текущему пользователю и взятие его рейтинга, будет брать рейтинг после каждой смены картинки
    ratings.map((el) => {
      if (el.user.name === currUser) {
        setRating(el.score);
      }
      ratings.map((el, index) => console.log(el, index));
    });
  }, [currentImage]);

  const getRating = (index) => {
    setRating(index + 1);
    // сдесь будет put рейтинга на бэк
    ratings.map((el) => {
      if (el.user.name === currUser) {
        el.score = index + 1;
      }
    });
  };

  return (
    <div className="info">
      <h3 className="info__title">{attractions[currentImage].name}</h3>
      <div className="info__description">{attractions[currentImage].description}</div>

      <div className={`attractions-rating`}>
        <button
          className={`button button__show-all-ratings`}
          onClick={() => (!showAll ? setShowAll(true) : setShowAll(false))}>
          {!showAll ? `show all ratings` : `close all ratings`}
        </button>
        {showAll && <AllUsersRatings ratings={ratings} />}
        <div className="attractions-rating__my-rating">
          <div className="rate-block">
            {rateArr.map((el, index) => (
              <div
                className={`attractions-rating__my-rating_point attractions-rating__point_${
                  index >= rating ? 'disabled' : 'selected'
                }`}
                onClick={() => getRating(index)}
                key={index}></div>
            ))}
          </div>
          <div>{`My rating : ${rating}`}</div>
          <div>{`Total: ${totalRating}`}</div>
        </div>
      </div>
    </div>
  );
}

export default AttractionsRating;
