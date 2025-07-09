// pages/index.js
import Link from 'next/link';
export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to the Next.js App</h1>
      <p>
        <Link href="/ssr">Go to SSR Page</Link>
      </p>
    </div>
  );
}