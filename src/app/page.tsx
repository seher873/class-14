
import { client } from "@/sanity/lib/client";
interface Ibook {
  price: "number";
  auther: "string";
  name: "string";
  // slug:"slug";
  // image:"image";
  // heading:"string";
  // content:"string"

}

export default async function page() {
  let res: Ibook[] = await client.fetch("*[_type == 'book']");

  return (
    <div>
      {res.map((data) => {
        return (
          <div>
            <h1>{data.name},{data.auther},{data.price},</h1>
            
          </div>
        );
      })}
    </div>
  );
}
