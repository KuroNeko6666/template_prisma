import { PostModel } from "../model/post/post.model";

export const ACTIVITY_DUMP: PostModel[] = [
  {
    id: 1,
    user_id: 1,
    post_type: "activity",
    name: "Agung Priyatno",
    images: [
      "https://fakeimg.pl/1000x1000/?text=Dump1",
      "https://fakeimg.pl/1000x1000/?text=Dump2",
      "https://fakeimg.pl/1000x1000/?text=Dump3",
    ],
    caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique libero nemo nihil ullam, asperiores rerum provident dignissimos saepe nobis ut quo modi ipsa suscipit voluptas, labore unde! Dicta ipsa quae nulla quis aspernatur rem minima soluta sequi sed, sapiente molestiae, incidunt necessitatibus non unde id optio quas. Vel voluptatem impedit in repellendus minima necessitatibus fugiat reiciendis quia, facere dolorum cum et est molestias qui doloribus aspernatur enim esse accusamus omnis ducimus dicta reprehenderit assumenda aliquam? Suscipit laboriosam laborum, fugiat voluptatibus ullam molestias dicta velit libero et ab reprehenderit earum corporis ducimus accusamus aliquam dignissimos facere maiores labore. Nostrum aperiam, perferendis ipsam nam cupiditate assumenda amet quisquam alias minus quam mollitia quidem eos eveniet aliquam qui dicta iusto maiores! Tempora pariatur similique quisquam voluptas atque reiciendis obcaecati, in corrupti vero deleniti veritatis illo vel, est natus hic repellendus aliquid a libero ab adipisci possimus asperiores nam facilis. Rerum, quia sint? Omnis!    ",
    like_count: 1000,
    save_count: 100,
    comment_count: 1000,
    view_count: 3000,
    category: ["HTML", "CSS", "Javascript"],
    recent_comments: [
      {
        id: 1,
        post_id: 1,
        user_id: 2,
        name: "Triadi Agung Gumelar",
        message: "lorem impus dolor sim."
      },
      {
        id: 1,
        post_id: 1,
        user_id: 2,
        name: "Triadi Agung Gumelar",
        message: "lorem impus dolor sim."
      },
      {
        id: 1,
        post_id: 1,
        user_id: 2,
        name: "Triadi Agung Gumelar",
        message: "lorem impus dolor sim."
      }
    ]
  },
  {
    id: 1,
    user_id: 1,
    post_type: "job",
    payment_time: "h",
    payment: "$30",
    job_type: "Full Time",
    name: "Pt. Jaya Abadi",
    title: "Fullstack Developer",
    caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    like_count: 1000,
    save_count: 100,
    comment_count: 1000,
    view_count: 3000,
    category: ["HTML", "CSS", "Javascript"],
    recent_comments: [
      {
        id: 1,
        post_id: 1,
        user_id: 2,
        name: "Triadi Agung Gumelar",
        message: "lorem impus dolor sim."
      },
      {
        id: 1,
        post_id: 1,
        user_id: 2,
        name: "Triadi Agung Gumelar",
        message: "lorem impus dolor sim."
      },
      {
        id: 1,
        post_id: 1,
        user_id: 2,
        name: "Triadi Agung Gumelar",
        message: "lorem impus dolor sim."
      }
    ]
  }
]
