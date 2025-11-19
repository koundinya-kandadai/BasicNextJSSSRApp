export const dynamic = 'force-dynamic'; // This ensures the page is always server-rendered

export default function ServerTimePage() {
    // This code runs on the server for every request
    const serverTime = new Date().toISOString();
    
    // Generate random 6 MB text
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
    const targetSize = 6 * 1024 * 1024; // 6 MB
    let randomText = '';
    for (let i = 0; i < targetSize; i++) {
        randomText += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    console.log(`[SSR] Page rendered at: ${serverTime}}`);
    return (
        <div>
            <h1>The Current server time: <span>{serverTime}</span></h1>
            <p style={{ display: 'none' }}>{randomText}</p>
        </div>
    );
}

