import React, { useState } from "react";
import './Mainews.css';
import img from '../images/trum.jpg';
import img1 from '../images/grounde.jpg';
import img2 from '../images/land.jpg';

const trendingTopics = [
    "Contract lawyers are facing a growing invasion of surveillance programs that monitor their work.",
    "Hawley claims American manhood is broken. Where are his solutions?",
    "Appeals court temporarily bars release of Trump records to the House Jan. 6 committee.",
    "Booster shots are most popular in states with low vaccination rates, where the virus rages.",
    "In Travis Scott's old neighborhood, residents rethink his status as a hometown hero."
];

const latestUpdates = [
    "White House on Defensive as Manchin raises concerns about new spending.",
    "House Democrats introduce resolution to censure Rep. Gosar over an animation that depicted him killing Rep. Ocasio-Cortez.",
    "New breakthroughs in renewable energy are promising for the future.",
    "Technology firms are investing heavily in quantum computing.",
    "Stock markets fluctuate amid rising inflation concerns."
];

function Mainews() {
    const [view, setView] = useState('trending'); 
    return (
        <div className="common">
            <div className="whole">
                <div className="firstpart">
                    <h2>White House on Defensive as Manchin raises concerns about new spending</h2>
                    <h4>No matter the eventual outcome, there was little sign that the negotiation
                        would achieve the kind of sweeping deal to battle back warnings that would satisfy the demands of youth activists.</h4>
                    <p>
                        By <span style={{ color: "red" }}>Micheal Jordy</span> and <span style={{ color: "red" }}>Sarah Ansari</span>
                    </p>
                    <p>33 minutes ago</p>
                </div>

                <div className="secondpart">
                    <h2>White House on Defensive as Manchin raises concerns about new spending</h2>
                    <h4>No matter the eventual outcome, there was little sign that the negotiation
                        would achieve the kind of sweeping deal to battle back warnings that would satisfy the demands of youth activists.</h4>
                    <p>
                        By <span style={{ color: "red" }}>Micheal Jordy</span> and <span style={{ color: "red" }}>Sarah Ansari</span>
                    </p>
                    <p>33 minutes ago</p>
                </div>

                <div className="thirdpart">
                    <h2>White House on Defensive as Manchin raises concerns about new spending</h2>
                    <h4>No matter the eventual outcome, there was little sign that the negotiation
                        would achieve the kind of sweeping deal to battle back warnings that would satisfy the demands of youth activists.</h4>
                    <p>
                        By <span style={{ color: "red" }}>Micheal Jordy</span> and <span style={{ color: "red" }}>Sarah Ansari</span>
                    </p>
                    <p>33 minutes ago</p>
                </div>
            </div>

            <div className="whole2">
                <img className="image" src={img} alt="Description " />

                <h1>House Democrats introduce resolution to censure Rep. Gosar over an animation that depicted him killing Rep. Ocasio-Cortez.</h1>
                <p>No matter the eventual outcome, there was little sign that the negotiation
                    would achieve the kind of sweeping deal to battle back warnings that would satisfy the demands of youth activists.</p>

                <div className="middle">
                    <p>
                        By <span style={{ color: "red" }}>Micheal Jordy</span> and <span style={{ color: "red" }}>Sarah Ansari</span>
                    </p>
                    <p>33 minutes ago</p>
                </div>

                <div className="secimg">
                    <img src={img1} alt="Description " />
                    <div className="secon">
                        <h2>White House on Defensive as Manchin raises concerns about new spending</h2>
                        <h4>No matter the eventual outcome, there was little sign that the negotiation
                            would achieve the kind of sweeping deal to battle back warnings that would satisfy the demands of youth activists.</h4>
                        <div className="middly">
                            <p>
                                By <span style={{ color: "red" }}>Micheal Jordy</span> and <span style={{ color: "red" }}>Sarah Ansari</span>
                            </p>
                            <p>33 minutes ago</p>
                        </div>
                    </div>
                </div>

                <div className="thirdimg">
                    <img src={img2} alt="Description " />
                    <div className="thirdon">
                        <h2>White House on Defensive as Manchin raises concerns about new spending</h2>
                        <h4>No matter the eventual outcome, there was little sign that the negotiation
                            would achieve the kind of sweeping deal to battle back warnings that would satisfy the demands of youth activists.</h4>
                        <div className="middlye">
                            <p>
                                By <span style={{ color: "red" }}>Micheal Jordy</span> and <span style={{ color: "red" }}>Sarah Ansari</span>
                            </p>
                            <p>33 minutes ago</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="whole3">
                <div className="titles">
                    <h2 
                        style={{ borderBottom: view === 'trending' ? "3px solid red" : "3px solid black", paddingBottom: "5px", cursor: "pointer" }}
                        onClick={() => setView('trending')}
                    >
                        Trending Topic
                    </h2>
                    <h2 
                        style={{ borderBottom: view === 'latest' ? "3px solid red" : "3px solid black", paddingBottom: "5px", marginLeft: "20px", cursor: "pointer" }}
                        onClick={() => setView('latest')}
                    >
                        Latest Update
                    </h2>
                </div>

                {view === 'trending' ? (
                    trendingTopics.map((topic, index) => (
                        <div className="twin" key={index}>
                            <h1> #{index + 1} </h1>
                            <p>{topic}</p>
                        </div>
                    ))
                ) : (
                    latestUpdates.map((update, index) => (
                        <div className="twin" key={index}>
                            <h1> #{index + 1} </h1>
                            <p>{update}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Mainews;