import Container from "@/components/Container";
import AlbumList from "@/components/pages/home/AlbumList";
import Alltabs from "@/components/pages/search/Alltabs";
import SongTabs from "@/components/pages/search/SongTabs";
import Playlist from "@/components/Playlist";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SearchPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
export default async function SearchPage(props: SearchPageProps) {
  const { searchParams } = props;
  const query = await searchParams;

  return (
    <Container>
      <Tabs defaultValue="all" className="mt-4">
        <TabsList className="bg-background max-w-108 w-full gap-x-4 mb-2 sticky top-2 left-0 right-0 z-80">
          <TabsTrigger
            value="all"
            className="dark:data-active:bg-white/90 dark:data-active:text-background dark:data-active:hover:text-background px-3"
          >
            All
          </TabsTrigger>
          <TabsTrigger
            className="dark:data-active:bg-white/90 dark:data-active:text-background dark:data-active:hover:text-background px-3"
            value="song"
          >
            Song
          </TabsTrigger>
          <TabsTrigger
            className="dark:data-active:bg-white/90 dark:data-active:text-background dark:data-active:hover:text-background px-3"
            value="album"
          >
            Album
          </TabsTrigger>
          <TabsTrigger
            className="dark:data-active:bg-white/90 dark:data-active:text-background dark:data-active:hover:text-background px-3"
            value="playlist"
          >
            Playlist
          </TabsTrigger>
          <TabsTrigger
            className="dark:data-active:bg-white/90 dark:data-active:text-background dark:data-active:hover:text-background px-3"
            value="artist"
          >
            Artist
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <Alltabs />
        </TabsContent>
        <TabsContent value="song">
          <SongTabs />
        </TabsContent>
        <TabsContent value="album">
          <AlbumList />
        </TabsContent>
        <TabsContent value="playlist">
          <Playlist />
        </TabsContent>
      </Tabs>
    </Container>
  );
}
