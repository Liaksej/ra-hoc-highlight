import { Video } from "@/components/Video";
import { Article } from "@/components/Article";
import { ArticleListItem, VideoListItem } from "@/app/page";
import { withNewOrPopular } from "@/components/NewOrPopupar";

interface ListProps {
  list: (ArticleListItem | VideoListItem)[];
}

const VideoWithNewOrPopular = withNewOrPopular(Video);
const ArticleWithNewOrPopular = withNewOrPopular(Article);

export function List(props: ListProps) {
  return props.list.map((item, index) => {
    switch (item.type) {
      case "video":
        return <VideoWithNewOrPopular key={index} {...item} />;

      case "article":
        return <ArticleWithNewOrPopular key={index} {...item} />;
    }
  });
}
