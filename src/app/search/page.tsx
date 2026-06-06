interface SearchPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
export default async function SearchPage(props: SearchPageProps) {
  const { searchParams } = props;
  const query = await searchParams
  console.log(query)

  return (
    <div>cihuy</div>
  )
}
