import { NextResponse } from 'next/server';

// Instagram API endpoint - using Instagram Basic Display API
// You'll need to set up Instagram App and get access token
// For now, this is a placeholder structure

export async function GET() {
  try {
    // Instagram Basic Display API endpoint
    const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
    const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID || 'the_alphacircle';
    
    if (!INSTAGRAM_ACCESS_TOKEN) {
      // Fallback: Return empty data so component can use embed fallback
      return NextResponse.json({ 
        data: [],
        error: 'Instagram access token not configured',
        message: 'Using embed fallback'
      }, { status: 200 });
    }

    // Fetch user media from Instagram Basic Display API
    const response = await fetch(
      `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=12`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Instagram posts');
    }

    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Instagram API Error:', error);
    
    // Fallback: Return empty array or use embed method
    return NextResponse.json({ 
      data: [],
      error: 'Failed to fetch Instagram feed'
    });
  }
}

