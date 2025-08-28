import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const posts = [ 
        {id: 1, title: "Blog 1", content: "This is the first blog post"},
        {id: 2, title: "Blog 2", content: "This is the second blog post"},
        {id: 3, title: "Blog 3", content: "This is the third blog post"},
    ]
    return new Response(JSON.stringify(posts), {
        status: 200,
        headers: {"Content-Type": "application/json"},
    })
}

