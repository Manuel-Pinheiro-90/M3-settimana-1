import { iPost } from "./ipost"

export interface iArticle {
  posts: iPost[]
  total: number
  skip: number
  limit: number
}

