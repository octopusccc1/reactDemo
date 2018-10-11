import React from 'react';
import Loadable from 'react-loadable';
export default Loadable({
  loader: () => import('../libs/markdown/index'),
  render(Markdown, props) {
    class Demo extends Markdown.default {
      document() {
        let markdown;
        markdown = require(`../Md/${props.params.demo}.md`);
        return markdown;
      }
    }
    return <Demo {...props} />;
  },
  loading: () => <div></div>
});
