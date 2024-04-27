import React from 'react';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleStartForFreeClick = () => {
    navigate('/Login');
  };

  return (
    <div className='backgroundcolor'>
      <div>
        <img src='./image/image.png' className='image6' />
      </div>
      <br />
      <br />

      <div className="ct-inner-content">
        <section id="section-2-243" className="ct-section">
          <div className="ct-section-inner-wrap">
            <div id="new_columns-3-243" className="ct-new-columns">
              <div id="div_block-4-243" className="ct-div-block">
                <h1 id="headline-5-243" className="ct-headline" style={{ color: 'grey' }}>
                  Online Voting System
                </h1>
                <p id="text_block-6-243" className="ct-text-block" style={{ color: 'darkgrey' }}>
                  With VoteForChange online voting system, your organization members can cast their vote anywhere and anytime with secure internet voting
                </p>
                <div>
                  <img src="https://electionbuddy.com/wp-content/uploads/2021/03/macbook-person.jpg" className='image1' />
                </div>
                <h2 id="headline-34-243" className="ct-headline" style={{ color: 'grey' }}>
                  What is Online Voting for an Election?
                </h2>
                <div id="_rich_text-58-245" className="oxy-rich-text" style={{ color: 'darkgrey' }}>
                  <p>Online voting (also known as electronic voting, or e-voting) is the process of using an electronic method to cast, and then tabulate, votes in an election. In a nutshell, this is what VoteForChange does. VoteForChange will help you through the full election process, from notifying voters and collecting votes to calculating the results of the election.</p>
                  <p>By contrast, before online voting, elections were conducted using paper to cast votes, and tallies were performed by hand. While non-online voting is still prevalent in today’s society, the automation of the most important (but arguably, the most tedious) parts of an election (i.e., the voting and tallying) is causing online voting to accumulate enormous popularity. <span>Using an internet voting site makes running an election simple and easy. Voters also enjoy participating in a remote election from any location.</span></p>
                  <p>Online voting not only increases convenience for everyone involved, but it also helps protect elections from a major risk to their integrity — human error. Ballots can get lost, mistakes can be made while calculating results, and humans can be influenced to tamper with an election. <span>An internet voting system and other online tools can automate the election process to eliminate errors and add necessary security. </span>VoteForChange protects the online voting process by limiting changes to the election during the voting period, providing audit trails of the few changes that ARE allowed, displaying results that can be manually calculated to verify the computer calculation, and more. Every detail is verifiable, and your election integrity is maintained. There are no secrets with online voting in an VoteForChange election — except your voters’ voting choices, of course!</p>
                  <figure className="articleimg left"></figure>
                </div>
                <div className='button-container'>
                  <a id="link_button-9-240" className="ct-link-button start-free-btn free-trial-ballot-types" onClick={handleStartForFreeClick} style={{ color: 'grey' }}>
                    Create Election Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
