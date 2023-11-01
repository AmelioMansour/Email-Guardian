import React, { useState } from 'react';
import axios from 'axios';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'; // Import React icons


function EmailAnalyzer() {
    const [emailContent, setEmailContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        //console.log('emailContent', emailContent);

        e.preventDefault();
        setIsLoading(true);

        const prompt = `Please analyze the following email content for spam or fraudulent
         content and provide a rating on a scale of 1 to 100, where 1 means not spam or fraudulent
          at all, and 100 means highly likely to be spam or fraudulent. Please grade the email 
          very strictly.

        Email Content:
        "${emailContent}"

        Ratings:
        Spam Score: 
        Fraudulent Score: 
        Read Time:
        Overall Risk Score: `;

        const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
        const orgId = process.env.REACT_APP_OPENAI_API_ORGID;
        // use for testing your env key and org id r setup right
        // console.log('apiKey', apiKey);
        // console.log('orgId', orgId);    

        try {
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-3.5-turbo-0613',
                    temperature: 0.0,
                    messages: [


                        { role: 'system', content: prompt }
                    ],
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'OpenAI-Organization': orgId,
                        Authorization: `Bearer ${apiKey}`,
                    },
                }
            );
            console.log(response.data.choices[0].message.content);

            setIsLoading(false);
            setResult(response.data.choices[0].message.content);

        } catch (error) {
            console.error('Error:', error);
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-black text-black p-16 min-h-screen flex flex-col items-center ">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Email Fraud Detector</h1>
                <p className="mb-4 text-lg" >Paste the email content below and click "Analyze" to get the spam and fraudulent ratings.</p>
            </div>
            <form onSubmit={handleSubmit} className="w-full max-w-xl">
                <textarea
                    value={emailContent}
                    onChange={(e) => setEmailContent(e.target.value)}
                    rows="20"
                    className="w-full p-8 mb-4"
                    placeholder="Paste the email content here..."
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 w-full">
                    {isLoading ? 'Analyzing...' : 'Analyze'}
                </button>
            </form>
            {result && (
                <div className="mt-6 mb-4 text-left w-full max-w-lg text-xl"> {/* Adjust max-w-lg for a wider section */}
                    <h1 className="font-bold text-2xl mb-2">Results:</h1>
                    <ul className="list-disc pl-6">
                        {result.split('\n').map((line, index) => {
                            // Check if the line contains a score and parse it
                            const scoreMatch = line.match(/(\d+)/);
                            if (scoreMatch) {
                                const score = parseInt(scoreMatch[0]);
                                return (
                                    <li key={index}>
                                        {score > 20 ? (
                                            <AiOutlineCloseCircle className="inline text-red-600" />
                                        ) : (
                                            <AiOutlineCheckCircle className="inline text-green-600" />
                                        )}{' '}
                                        {line}
                                    </li>
                                );
                            }
                            return (
                                <li key={index}>
                                    <AiOutlineCheckCircle className="inline text-green-600" /> {line}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}






export default EmailAnalyzer;
