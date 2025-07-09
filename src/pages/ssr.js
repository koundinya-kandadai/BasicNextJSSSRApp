export async function getServerSideProps(context) {
  const time = new Date().toISOString();
  console.log(`[SSR] Page rendered at: ${time}}`);
  return {
    props: {
      serverTime: time,
    },
  };
}
export default function SSRPage({ serverTime }) {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Server-Side Rendering (SSR) Page</h1>
      <p>This page was rendered on the server at:</p>
      <strong>{serverTime}</strong>
    </div>
  );
}