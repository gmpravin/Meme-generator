import React, { FC, useState } from "react";
import { lang, colors } from "./constant";

export const Sidebar: FC<{ FilterData: Function }> = (props): JSX.Element => {
  const [search, setSearch] = useState<string>("funny");
  const [limit, setLimit] = useState<number>(15);
  const [language, setLanguage] = useState<string>("en");
  const [rating, setRating] = useState<string>("g");

  const propsData = {
    search,
    limit,
    language,
    rating,
  };

  const submitHandler = (e: any): void => {
    e.preventDefault();
    props.FilterData(propsData);
  };



  return (
    <div className="Sidebar" style={{ padding: "20px 0 20px 0", background: "#121212" }}>
      <div className="navItems">
        <label>Search</label>
        <input
          type="text"
          width="30%"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          style={{
            border: `5px solid ${colors[Math.floor(Math.random() * colors.length)]}`,
            borderRadius: 4
          }}
        />
      </div>

      <div className="navItems">
        <label>Limit</label>
        <input
          type="number"
          width="30%"
          onChange={(e) => setLimit(parseInt(e.target.value, 0))}
          value={limit}
          style={{
            border: `5px solid ${colors[Math.floor(Math.random() * colors.length)]}`,
            borderRadius: 4
          }}
        />
      </div>

      <div className="navItems">
        <label>Rating</label>
        <select onChange={(e) => setRating(e.target.value)} value={rating} style={{
          border: `5px solid ${colors[Math.floor(Math.random() * colors.length)]}`,
          borderRadius: 4
        }}>
          <option value="g">g</option>
          <option value="pg">pg</option>
          <option value="pg-3">pg-3</option>
          <option value="r">r</option>
        </select>
      </div>
      <div className="navItems">
        <label>Language</label>
        <select onChange={(e) => setLanguage(e.target.value)} value={language} style={{
          border: `5px solid ${colors[Math.floor(Math.random() * colors.length)]}`,
          borderRadius: 4
        }}>
          {lang.map((value) => (
            <option value={value}>{value}</option>
          ))}
        </select>
      </div>


      <button onClick={submitHandler} style={{
        background: 'rgb(69, 39, 160)'
      }}>Filter</button>
    </div>
  );
};
