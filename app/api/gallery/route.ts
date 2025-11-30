import { NextResponse } from "next/server";
import {v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
    try {
        const result = await cloudinary.search
            .expression('tags=tyc-images')
            .sort_by('created_at', 'asc')
            .max_results(100)
            .execute();
        return NextResponse.json({ resources: result.resources});
    } catch (error) {
        console.error('Cloudinary error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch images'},
            { status: 500}
        );
    }
}