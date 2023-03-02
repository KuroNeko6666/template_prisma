import { CommentModel } from "../comment/comment.model"

export class PostModel {
  id?: number
  user_id?: number
  company_id?: number
  name?: string
  images?: string[]
  title?: string
  caption?: string
  like_count?: number
  save_count?: number
  comment_count?: number
  view_count?: number
  recent_comments?: CommentModel[]
  post_type?: string
  job_type?: string
  payment_time?: string
  payment?: string
  category?: string[]

  constructor(data : PostModel){
    Object.assign(this, data)
  }
}
