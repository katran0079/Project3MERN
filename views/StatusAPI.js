//if this doesnt work just comment out ill take the L

class MessageBoardAPI {
  constructor(comments = []) {
    this.comments = comments;
  }

  addComment(text) {
    const id =
      this.comments.length > 0
        ? this.comments[this.comments.length - 1].id + 1
        : 0;
    const timestamp = Date.now();
    this.comments.push({
      text,
      id,
      timestamp
    });
    return this.comments;
  }

  updateComment(id, text) {
    this.comments.find(comment => comment.id === id).text = text;
    return this.comments;
  }

  removeComment(id) {
    const index = this.comments.findIndex(comment => comment.id === id);
    this.comments.splice(index, 1);
    return this.comments;
  }

  getCommentsSortedByTime(orderAsc = true) {
    const clonedComments = JSON.parse(JSON.stringify(this.comments));
    return clonedComments.sort((lhs, rhs) => {
      if (orderAsc) {
        return lhs.timestamp < rhs.timestamp ? -1 : 1;
      }
      return lhs.timestamp < rhs.timestamp ? 1 : -1;
    });
  }

  filterCommentsByText(substring = "") {
    return this.comments.filter(comment =>
      comment.text.toLowerCase().includes(substring.toLowerCase())
    );
  }
}

export default MessageBoardAPI;

// Use this comment data for testing
export const commentData = [
  {
    text: "Love this!",
    id: 1,
    timestamp: 1549581565
  },
  {
    text: "Think I may start a new project today!",
    id: 2,
    timestamp: 1549577965
  },
  {
    text: "You are the best",
    id: 3,
    timestamp: 1549495165
  },
  {
    text: "Check out my YouTube channel!",
    id: 4,
    timestamp: 1548976765
  },
  {
    text: "Nice Nice Nice!",
    id: 5,
    timestamp: 1546903165
  }
];
