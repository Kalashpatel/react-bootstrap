import React from "react";
import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";
import blog3 from "../assets/images/blog3.jpg";

const blogData = [
  {
    id: 1,
    img: blog1,
    date: { day: "19", month: "Dec" },
    author: "Admin",
    comments: 0,
    title: "Not your ordinary multi service.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sodales quisque litora dapibus primis lacinia."
  },
  {
    id: 2,
    img: blog2,
    date: { day: "19", month: "Dec" },
    author: "Admin",
    comments: 0,
    title: "We bring you the best by working",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sodales quisque litora dapibus primis lacinia."
  },
  {
    id: 3,
    img: blog3,
    date: { day: "19", month: "Dec" },
    author: "Admin",
    comments: 0,
    title: "We design functional best multi",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sodales quisque litora dapibus primis lacinia."
  }
];

export default blogData;