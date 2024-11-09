import React from "react";
import Header from "./Header";
import Card from "./Card";
const data =[
{
id: 0,
title: "Tic Tac Toe",
desc: "A Tic-Tac-Toe game built with Next.js where players take turns marking X or O on a 3x3 grid.",
img: "/project-1.png",
tags: ["React", "Node", "CSS", "Typescript"],
},
{
    id: 1,
    title: "Calculator",
    desc: "A calculator app built with Next.js involves creating React components for the display and buttons.",
    img: "/project-2.png",
    tags: ["React", "Node", "CSS", "Typescript"],
    },
{
    id: 2,
    title: "Figma to next.js",
    desc: "Converting Figma designs to Next.js code involves translating the visual design elements into React components.",
    img: "/project-3.png",
    tags: ["React", "Node", "CSS", "Typescript"],
},
];
const Projects =() =>{
    return(
        <div id='Projects' className="container pt-32">
            <Header title="My projects" />
            <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                {data.map((el) => (<Card
                key={el.id}
                title={el.title}
                desc={el.desc}
                img={el.img}
                tags={el.tags}
                />))}
            </div>
        </div>
    )
}

export default Projects