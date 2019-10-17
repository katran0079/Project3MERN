//using vanilla.js if this doesnt work just comment it out i guess? :(

export default class CommentList extends HTMLElement {
  get comments() {
    if (this.hasAttribute("comments")) {
      // transforms string attribute back into an array
      return JSON.parse(this.getAttribute("comments"));
    }
    return [];
  }

  // allows us to set "comments" attribute by using this.comments = newVal
  set comments(val) {
    // transform array into string via JSON.stringify
    this.setAttribute("comments", JSON.stringify(val));
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = "";
    this.comments.forEach(comment => {
      // create a comment-list element
      const newComment = document.createElement("message-board-comment-item");
      // set its comment attribute
      // newComment.setAttribute('comment', JSON.stringify(comment));
      newComment.comment = comment;
      // append it to comment list
      this.append(newComment);
    });
  }

  static get observedAttributes() {
    return ["comments"];
  }

  // listens for changes on the observed attributes
  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render();
  }
}
