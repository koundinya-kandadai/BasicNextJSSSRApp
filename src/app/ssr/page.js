export const dynamic = 'force-dynamic'; // This ensures the page is always server-rendered

export default function ServerTimePage() {
    try {
        // This code runs on the server for every request
        const serverTime = new Date().toISOString();
        
        // Generate random 8 MB text
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
        const targetSize = 8 * 1024 * 1024; // 8 MB
        let randomText = '';
        for (let i = 0; i < targetSize; i++) {
            randomText += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        
        console.log(`[SSR] Page rendered at: ${serverTime}}`);
        console.log(`[SSR] Generated text size: ${randomText.length} characters (${(randomText.length / 1024 / 1024).toFixed(2)} MB)`);
        return (
            <div>
                <h1>Current server time: <span>{serverTime}</span></h1>
                <p style={{ display: 'none' }}>{randomText}</p>
            </div>
        );
    } catch (error) {
        console.error('[SSR] Error rendering page:', error);
        console.error('[SSR] Error stack:', error.stack);
        throw error;
    }
}
