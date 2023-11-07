import React from 'react';

function HowItWorks() {
  return (
    <div className="bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">How the AI Email Detection Works</h1>
      <section className="mb-6">
        <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
        <p className="text-lg">
          Our AI Email Detection system is a sophisticated tool designed to identify and flag phishing attempts in your inbox. Using a blend of machine learning algorithms and analysis, the system provides a robust defense against common and emerging email threats.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-3xl font-semibold mb-4">Step 1: Input Email</h2>
        <p className="text-lg">
          The process begins with feeding the system any genuine or suspicious emails you receive. This can be done copying and pasting the entire email content you received including the subject line.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-3xl font-semibold mb-4">Step 2: Email Processing</h2>
        <p className="text-lg">
          The system then analyzes the email, extracting key features such as the sender’s email address, the email’s subject line, and the content of the email. The system uses LLM to detect common scam methods and will identify patterns. 
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-3xl font-semibold mb-4">Step 3: Email Detection & Results</h2>
        <p className="text-lg">
        Our system will then use the extracted features to determine whether the email is a scam or not. The system will then output the results of the analysis, including the email’s authenticity and the likelihood of it being a scam.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-3xl font-semibold mb-4">Conclusion</h2>
        <p className="text-lg">
        The AI Email Detection system serves as a vigilant guardian for your digital correspondence. By continuously learning and adapting to new phishing techniques, it offers an ever-improving shield against email-based threats, keeping your personal and professional communications secure.
        </p>
      </section>
    </div>
  );
}

export default HowItWorks;
