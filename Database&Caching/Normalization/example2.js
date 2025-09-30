const state = {
  users: [
    {
      id: 1,
      name: "Alice",
      posts: [
        {
          id: 101,
          title: "Post 1",
          comments: [{ id: 201, text: "Comment 1" }],
        },
      ],
    },
    {
      id: 2,
      name: "Bob",
      posts: [
        {
          id: 102,
          title: "Post 2",
          comments: [{ id: 202, text: "Comment 2" }],
        },
      ],
    },
  ],
  tags: [
    { id: 301, name: "Tech", posts: [{ id: 101 }, { id: 102 }] },
    { id: 302, name: "Travel", posts: [{ id: 102 }] },
  ],
};

// Normalized state:
const normalizedState = {
  users: {
    byuserIds: {
      1: { id: 1, name: "Alice", postIds: [101] },
      2: { id: 2, name: "Bob", postIds: [102] },
    },
    allIds: [1, 2],
  },
  posts: {
    byPostId: {
      101: { id: 101, title: "Post 1", userId: 1, commentIds: [201] },
      102: { id: 102, title: "Post 2", userId: 2, commentIds: [202] },
    },
    allIds: [101, 102],
  },
  comments: {
    bycommentIds: {
      201: { id: 201, text: "Comment 1" },
      202: { id: 202, text: "Comment 2" },
    },
    allIds: [201, 202],
  },
  tags: {
    byTagId: {
      301: { id: 301, name: "Tech", postIds: [101, 102] },
      302: { id: 302, name: "Travel", postIds: [102] },
    },
    allIds: [301, 302],
  },
};
