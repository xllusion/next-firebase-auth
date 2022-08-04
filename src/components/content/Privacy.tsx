import React from 'react';
import { DividerWave } from '..';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useEffect, useState } from 'react';

const canPassHref: boolean = true;

const Privacy: React.FC<{text: string}> = ({text}) => {
    // Can only load md file from '/public folder' if using fetch method
    // const [privacyPolicyText, setPrivacyPolicyText] = useState<string>('');
    // useEffect(() => {
    //   fetch('/privacy-policy.md')
    //     .then((res) => {
    //       return res.text();
    //     })
    //     .then((text) => {
    //       setPrivacyPolicyText(text);
    //     })
    //     .catch((error) => console.error(error));
    // }, []);

  return (
    <>
      <div className='grid w-full place-items-center -mt-16 pt-20 pb-8 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-green-400'>
        <article className='place-items-center justify-center max-w-7xl p-8 font-sans bg-white rounded-xl prose prose-headings:underline prose-a:text-blue-800'>
          <ReactMarkdown remarkPlugins={[remarkGfm]} className=''>
            {text}
          </ReactMarkdown>
        </article>
      </div>
    </>
  );
};

export default Privacy;
