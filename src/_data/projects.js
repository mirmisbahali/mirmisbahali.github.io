require("dotenv").config();

const sanityClient = require("@sanity/client");
const toMarkdown = require("@sanity/block-content-to-markdown");

const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2021-06-07", // use current UTC date - see "specifying API version"!
  useCdn: true, // `false` if you want to ensure fresh data
});

const serializers = {
  types: {
    code: (props) =>
      "```" + props.node.language + "\n" + props.node.code + "\n```",
  },
};

module.exports = async function () {
  const query = `*[_type=='project' && !(*[_type == "category" && title=="Featured Project"][0]._id in categories[]._ref)] {
    title,
    slug,
    body,
    excerpt,
    publishedAt,
    mainImage {
    asset -> {_id, url},
  alt
  },
categories
  }`;
  const params = {};

  return await client.fetch(query, params).then((posts) => {
    return posts.map((p) => {
      return {
        title: p.title,
        slug: p.slug.current,
        body: toMarkdown(p.body, { serializers, ...client.config() }),
        excerpt: p.excerpt,
        imgURL: p.mainImage.asset.url,
        imgAlt: p.mainImage.asset.alt,
        publishedAt: p.publishedAt,
      };
    });
  });
};
