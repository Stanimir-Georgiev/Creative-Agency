const styles = {
  bmBurgerButton: {
    position: "absolute",
    width: "2em",
    height: "2em",
    right: "1em",
    top: "2em",
  },
  bmBurgerBars: {
    background: "var(--color-content)",
  },
  bmCrossButton: {
    height: "2em",
    width: "2em",
  },
  bmCross: {
    background: "var(--color-content)",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: "0",
  },
  bmMenu: {
    background: "var(--color-primary-darker-3)",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmItemList: {
    padding: "3em",
  },
  bmItem: {
    display: "block",
    color: "var(--color-content)",
    textDecoration: "none",
    fontSize: "var(--typography-size-xxl)",
    marginBottom: "1.5em",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
}

export default styles
