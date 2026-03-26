import { NextRequest, NextResponse } from "next/server";

const posts = [
  { id: "1", title: "First Post" },
  { id: "2", title: "Second Post" },
];

/**
 * GET /api/posts?q=search
 */
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("q");

  let result = posts;

  if (query) {
    result = posts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase()),
    );
  }

  return NextResponse.json(result);
}

/**
 * POST /api/posts
 */
export async function POST(req: NextRequest) {
  const body = await req.json();

  const newPost = {
    id: Date.now().toString(),
    title: body.title,
  };

  posts.push(newPost);

  return NextResponse.json(newPost, { status: 201 });
}
