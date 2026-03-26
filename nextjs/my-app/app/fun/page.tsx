import { refresh } from "next/cache";
import { redirect } from "next/navigation";

async function createPost(formData: FormData) {
  "use server";
  const title = formData.get("title");
  const content = formData.get("content");
  console.log(title, content);
  redirect("/doctors");
}
const page = () => {
  return (
    <form action={createPost}>
      <input type="text" name="title" />
      <input type="text" name="content" />
      <button type="submit">Create</button>
    </form>
  );
};

export default page;
