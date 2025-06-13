// import { createClient } from "microcms-js-sdk";
// import type {
//   MicroCMSQueries,
//   MicroCMSListContent,
// } from "microcms-js-sdk";

// export type Skill = {
//   name: string;
//   icon: {
//     url: string;
//   };
// } & MicroCMSListContent;

// if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
//   throw new Error("NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN is required");
// }

// if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
//   throw new Error("NEXT_PUBLIC_MICROCMS_API_KEY is required");
// }

// const client = createClient({
//   serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
//   apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
// });

// export const getSkillsList = async (queries?: MicroCMSQueries) => {
//   const listData = await client.getList<Skill>({
//     endpoint: "skills",
//     queries,
//   });

//   return listData;
// };
// _libs/microcms.ts (or wherever getSkillsList is defined)
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY!,
});

export type Skill = {
  name: string;
  icon: {
    url: string;
  };
} & { id: string; };

export const getAllSkills = async () => {
  const allSkills: Skill[] = [];
  let offset = 0;
  const limit = 50;

  while (true) {
    const res = await client.getList<Skill>({
      endpoint: "skills",
      queries: { limit, offset },
    });

    allSkills.push(...res.contents);

    if (res.totalCount <= offset + limit) break; // no more data

    offset += limit;
  }

  return allSkills;
};
