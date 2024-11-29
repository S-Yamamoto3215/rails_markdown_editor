import { Controller } from "@hotwired/stimulus";
import { marked } from "marked";

export default class extends Controller {
  static targets = ["input", "preview"];

  connect() {
    this.inputTarget.addEventListener("input", () => this.updatePreview());
  }

  updatePreview() {
    const markdownText = this.inputTarget.value;
    this.previewTarget.innerHTML = marked(markdownText);
  }
}
