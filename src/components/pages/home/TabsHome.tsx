import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AllTabs from "./AllTabs";
import SongList from "./SongList";
import AlbumList from "./AlbumList";
import ArtistList from "./ArtistList";
import RecentlyPlayed from "./RecentlyPlayed";

export default function TabsHome() {
  return (
    <Tabs defaultValue="all">
      <TabsList className="bg-background max-w-72 w-full gap-x-4 mb-2 sticky top-2 left-0 right-0 z-80">
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
          value="artist"
        >
          Artist
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all" className="overflow-hidden">
        <RecentlyPlayed />
        <AllTabs />
      </TabsContent>
      <TabsContent value="song">
        <SongList />
      </TabsContent>
      <TabsContent value="album">
        <AlbumList />
      </TabsContent>
      <TabsContent value="artist">
        <ArtistList />
      </TabsContent>
    </Tabs>
  );
}
