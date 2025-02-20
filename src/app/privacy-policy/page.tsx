import { promises as fs } from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import './styles.css';

export default async function PrivacyPolicyPage() {
  const privacyContent = await fs.readFile(
    path.join(process.cwd(), 'privacy-policy.md'),
    'utf8'
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <svg 
            className="w-4 h-4 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
          Back to Home
        </Link>
      </div>
      <div className="mx-auto text-lg leading-relaxed text-gray-900 dark:text-gray-100">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="terms-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{privacyContent}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
