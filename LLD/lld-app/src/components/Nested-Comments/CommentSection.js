import React from "react";

const CommentSection = ({ data = [] }) => {
  if (!data.length) return null;

  return (
    <div className="space-y-3 m-2">
      {data.map((comment, index) => (
        <div key={index} className="flex items-start gap-2">
          <img
            src={`https://ui-avatars.com/api/?name=${comment.username}&background=random`}
            alt="User Avatar"
            className="w-8 h-8 rounded-full mt-1"
          />

          {/* Comment Content */}
          <div className="flex-1">
            <div className="text-sm">
              <span className="font-semibold text-gray-800">
                {comment.username}
              </span>
            </div>
            <p className="text-gray-700 text-sm">{comment.comment}</p>

            {/* Nested Replies */}
            {comment.replies && comment.replies.length > 0 && (
              <div className="pl-6 mt-2 border-l border-gray-300">
                <CommentSection data={comment.replies} />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
