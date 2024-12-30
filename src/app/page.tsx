import { client } from "@/sanity/lib/client";

interface Ibook {
  price: number; 
  auther: string; 
  name: string; 
  id: string; 
}

export default async function Page() {
  const res: Ibook[] = await client.fetch("*[_type == 'book']");

  return (
    <div>
      {res.map((data) => {
        return (
          <div key={data.id}> {/* Adding unique key */}
            <h1>
              {data.name}, {data.auther}, {data.price}
            </h1>
          </div>
        );
      })}
    </div>
  );
}
