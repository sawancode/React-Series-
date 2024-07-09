import React, { useState, useEffect } from 'react';

function Github() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://github.com/sawancode')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      {data ? (
        <>
          Github Followers: {data.followers}
          <img src={data.avatar_url} alt="Git picture" width={300} />
        </>
      ) : (
        'Loading...'
      )}
    </div>
  );
}

export default Github;
