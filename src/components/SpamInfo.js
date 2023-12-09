import React from "react";
import emailCheck from "../images/emailcheck.png";
import moneyCheck from "../images/moneyemail.png";
import linkCheck from "../images/linkcheck.jpeg";
import greetingsCheck from "../images/greetingsCheck.png";
import grammerCheck from "../images/grammerCheck.png";

function SpamInfo() {
  return (
    <div className="bg-white text-black p-16 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">
        Tips for Detecting Spam Emails
      </h1>
      <p className="mb-6 text-lg">
        Spam emails can be tricky, but by being vigilant, you can identify and
        avoid falling victim to them. Here are some tips:
      </p>
      <ul className="text-left list-disc pl-6">
        <li>
          Check the sender's email address for inconsistencies or misspellings.
        </li>
        <img
          src={emailCheck}
          alt="Sender Address"
          className="mr-4  shadow-md"
        />
        <li>
          Be cautious of unexpected emails requesting personal or financial
          information.
        </li>
        <img
          src={moneyCheck}
          alt="Sender Address"
          className="mr-4  shadow-md"
          style={{ width: "40rem", height: "20rem" }}
        />
        <li>
          Avoid clicking on links or downloading attachments from unknown
          sources.
        </li>
        <img
          src={linkCheck}
          alt="Sender Address"
          className="mr-4  shadow-md"
          style={{ width: "40rem", height: "20rem" }}
        />
        <li>
          Look for generic greetings or messages that create a sense of urgency.
        </li>
        <img
          src={greetingsCheck}
          alt="Sender Address"
          className="mr-4  shadow-md"
          style={{ width: "40rem", height: "20rem" }}
        />
        <li>
          Check for poor grammar and spelling, as professional organizations
          usually proofread their emails.
        </li>
        <img
          src={grammerCheck}
          alt="Sender Address"
          className="mr-4  shadow-md"
          style={{ width: "40rem", height: "20rem" }}
        />
      </ul>
    </div>
  );
}

export default SpamInfo;
