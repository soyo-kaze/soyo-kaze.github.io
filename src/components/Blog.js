import React from "react";

const blogs = [
  [
    {
      imgSrc: "https://miro.medium.com/max/1000/0*dK8A9FjNOFP-Uq6n",
      title: "How I published my first NPM package.",
      link: "https://soyokaze.medium.com/how-i-published-my-first-npm-package-dece3a1a90a0",
      date: "Sep 6, 2021",
    },
    {
      imgSrc: "https://miro.medium.com/max/1284/1*ReJCeRt3UrdFp65T8mWs1A.png",
      title: "Travis CI for newbies? What and how of it.",
      link: "https://medium.com/gdsc-bkbiet/travis-ci-for-newbies-what-and-how-of-it-fcd89f412e76",
      date: "Apr 28, 2021",
    },
    {
      imgSrc: "https://miro.medium.com/max/1000/1*uRo-QH8jLjxtx1--hng9tw.png",
      title: "Building a Discord bot in Node or Python.",
      link: "https://soyokaze.medium.com/build-a-discord-bot-in-node-or-python-3a4028099657",
      date: "Jun 29, 2021",
    },
  ],
  [
    {
      imgSrc: "https://miro.medium.com/max/2000/0*w_BHVyYyisexdMbM",
      title: "A beginner’s tour to What/Why/How of WSL!!",
      link: "https://medium.com/gdsc-bkbiet/a-beginners-tour-to-what-why-how-of-wsl-78dcd4cdea82",
      date: "Apr 17, 2021",
    },
  ],
];

const BlogCard = ({ imgSrc, title, link, date }) => {
  return (
    <>
      <a href={link} target="_blank">
        <div className="flex flex-col items-center justify-center rounded-xl shadow-lg max-w-sm">
          <div className="">
            <img
              src={imgSrc}
              className=" object-contain max-w-sm rounded-t-lg"
            />
          </div>
          <div className="p-4 flex flex-col w-full">
            <p className=" font-ubuntu font-semibold">{title}</p>
            <cite className="mt-2 font-light text-gray-500 text-sm">
              {date}
            </cite>
          </div>
        </div>
      </a>
    </>
  );
};

const Blog = () => {
  const marid = document.querySelector("#marID");
  return (
    <div
      id="blogs"
      className="flex flex-col mt-20 items-center justify-center container_div"
    >
      <p className="upper_header">Blogs</p>
      <div className="w-full flex flex-col justify-center items-center mt-10">
        {blogs.map((data) => (
          <div className="w-full flex flex-col md:flex-row justify-center items-center mb-10 space-x-0 space-y-6 md:space-y-0 md:space-x-6">
            {data.map((blog) => (
              <BlogCard
                imgSrc={blog.imgSrc}
                date={blog.date}
                title={blog.title}
                link={blog.link}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
