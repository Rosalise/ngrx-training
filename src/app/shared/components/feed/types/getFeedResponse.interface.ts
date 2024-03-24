import { ArticleInterface } from "../../../types/article.inteface";

export interface GetFeedResponseInterface {
    articles: ArticleInterface[]
    articlesCount: number;
}