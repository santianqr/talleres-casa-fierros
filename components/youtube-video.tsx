import { YouTubeEmbed } from "@next/third-parties/google";

export default function YoutubeVideo() {
  return (
    <YouTubeEmbed videoid="JDR54G1R8cM" params="controls=0" />
  );
}
