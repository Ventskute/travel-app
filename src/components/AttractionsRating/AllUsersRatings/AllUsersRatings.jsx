import React from 'react';

function AllUsersRatings({ ratings }) {
  return (
    <div className="all-users-ratings">
      {ratings.map((el, index) => (
        <div className={`all-users-ratings__user${index}`} key={index}>
          <img className={`all-users-ratings__user${index}_avatar`} src={el.user.avatar} />
          <span className={`all-users-ratings__user${index}_name`}>{el.user.name}</span>
          <span className={`all-users-ratings__user${index}_score`}>
            {Array(5)
              .fill(null)
              .map((e, index) => (
                <div
                  className={`attractions-rating__point attractions-rating__point_${
                    index >= el.score ? 'disabled' : 'selected'
                  }`}
                  key={index}></div>
              ))}
          </span>
        </div>
      ))}
    </div>
  );
}

export default AllUsersRatings;
