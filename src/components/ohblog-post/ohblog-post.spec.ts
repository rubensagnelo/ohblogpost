import { newSpecPage } from '@stencil/core/testing';
import { OhblogpostComponent } from './ohblog-post';

describe('ohblog-post', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [OhblogpostComponent],
      html: '<ohblog-post></ohblog-post>'
    });
    expect(root).toEqualHtml(`
      <ohblog-post>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ohblog-post>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [OhblogpostComponent],
      html: `<ohblog-post first="Stencil" last="'Don't call me a framework' JS"></ohblog-post>`
    });
    expect(root).toEqualHtml(`
      <ohblog-post first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ohblog-post>
    `);
  });
});
