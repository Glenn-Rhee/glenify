import Container from "@/components/Container";
import { Music3 } from "lucide-react";
const lyrics = [
  "Who's gonna stop us from waltzing",
  "Back into rekindled flames?",
  "If we know the steps anyway",
  "We embroidered the memories",
  "Of the time I was away",
  'Stitching, "We were just kids, babe"',
  'I said, "I don\'t mind, it takes time"',
  "I thought I was better safe than starry-eyed",
  "I felt aglow like this",
  "Never before and never since",
  <Music3 fill="white" key={1} />,
  "If you know it in one glimpse, it's legendary",
  "You and I go from one kiss to gettin married",
  "Still alive, killing time at the cemetery",
  "Never quite buried",
  "In your suit and tie, in the nick of time",
  "You lowdown boy, you stand up guy",
  "Holy Ghost, you told me I'm",
  "The love of your life",
  <Music3 fill="white" key={2} />,
  "You said I'm the love of your life",
  "About a million times",
  <Music3 fill="white" key={3} />,
  "Who's gonna tell me the truth",
  "When you blew in with the winds of fate",
  "And told me I reformed you",
  "When your impressionist paintings of Heaven",
  "Turned out to be fakes",
  "Well, you took me to hell, too",
  "And all at once, the ink bleeds",
  "A con man sells a fool a get-love-quick scheme",
  "But I felt a hole like this",
  "Never before, and ever since",
  <Music3 fill="white" key={4} />,
  "If you know it in one glimpse",
  "It's legendary",
  "What we thought was for all time",
  "Was momentary",
  "Still alive, killing time at the cemetery",
  "Never quite buried",
  "You cinephile in black and white",
  "All those plot twists and dynamite",
  "Mr. Steal Your Girl, then make her cry",
  "You said I'm the love of your life",
  <Music3 fill="white" key={5} />,
  "You talked me under the table",
  "Talking rings and talking cradles",
  "I wish I could un-recall",
  "How we almost had it all",
  "Dancing phantoms on the terrace",
  "Are they second-hand embarrassed",
  "That I can't get out of bed?",
  "Cause something counterfeit's dead",
  "It was legendary",
  "It was momentary",
  "It was unnecessary",
  "Should've let it stay buried",
  <Music3 fill="white" key={6} />,
  "Oh, what a valiant roar",
  "What a bland goodbye",
  "The coward claimed he was a lion",
  "I'm combing through the braids of lies",
  '"I\'ll never leave" ... "Never mind"',
  "Our field of dreams, engulfed in fire",
  "Your arson's match your somber eyes",
  "And I'll still see it until I die",
  "You're the loss of my life",
];
export default function LyricPage() {
  return (
    <Container className="py-6 pb-72">
      <div className="flex flex-col gap-y-8 ms-16">
        {lyrics.map((lyric, i) => (
          <span
            key={typeof lyric === "string" ? lyric + i : i}
            className="font-semibold text-5xl text-white/80 hover:text-white/90 cursor-pointer hover:underline"
          >
            {lyric}
          </span>
        ))}
      </div>
    </Container>
  );
}
