import { remark } from 'remark';
import remarkGfm from 'remark-gfm'
import html from 'remark-html';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

/**
 * Retrieves an array of blog post data sorted by date.
 * If a tag is provided, returns only the blog posts with the given tag.
 *
 * @param {string} [tag] - Optional tag to filter the posts by.
 * @returns {Array} - An array of sorted blog post data.
 */
export function getSortedPostsData(tag) {
  
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // TODO: Check getPostData()
    const contentPreview = remark().use(html).processSync(matterResult.content).toString();

    // Combine the data with the id
    return {
      id,
      contentPreview,
      ...matterResult.data,
    };
  });

  // Check if there is a tag entered as a paremeter
  // If there is a tag, return only the posts with given tag
  if (tag) {
    const allPostDataFilteredByTag = allPostsData.filter(post => post.tags.includes(tag));

    return allPostDataFilteredByTag.sort(({ date: a }, { date: b }) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

/**
 * Retrieves all unique tags from the blog posts.
 *
 * @returns {Array} - An array of unique tags.
 */
export function getAllTags() {
  // I'm using an imperative approach. I don't like that.
  // TODO: Change to something that looks more functional.
  const allTagArrays = getSortedPostsData().map(({tags}) => tags )
  const allTags = []

  for (const tagArray of allTagArrays) {
    for (const tag of tagArray) {
      if (!allTags.includes(tag)) {
        allTags.push(tag)
      } 
    }
  }

  return allTags.map((tag) => {
    return {
      params: {
        id: tag,
      },
    };
  });
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
  
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    
    return fileNames.map((fileName) => {
      
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      };
    });
  }

  export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
  const processedContent = await remark()
  .use(html)
  .use(remarkGfm)
  .process(matterResult.content);
const contentHtml = processedContent.toString();
  
    // Combine the data with the id
    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  }