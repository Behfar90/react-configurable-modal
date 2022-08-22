export default function setStyleProperty(animation) {
  var root = document.documentElement;

  switch (animation) {
    case "top":
      root.style.setProperty("--WillChangeAnimationVertical", "-100%");
      break;
    case "bottom":
      root.style.setProperty("--WillChangeAnimationVertical", "100%");
      break;
    case "left":
      root.style.setProperty("--WillChangeAnimationHorizontal", "-100%");
      break;
    case "right":
      root.style.setProperty("--WillChangeAnimationHorizontal", "100%");
      break;
    default:
      break;
  }
}
