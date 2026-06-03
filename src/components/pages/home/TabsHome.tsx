import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsHome() {
  return (
    <Tabs defaultValue="all">
      <TabsList className="bg-transparent gap-x-4 mb-2">
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
      <TabsContent value="all">All ni cuy</TabsContent>
      <TabsContent value="song">Song ni cuy</TabsContent>
      <TabsContent value="album">album ni cuy</TabsContent>
      <TabsContent value="artist">artist ni cuy</TabsContent>
    </Tabs>
  );
}
