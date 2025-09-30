// Problem statement:

const state = {
  users: [
    {
      id: 1,
      name: "Alice",
      posts: [
        { id: 101, title: "Post 1" },
        { id: 102, title: "Post 2" },
      ],
    },
    {
      id: 2,
      name: "Bob",
      posts: [{ id: 103, title: "Post 3" }],
    },
  ],
};

// Normalized state:

const normalizedState = {
  state: {
    bystateIds: {
      1: { id: 1, name: "Alice", postIds: [101, 102] },
      2: { id: 2, name: "Bob", postIds: [103] },
    },
    allIds: [1, 2],
  },
  posts: {
    byPostId: {
      101: { id: 101, title: "Post 1", userId: 1 },
      102: { id: 102, title: "Post 2", userId: 1 },
      103: { id: 103, title: "Post 3", userId: 2 },
    },
    allIds: [101, 102, 103],
  },
};
