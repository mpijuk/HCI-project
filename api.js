const api = {
    getBlogs: async () => {
        const res = await fetch(`${process.env.API_URL}/api/collections/blogs/records`);

        if (res.status !== 200) {
            throw new Error('Request failed');
        }

        return res.json();
    },
    getBlogBySlug: async (slug) => {
        const res = await fetch(`${process.env.API_URL}/api/collections/blogs/records`);
        const data = await res.json();

        const post = data.items.filter((item) => item.slug == slug);

        if (res.status !== 200 || post == []) {
            throw new Error('Request failed');
        }

        return post[0];
    },
}

export default api;