import React from "react";
import CommentSection from "./CommentSection";

const CommentsData = [
  {
    username: "Shubham",
    comment: "This is an awesome post!",
    replies: [
      {
        username: "Ankush",
        comment: "I agree with you!",
        replies: [
          {
            username: "Rohit",
            comment: "Me too!",
            replies: [
              {
                username: "Ankush",
                comment: "Exactly!",
                replies: [
                  {
                    username: "Rohit",
                    comment: "Absolutely!",
                    replies: [
                      {
                        username: "Shekher",
                        comment: "Same here!",
                        replies: [
                          {
                            username: "Rohit",
                            comment: "Great minds think alike!",
                            replies: [
                              {
                                username: "Shubham",
                                comment: "Haha true that!",
                                replies: [
                                  {
                                    username: "Ankush",
                                    comment: "Glad we all agree!",
                                    replies: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        username: "Rohit",
        comment: "Well said!",
        replies: [
          {
            username: "Mayuri",
            comment: "Totally! I feel the same way.",
            replies: [
              {
                username: "Shubham",
                comment: "Thanks everyone for the support!",
                replies: [
                  {
                    username: "Archana",
                    comment: "You deserve it!",
                    replies: [
                      {
                        username: "Prerna",
                        comment: "Absolutely agree with Archana!",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    username: "Archana",
    comment: "Nice one!",
    replies: [
      {
        username: "Shubham",
        comment: "Thanks, Archana!",
        replies: [
          {
            username: "Rohit",
            comment: "You always appreciate good work!",
            replies: [
              {
                username: "Archana",
                comment: "Haha, I try to! 😊",
                replies: [
                  {
                    username: "Mayuri",
                    comment: "That’s a nice attitude!",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    username: "Mayuri",
    comment: "Great work!",
    replies: [
      {
        username: "Ankush",
        comment: "Couldn't agree more!",
        replies: [
          {
            username: "Rohit",
            comment: "Yes, it’s amazing!",
            replies: [
              {
                username: "Prerna",
                comment: "The details are impressive!",
                replies: [
                  {
                    username: "Shubham",
                    comment: "Thank you all for the appreciation!",
                    replies: [
                      {
                        username: "Ankush",
                        comment: "You earned it!",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    username: "Prerna",
    comment: "Loved it!",
    replies: [
      {
        username: "Rohit",
        comment: "Same here! 🔥",
        replies: [
          {
            username: "Archana",
            comment: "You both have great taste 😄",
            replies: [
              {
                username: "Ankush",
                comment: "Haha, we sure do!",
                replies: [
                  {
                    username: "Mayuri",
                    comment: "This thread is getting fun!",
                    replies: [
                      {
                        username: "Shubham",
                        comment: "That’s what good content does 😎",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const NestedComments = () => {
  return (
    <div>
      <CommentSection data={CommentsData} />
    </div>
  );
};

export default NestedComments;
