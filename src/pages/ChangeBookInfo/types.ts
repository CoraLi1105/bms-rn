export interface BookInfoSummaryType {
  title: string;
  imgUrl: string;
  author: string;
  remain: string;
  state: string;
}

export interface BookInfoType {
  category: string;
  pubDate: string;
  basicinfo: string;
  pubhouse: string;
  language: string;
  ISBN: string;
}

export interface BookeInfoData {
  info: BookInfoType;
  desc: string;
  detail: string;
  commenttitle: string;
  comment: string;
  summary: BookInfoSummaryType;
}
