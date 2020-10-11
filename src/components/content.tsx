import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "./globalState";
import { Loader } from "./loader";
import { colors } from "./constant";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";



export const Content = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [paginate, setPaginate] = useState<number>(0);
  const searchData = useContext(FilterContext);
  const { language, limit, rating, search } = searchData;
  const [datas, setData] = useState([]);
  console.log(paginate, "***************");
  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${search}&limit=${limit}&offset=${paginate}&rating=${rating}&lang=${language}&count=${limit}`
    )
      .then((res) => res.json())
      .then(async ({ data }: { data: any }) => {
        await setData(data);
        setLoading(false);
      });
  }, [language, limit, rating, search, paginate]);

  const fetchNextPage = () => {
    setPaginate(paginate + limit);
    setLoading(true);
  }
  const fetchPreviousPage = () => {
    if (paginate > 0) {
      setPaginate(paginate - limit);
      setLoading(true);
    }
  }



  function isEven(value) {
    if (value % 2 == 0)
      return true;
    else
      return false;
  }


  return (
    <div style={{ marginBottom: "-50px" }}>
      {loading && <Loader />}
      {datas && <div className="text-center" style={{ flexDirection: "row" }}>
        {paginate !== 0 && <button onClick={fetchPreviousPage} style={{ background: colors[Math.floor(Math.random() * colors.length)] }}>Previous Page</button>}

        <button onClick={fetchNextPage} style={{ background: colors[Math.floor(Math.random() * colors.length)] }}>Next Page</button>
      </div>}
      {

        datas && <div className="content">

          {datas.map(
            (i: { images: any, id: string }, intx): JSX.Element => {
              const randomColor = Math.floor(Math.random() * colors.length);
              console.log(randomColor);
              return (
                <Link to={`/gen/${i.id}`}>
                  <img id="mainImg" key={intx} src={i.images.downsized.url} width="175" height="150px" style={{ backgroundPosition: 'cover', border: `10px ${colors[randomColor]} solid `, margin: isEven(intx) ? "0" : "25px 15px 25px 10px" }} />
                </Link>
              );
            }
          )}
        </div>
      }

      <Footer />
    </div >
  );
};
