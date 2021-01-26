const styles = {
  bmBurgerButton: {
    position: "absolute",
    width: "var(--typography-size-xxl)",
    height: "var(--typography-size-xxl)",
    right: "1em",
    top: "2em",
  },
  bmBurgerBars: {
    background: "var(--color-content)",
  },
  bmCrossButton: {
    height: "var(--typography-size-xxl)",
    width: "var(--typography-size-xxl)",
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
    padding: "calc(var(--typography-size-m) * 2)",
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
