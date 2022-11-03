async function getData() {
  const res = await fetch("https://next-x-pscale.vercel.app/api/posts");
  return res.json();
}

export default async function page() {
  const data = await getData();

  return (
    <>
      <h1 className="text-bold">Hello world</h1>
      {data.map((test: any, index: any) => (
        <div key={index}>
          <h2>{test.title}</h2>
          <p>{test.description}</p>
        </div>
      ))}
    </>
  );
}
