export const getGlobalData = () => {
    const name = process.env.BLOG_NAME
        ? decodeURI(process.env.BLOG_NAME)
        : 'No.9527';
    const blogTitle = process.env.BLOG_TITLE
        ? decodeURI(process.env.BLOG_TITLE)
        : `This is Mr.Lai's house.`;
    const footerText = process.env.BLOG_FOOTER_TEXT
        ? decodeURI(process.env.BLOG_FOOTER_TEXT)
        : 'All rights reserved.';

    return {
        name,
        blogTitle,
        footerText,
    };
};
