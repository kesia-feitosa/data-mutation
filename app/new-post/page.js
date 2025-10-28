import PostForm from "@/components/post-form";
import { createPost } from "../actions/posts";

export default function NewPostPage() {
  //client-side form action
  
  return <PostForm action={createPost} />;
}
