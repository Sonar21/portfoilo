// app/_libs/microcms.ts
import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries, MicroCMSListContent, MicroCMSImage } from "microcms-js-sdk";
  if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// Skill type
export type Skill = {
  name: string;
  icon?: MicroCMSImage;
  
} & MicroCMSListContent;


// news
export type NewsItem = {

  title: string;
  description: string;
  image: MicroCMSImage;
};
// Fetch skills
export const getSkillList = async (queries?: MicroCMSQueries) => {
  return await client.getList<Skill>({
    endpoint: "skills",
    queries,
  });
};
// export const getNewsList =async(queries? :MicroCMSQueries) =>{
//   return await client.getList<New>({
//     endpoint: "news",
//     queries,
//   })
// }
export const getNewsList = async (queries?:MicroCMSQueries) =>
  await client.getList<NewsItem>({
    endpoint: 'news',
    queries,
  });

