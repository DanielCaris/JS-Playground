const Stylesheet = {
  create: ({
    margin,
    padding,
    paddingVertical,
    paddingHorizontal,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    marginVertical,
    marginHorizontal,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    style = {},
  }) => {
    const marginStyle = {};
    if (margin) {
      marginStyle.margin = margin;
    }
    if (marginVertical) {
      marginStyle.marginTop = marginVertical;
      marginStyle.marginBottom = marginVertical;
    }
    if (marginHorizontal) {
      marginStyle.marginLeft = marginHorizontal;
      marginStyle.marginRight = marginHorizontal;
    }
    if (marginTop) {
      marginStyle.marginTop = marginTop;
    }
    if (marginRight) {
      marginStyle.marginRight = marginRight;
    }
    if (marginBottom) {
      marginStyle.marginBottom = marginBottom;
    }
    if (marginLeft) {
      marginStyle.marginLeft = marginLeft;
    }

    const paddingStyle = {};
    if (padding) {
      paddingStyle.padding = padding;
    }
    if (paddingVertical) {
      paddingStyle.paddingTop = paddingVertical;
      paddingStyle.paddingBottom = paddingVertical;
    }
    if (paddingHorizontal) {
      paddingStyle.paddingLeft = paddingHorizontal;
      paddingStyle.paddingRight = paddingHorizontal;
    }
    if (paddingTop) {
      paddingStyle.paddingTop = paddingTop;
    }
    if (paddingRight) {
      paddingStyle.paddingRight = paddingRight;
    }
    if (paddingBottom) {
      paddingStyle.paddingBottom = paddingBottom;
    }
    if (paddingLeft) {
      paddingStyle.paddingLeft = paddingLeft;
    }

    return {
      ...marginStyle,
      ...paddingStyle,
      ...style,
    };
  },
};

export default Stylesheet;
