export const dynamic = 'force-dynamic'; // This ensures the page is always server-rendered

export default function ServerTimePage() {
    // This code runs on the server for every request
    const serverTime = new Date().toISOString();
    console.log(`[SSR] Page rendered at: ${serverTime}}`);
    return (
        <div>
            <h1>Current server time: <span>{serverTime}</span></h1>
        </div>
    );
}