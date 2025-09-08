import React from "react";
import "./main.css";
import Publications from "./Publications";
import { Link } from "@mui/material";
import FancyPreviewLink from "../components/FancyPreviewLink";
import HoverLivePreviewLink from "../components/HoverLivePreviewLink";
import { color } from "framer-motion";

const pubs1 = [
{ title: "Efficiency Attack and Defences Towards Deep Learning Systems",
authors: ["Ravishka Rathnasuriya", "Tingxi Li", "Zexin Xu", "Zihe Song", "Jun Ren", "Mirazul Haque", "Simin Chen", "Wei Yang"], venue: "Usenix Sec", year: "2025",
pdf: "https://www.usenix.org/system/files/usenixsecurity25-rathnasuriya.pdf", github: "https://zenodo.org/records/15649771" }
];

const pubs2 = [
{ title: " COMET: Closed-loop Orchestration for Malicious Elicitation Techniques in Code Models",
authors: ["Zexin Xu", "Tingxi Li", "Ravishka Rathnasuriya", "Zihe Song", "Jun Ren", "Bhavesh Mandalapu", "Soroush Setayeshpour", "Xinya Du", "Wei Yang"], venue: "Technical Report", year: "2025",
pdf: "https://assets.amazon.science/6f/16/076dff834864823e4f09322d1495/astro-comet-closed-loop-orchestration-for-malicious-elicitation-techniques-in-code-models.pdf"}
];

export default function Main() {
  return (
    <div className="main">
      <p className="myname">Tingxi Li</p>

      <p className="addressline">800 W Campbell Rd, Richardson, TX 75080</p>

      <p className="contactline">tingxi.li [at] utdallas.edu</p>

      <p className="heading">Bio</p>

      <p className="normal-text">
        i'm a <s>1st</s> 2nd year phd student in computer science at <HoverLivePreviewLink href="https://www.utdallas.edu/" text="ut dallas" placement="right" ></HoverLivePreviewLink>, advised by <HoverLivePreviewLink href="https://youngwei.com/" text="prof. wei yang"></HoverLivePreviewLink>. 
        prior to that, i earned my bachelor's degree at <HoverLivePreviewLink href="https://en.dlut.edu.cn/" text="dalian university of 
        technology"></HoverLivePreviewLink>, and was a visiting student at <HoverLivePreviewLink href="https://www.tum.de/en" text="technical university of munich" fallbackImg="/previews/tum_preview.webp"></HoverLivePreviewLink>.</p>

      <p className="heading">Research Interests</p>

      <p className="normal-text">
        i am broadly interested in artificial intelligence and software engineering, particularly at the intersection of the two. more specifically, i focus on enhancing the efficiency and robustness of deep learning systems against malicious inputs, as well as leveraging large language models for software testing.
      </p>

      <p className="normal-text-highlight">i am actively seeking internship opportunities starting in summer 2026.</p>

      <p className="heading">Education</p>

      <div className="line-left-right">
        <p className="normal-text" style={{fontSize: "18px"}}>
          The University of Texas at Dallas
        </p>
        <p className="normal-text" style={{fontStyle: "italic" , fontSize: "17px"}}>
          Doctor of Philosophy, 2024 - present
        </p>
      </div>

      <div className="line-left-right">
        <p className="normal-text" style={{fontSize: "18px"}}>
          Dalian University of Technology
        </p>
        <p className="normal-text" style={{fontStyle: "italic" , fontSize: "17px"}}>
          Bachelor of Science, 2019 - 2024
        </p>
      </div>

      <div className="line-left-right">
        <p className="normal-text" style={{fontSize: "18px"}}>
          Technical University of Munich
        </p>
        <p className="normal-text" style={{fontStyle: "italic" , fontSize: "17px"}}>
          Visiting Student, 2022 - 2022
        </p>
      </div>

      <p className="heading">Publications</p>

      <Publications items={pubs1} me="Tingxi Li" />

      <Publications items={pubs2} me="Tingxi Li" />

      <p className="heading">Experience</p>

      <div className="line-left-right">
        <p className="normal-text" style={{fontSize: "18px"}}>
          SOPHGO
        </p>
        <p className="normal-text" style={{fontStyle: "italic" , fontSize: "17px"}}>
          Research Intern, May 2024 - Aug 2024
        </p>
      </div>

      <p className="normal-text" style={{color: "#666666", fontSize: "16px"}}>refactored c++ code, tested the refactored code to ensure compilation and functionality, and wrote documentation.</p>

      <div className="line-left-right">
        <p className="normal-text" style={{fontSize: "18px"}}>
          Amazon Nova AI Challenge: Trusted AI
        </p>
        <p className="normal-text" style={{fontStyle: "italic" , fontSize: "17px"}}>
          Finalist Team, Nov 2024 - Jul 2025
        </p>
      </div>

      <p className="normal-text" style={{color: "#666666", fontSize: "16px"}}>team member of one of the red teaming finalists. develop surrogate model to help evaluating adversarial probes and refine attack strategies based on the findings.</p>


      <p className="heading">Teaching</p>

      <div className="line-left-right">
        <p className="normal-text" style={{fontSize: "18px"}}>
          CS4375: Introduction to Machine Learning
        </p>
        <p className="normal-text" style={{fontStyle: "italic" , fontSize: "17px"}}>
          Teaching Assistant, 2024 Fall
        </p>
      </div>

      <p className="normal-text" style={{color: "#666666", fontSize: "16px"}}>host office hours, design exam questions and deliver review lectures for the course</p>

      <div className="line-left-right">
        <p className="normal-text" style={{fontSize: "18px"}}>
          CS4375: Introduction to Machine Learning
        </p>
        <p className="normal-text" style={{fontStyle: "italic" , fontSize: "17px"}}>
          Teaching Assistant, 2025 Fall
        </p>
      </div>

      <p className="normal-text" style={{color: "#666666", fontSize: "16px"}}>host  office hours; teach introductory level of machine learning compilation, vllm, sglang, tilelang and triton; design coding assignments</p>


      <p className="heading">Misc.</p>


    </div>
  );
}