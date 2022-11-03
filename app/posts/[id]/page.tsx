// async function getSlug(aboutSlug: string) {
//      const slug = await aboutSlug

//      return console.log(slug)
// }

export default async function handler({ params }: any) {
  const slug = await params.id;

  return <div>{slug}</div>;
}
