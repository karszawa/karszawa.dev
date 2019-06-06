import * as React from 'react';
import Article from '../../components/Article';

const Index: React.SFC<{}> = () => (
  <div>
    <section>
      <h1>karszawa.dev</h1>
      <Article>
        <h2>Hello</h2>
        <p>This is a first article of my blog.</p>
      </Article>
    </section>
  </div>
);

export default Index;
